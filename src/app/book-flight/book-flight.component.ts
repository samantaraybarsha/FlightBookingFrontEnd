import { Component, OnInit } from '@angular/core';
import { PassengerModel } from '../Models/passenger-model';
import { FormArray,FormGroup ,FormBuilder} from '@angular/forms';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { BookTicketModel } from '../Models/book-ticket-model';
import { FlightServiceService } from '../flight-service.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent {
  flightDetails:BookTicketModel|undefined;
  
  // localStorage.setItem('toPlace',value.toPlace);
  // localStorage.setItem('fromPlace',value.fromPlace);
  // localStorage.setItem('departureTime',value.departureTime);
  // localStorage.setItem('arrivalTime',value.arrivalTime);
  // localStorage.setItem('totalCost',value.totalCost.toString());

  name = 'Angular';  
  passengerModelList:PassengerModel[]=[];
  passengerModel:PassengerModel|undefined;
  passengerForm: FormGroup; 
     
  constructor(private fb:FormBuilder,private _service: FlightServiceService) {  
     
    this.passengerForm = this.fb.group({  
      passengers: this.fb.array([]) ,  
    });  
  }  
  ngOnInit(): void {
    // this.flightDetails={
    //   "airLineName": localStorage.getItem('airLineName'),

    // } 
  }
  passengers() : FormArray {  
    return this.passengerForm.get("passengers") as FormArray  
  }  
     
  newPassenger(): FormGroup {  
    return this.fb.group({  
      name: '',  
      age: '',  
    })  
  }  
     
  addPassenger() {  
    this.passengers().push(this.newPassenger());  
  }  
     
  removePassenger(i:number) {  
    this.passengers().removeAt(i);  
  }  
     
  onSubmit() { 
   let formValue =this.passengerForm.value;
   let pass=formValue.passengers;
    for(let i=0;i<pass.length;i++)
    {
      this.passengerModel={
        "passengerId": 0,
    "ticketId": 0,
    "name": pass[i].name,
    "age": pass[i].age,
    "email": "string",
    "seatNumber": "4F",
    "meal": "veg"
      }
      this.passengerModelList.push(this.passengerModel);
     console.log(this.passengerModelList);
    }
    this._service.bookFlight(this.passengerModelList).subscribe(data => {
     alert(data);
     for(let i=0; i<pass.length;i++)
     {
      this.passengers().removeAt(i);
     }
      
     this.passengerForm.reset();
      }
    //  (error)=>{console.log(error)}
    
    )
  }  
}

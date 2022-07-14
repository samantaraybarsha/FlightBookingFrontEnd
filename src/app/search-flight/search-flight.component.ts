import { Component, OnInit } from '@angular/core';
import { FlightSearchModel } from '../Models/flight-search-model';
import { FormBuilder,Validators } from '@angular/forms';
import { FlightServiceService } from '../flight-service.service';
import { FlightSearchDetails } from '../Models/flight-search-details';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {

  searchFlightForm:any;
  submitted:boolean=false;
  flightModel:FlightSearchModel|undefined;
  flightsearchModelList:FlightSearchDetails[]|undefined;
    constructor(private formBuilder: FormBuilder,private _service: FlightServiceService) { }
    ngOnInit(): void {
      this.searchFlightForm=this.formBuilder.group({
        fromPlace:['',Validators.required],
        toPlace:['',Validators.required],
        departureDate:['',Validators.required],
        tripType:['',Validators.required],
        returnDate:['']
            });
    }
    get f(){return this.searchFlightForm.controls;}
    onSubmit(value:any)
    {
      this.submitted=true;
  
      if(this.searchFlightForm.invalid)
      {
        return;
      }
      let searchflightInputs = this.searchFlightForm.value;
      this.flightModel = {
        
          "fromPlace": searchflightInputs.fromPlace,
          "toPlace": searchflightInputs.toPlace,
          "departureDate": searchflightInputs.departureDate,
          "tripType": searchflightInputs.tripType,
          "returnDate": searchflightInputs.returnDate==""?new Date:searchflightInputs.returnDate
     
         
       
      }
      this._service.searchFlight(this.flightModel).subscribe(data => {
        this.flightsearchModelList=data;
      })
    }
  onReset()
  {
    this.submitted=false;
    this.searchFlightForm.reset();
  }
//   bookFlight(value:FlightSearchDetails)
// {


  // this._service.blockFlight(value.flightId).subscribe(data => {
  //   alert(data);
  // })
//}
  }
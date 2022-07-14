import { Component, OnInit } from '@angular/core';
import { FormBuilder,AbstractControl,FormGroup, Validators } from '@angular/forms';
import { FlightServiceService } from '../flight-service.service';
import { BookTicketModel } from '../Models/book-ticket-model';
import { PassengerModel } from '../Models/passenger-model';

@Component({
  selector: 'app-booked-ticket-details',
  templateUrl: './booked-ticket-details.component.html',
  styleUrls: ['./booked-ticket-details.component.css']
})
export class BookedTicketDetailsComponent implements OnInit {
  ticketSearchForm:any;
submitted:boolean=false;
ticketModel:BookTicketModel|undefined;
ticketModelList:BookTicketModel[]|undefined;
passengerDetails:PassengerModel[]|undefined;
  constructor(private formBuilder: FormBuilder, private _service: FlightServiceService) { }

  ngOnInit(): void {
    this.ticketSearchForm=this.formBuilder.group({
      pnr:[''],
      email:['']
          });
  }
  get f(){return this.ticketSearchForm.controls;}
  pnrSearch()
  {
    
this.submitted=true;
    let bookedTicket = this.ticketSearchForm.value;
   
    this._service.searchByPnr(bookedTicket.pnr).subscribe(data => {
      this.ticketModel=data;
    })

  }
  emailSearch()
  {

  this.submitted=true;
  let bookedTicket = this.ticketSearchForm.value;

  this._service.searchByEmail(bookedTicket.email).subscribe(data => {
    console.log(data);
    this.ticketModelList=data;
  })
}
cancelTicket(pnr:string)
{
  this._service.cancelTicket(pnr).subscribe(data => {
    console.log(data);
    alert(data);
  })
}
viewPassengerDetails(ticketId:number)
{

if(this.ticketModel!=null && this.ticketModel.ticketId==ticketId)
{
this.passengerDetails=this.ticketModel.passenger;
}
else if(this.ticketModelList!=null)
{
for(let i=0;i<this.ticketModelList.length;i++)
if(this.ticketModelList[i].ticketId==ticketId)
{
  this.passengerDetails=this.ticketModelList[i].passenger;
}
}
}

  
}

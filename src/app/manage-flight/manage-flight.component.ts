import { Component, OnInit } from '@angular/core';
import { FormBuilder,AbstractControl,FormGroup, Validators } from '@angular/forms';
import { FlightServiceService } from '../flight-service.service';
import { AirLineModel } from '../Models/air-line-model';
import { DiscountModel } from '../Models/discount-model';
import { FlightModel } from '../Models/flight-model';

@Component({
  selector: 'app-manage-flight',
  templateUrl: './manage-flight.component.html',
  styleUrls: ['./manage-flight.component.css']
})
export class ManageFlightComponent implements OnInit {
  addFlightForm:any;
  submitted:boolean=false;
  discountModelList:DiscountModel[]|undefined;
  airlineModelList:AirLineModel[]|undefined;
  flightModel:FlightModel|undefined;
    constructor(private formBuilder: FormBuilder,private _service: FlightServiceService) { }
    ngOnInit(): void {

      this._service.FetchAirline().subscribe(data => {

this.airlineModelList=data;
      })
      

      //  this._service.FetchDiscount().subscribe(data => {
      //   this.discountModelList=data;
      // })


      this.addFlightForm=this.formBuilder.group({
        flightNumber:['',Validators.required],
        airlineId:['',Validators.required],
        //schedule:['',Validators.required],
        fromPlace:['',Validators.required],
        toPlace:['',Validators.required],
        departureTime:['',Validators.required],
        arrivalTime:['',Validators.required],
        instrumentUser:['',Validators.required],
        businessSeats:['',Validators.required],
        nonBusinessSeats:['',Validators.required],
        cost:['',Validators.required],
        noOfRows:['',Validators.required]
            });
    }
    get f(){return this.addFlightForm.controls;}
    onSubmit()
    {
      this.submitted=true;
  
      if(this.addFlightForm.invalid)
      {
        return;
      }
      let flightInputs = this.addFlightForm.value;
      this.flightModel = {
        "flightId":0,
          "flightNumber":flightInputs.flightNumber,
          "airlineId": flightInputs.airlineId,
          "fromPlace": flightInputs.fromPlace,
          "toPlace": flightInputs.toPlace,
          "departureTime":flightInputs.departureTime,
          "arrivalTime": flightInputs.arrivalTime,
          "instrumentUsed": flightInputs.instrumentUsed,
          "totalNumberOfBusinessClassSeats": flightInputs.totalNumberOfBusinessClassSeats,
          "totalNumberOfNonBusinessClassSeats": flightInputs.totalNumberOfNonBusinessClassSeats,
          "cost": flightInputs.cost,
          "numberofRows": flightInputs.numberofRows,
          "isActive": true
       
      }
      this._service.addFlight(this.flightModel).subscribe(data => {
        alert(data);
      })
    }
  onReset()
  {
    this.submitted=false;
    this.addFlightForm.reset();
  }
  }
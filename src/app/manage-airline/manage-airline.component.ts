import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,AbstractControl,FormGroup, Validators } from '@angular/forms';
import { FlightServiceService } from '../flight-service.service'
import { AirLineModel } from '../Models/air-line-model';
@Component({
  selector: 'app-manage-airline',
  templateUrl: './manage-airline.component.html',
  styleUrls: ['./manage-airline.component.css']
})
export class ManageAirlineComponent implements OnInit {
  addAirlineForm:any;
submitted:boolean=false;
airlineModel:AirLineModel | undefined;
  constructor(private formBuilder: FormBuilder, private _service: FlightServiceService) { }
  ngOnInit(): void {
    this.addAirlineForm=this.formBuilder.group({
      airlineName:['',Validators.required],
      logo:['',Validators.required],
      contactNumber:['',Validators.compose([Validators.required,Validators.pattern("[0-9]{10}")])],
      contactAddress:['',Validators.required]
          });
  }
  get f(){return this.addAirlineForm.controls;}
  onSubmit()
  {
    this.submitted=true;

    if(this.addAirlineForm.invalid)
    {
      return;
    }
    let airlineInputs = this.addAirlineForm.value;
    this.airlineModel = {
      "airlineId":0,
      "airlineName": airlineInputs.airlineName,
      "logo": airlineInputs.logo,
      "contactNumber": airlineInputs.contactNumber,
      "contactAddress": airlineInputs.contactAddress
    }
    this._service.addAirline(this.airlineModel).subscribe(data => {
      alert(data);
    })
  }
onReset()
{
  this.submitted=false;
  this.addAirlineForm.reset();
}
}

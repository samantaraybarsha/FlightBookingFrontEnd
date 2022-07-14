import { Component, OnInit } from '@angular/core';
import { FormBuilder,AbstractControl,FormGroup, Validators } from '@angular/forms';
import { FlightServiceService } from '../flight-service.service';
import { AirLineModel } from '../Models/air-line-model';
import { ScheduleModel } from '../Models/schedule-model';
import { FlightSearchDetails } from '../Models/flight-search-details';

@Component({
  selector: 'app-manage-schedule',
  templateUrl: './manage-schedule.component.html',
  styleUrls: ['./manage-schedule.component.css']
})
export class ManageScheduleComponent implements OnInit {
  manageScheduleForm:any;
  submitted:boolean=false;
  scheduleModel:ScheduleModel | undefined;
  airlineModelList:AirLineModel[]|undefined;
  flightModelList:FlightSearchDetails[]|undefined;
   constructor(private formBuilder: FormBuilder, private _service : FlightServiceService) { }
    ngOnInit(): void {
      this._service.FetchAirline().subscribe(data => {

        this.airlineModelList=data;
              })

              this._service.FetchFlight().subscribe(data => {

                this.flightModelList=data;
                      })

      this.manageScheduleForm=this.formBuilder.group({
        airlineId:['',Validators.required],
        scheduleDate:['',Validators.required],
        flightId:['',Validators.required]
            });
}
get f(){return this.manageScheduleForm.controls;}
  onSubmit()
  {
    this.submitted=true;

    if(this.manageScheduleForm.invalid)
    {
      return;
    }
    let airlineInputs = this.manageScheduleForm.value;
    this.scheduleModel = {
      "airlineId": airlineInputs.airlineId,
      "flightId": airlineInputs.flightId,
      "scheduledDate": airlineInputs.scheduleDate
    }
    this._service.addSchedule(this.scheduleModel).subscribe(data => {
       alert(data);
     
    })
  }
onReset()
{
  this.submitted=false;
  this.manageScheduleForm.reset();
}

}

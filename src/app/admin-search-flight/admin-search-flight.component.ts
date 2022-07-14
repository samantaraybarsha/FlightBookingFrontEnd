import { Component, OnInit } from '@angular/core';
import { FlightServiceService } from '../flight-service.service';
import { FlightSearchDetails } from '../Models/flight-search-details';

@Component({
  selector: 'app-admin-search-flight',
  templateUrl: './admin-search-flight.component.html',
  styleUrls: ['./admin-search-flight.component.css']
})
export class AdminSearchFlightComponent implements OnInit {

  FlightSearchDetailsList:FlightSearchDetails[]|undefined;
  constructor(private _service : FlightServiceService) { }

  ngOnInit(): void {

    this._service.FetchFlight().subscribe(data => {

      this.FlightSearchDetailsList=data;
            })
  }
  blockFlight(value:FlightSearchDetails)
{
  this._service.blockFlight(value.flightId).subscribe(data => {
    alert(data);
  })
}

}

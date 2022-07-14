import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { AirLineModel } from './Models/air-line-model';
import { ScheduleModel } from './Models/schedule-model';
import { DiscountModel } from './Models/discount-model';
import { RegisterModel } from './Models/register-model';
import { LoginModel } from './Models/login-model';
import { FlightModel } from './Models/flight-model';
import { FlightSearchModel } from './Models/flight-search-model';
import { FlightSearchDetails } from './Models/flight-search-details';
import { BookTicketModel } from './Models/book-ticket-model';
import { PassengerModel } from './Models/passenger-model';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {
baseUrl:string="";
  constructor(private httpClient: HttpClient) { }

addAirline(airLineModel:AirLineModel): Observable<string> {
  this.baseUrl="http://localhost:13386/api/Admin/AddAirline";

  const httpOptions=new HttpHeaders(
    {
    "Content-Type":"application/json",
    "Authorization": 'Bearer ' +localStorage.getItem('Token')
   
    }
      )
  return this.httpClient.post<string>(this.baseUrl, airLineModel,{headers:httpOptions});
  
}
addSchedule(scheduleModel:ScheduleModel): Observable<string> {
  this.baseUrl="http://localhost:13386/api/Admin/AddSchedule";
  const httpOptions=new HttpHeaders(
    {
    "Content-Type":"application/json",
    "Authorization": 'Bearer ' +localStorage.getItem('Token')
   
    }
      )
  return this.httpClient.post<string>(this.baseUrl, scheduleModel,{headers:httpOptions});
    
}
addDiscount(discountModel:DiscountModel): Observable<string> {
  this.baseUrl="http://localhost:13386/api/Admin/AddDiscount";
  const httpOptions=new HttpHeaders(
    {
    "Content-Type":"application/json",
    "Authorization": 'Bearer ' +localStorage.getItem('Token')
   
    }
      )
  return this.httpClient.post<string>(this.baseUrl, discountModel,{headers:httpOptions});
    
}
adduser(userModel:RegisterModel): Observable<string> {
  this.baseUrl="http://localhost:9239/api/Authentication/Register";
  return this.httpClient.post<string>(this.baseUrl, userModel);
    
}
loginuser(login:LoginModel): Observable<string> {
  this.baseUrl="http://localhost:9239/api/Authentication/login";
  return this.httpClient.post<string>(this.baseUrl, login);
}
addFlight(flightModel:FlightModel): Observable<string> {
  this.baseUrl="http://localhost:13386/api/Admin/AddFlight";
  const httpOptions=new HttpHeaders(
    {
    "Content-Type":"application/json",
    "Authorization": 'Bearer ' +localStorage.getItem('Token')
   
    }
      )
  return this.httpClient.post<string>(this.baseUrl, flightModel,{headers:httpOptions});
    
}
searchFlight(flightSearchModel:FlightSearchModel): Observable<FlightSearchDetails[]> {
  this.baseUrl="http://localhost:61014/api/FlightBooking/SearchFlights";
  const httpOptions=new HttpHeaders(
    {
    "Content-Type":"application/json",
    "Authorization": 'Bearer ' +localStorage.getItem('Token')
   
    }
      )
  return this.httpClient.post<FlightSearchDetails[]>(this.baseUrl, flightSearchModel,{headers:httpOptions});
    
}
FetchDiscount(): Observable<DiscountModel[]> {
  this.baseUrl="http://localhost:13386/api/Admin/FetchDiscount";
  const httpOptions=new HttpHeaders(
    {
    "Content-Type":"application/json",
    "Authorization": 'Bearer ' +localStorage.getItem('Token')
   
    }
      )
  return this.httpClient.get<DiscountModel[]>(this.baseUrl,{headers:httpOptions});
    
}
FetchAirline(): Observable<AirLineModel[]> {
  this.baseUrl="http://localhost:13386/api/Admin/FetchAirline";
  const httpOptions=new HttpHeaders(
    {
    "Content-Type":"application/json",
    "Authorization": 'Bearer ' +localStorage.getItem('Token')
   
    }
      )
  return this.httpClient.get<AirLineModel[]>(this.baseUrl,{headers:httpOptions});
    
}
FetchFlight(): Observable<FlightSearchDetails[]> {
  this.baseUrl="http://localhost:13386/api/Admin/FetchFlight";
  const httpOptions=new HttpHeaders(
    {
    "Content-Type":"application/json",
    "Authorization": 'Bearer ' +localStorage.getItem('Token')
   
    }
      )
  return this.httpClient.get<FlightSearchDetails[]>(this.baseUrl,{headers:httpOptions});
    
}
blockFlight(flightId:number): Observable<string> {
  this.baseUrl="http://localhost:13386/api/Admin/BlockFlight?FlightId="+flightId;
  const httpOptions=new HttpHeaders(
    {
    "Content-Type":"application/json",
    "Authorization": 'Bearer ' +localStorage.getItem('Token')
   
    }
      )
  return this.httpClient.post<string>(this.baseUrl,flightId,{headers:httpOptions});
    
}
searchByEmail(email:string): Observable<BookTicketModel[]> {
  this.baseUrl="http://localhost:61014/api/FlightBooking/BookedTicketHistory?EmailId="+email;
  const httpOptions=new HttpHeaders(
    {
    "Content-Type":"application/json",
    "Authorization": 'Bearer ' +localStorage.getItem('Token')
   
    }
      )
  return this.httpClient.get<BookTicketModel[]>(this.baseUrl,{headers:httpOptions});
    
}
searchByPnr(pnr:string): Observable<BookTicketModel> {
  this.baseUrl="http://localhost:61014/api/FlightBooking/BookedTicketDetails?PNR="+pnr;
  const httpOptions=new HttpHeaders(
    {
    "Content-Type":"application/json",
    "Authorization": 'Bearer ' +localStorage.getItem('Token')
   
    }
      )
  return this.httpClient.get<BookTicketModel>(this.baseUrl,{headers:httpOptions});
    
}
cancelTicket(pnr:string): Observable<string> {
  this.baseUrl="http://localhost:61014/api/FlightBooking/CancelTicket?PNR="+pnr;
  const httpOptions=new HttpHeaders(
    {
    "Content-Type":"application/json",
    "Authorization": 'Bearer ' +localStorage.getItem('Token')
   
    }
      )
  return this.httpClient.get<string>(this.baseUrl,{headers:httpOptions});
    
}
bookFlight(passengers:PassengerModel[]): Observable<string> {
  let flightId=localStorage.getItem('flightId')==null?0:Number(localStorage.getItem('flightId'));
  this.baseUrl="http://localhost:61014/api/FlightBooking/BookFlight?flightId="+flightId;
  const httpOptions=new HttpHeaders(
    {
    "Content-Type":"application/json",
    "Authorization": 'Bearer ' +localStorage.getItem('Token')
   
    }
      )
  return this.httpClient.post<string>(this.baseUrl,passengers,{headers:httpOptions});
    
}

}





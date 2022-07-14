import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageAirlineComponent } from './manage-airline/manage-airline.component';
import { ManageScheduleComponent } from './manage-schedule/manage-schedule.component';
import { ManageDiscountComponent } from './manage-discount/manage-discount.component';
import { ManageFlightComponent } from './manage-flight/manage-flight.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { AdminSearchFlightComponent } from './admin-search-flight/admin-search-flight.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { BookedTicketDetailsComponent } from './booked-ticket-details/booked-ticket-details.component';

const routes: Routes = [
  {
    path:'addAirline',
    component:ManageAirlineComponent
  },
  {
    path:'addSchedule',
    component:ManageScheduleComponent
  },
  {
    path:'addDiscount',
    component:ManageDiscountComponent
  },
  {
    path:'addFlight',
    component:ManageFlightComponent
  },
  {
    path:'registerUser',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'adminModule',
    component:AdminMenuComponent
  },
  {
    path:'flightDetails',
    component:AdminSearchFlightComponent
  },
  {
    path:'searchFlight',
    component:SearchFlightComponent
  },
  {
    path:'searchFlight/bookFlight',
    component:BookFlightComponent
  },
  {
    path:'bookedTicket',
component:BookedTicketDetailsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

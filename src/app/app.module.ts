import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageAirlineComponent } from './manage-airline/manage-airline.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ManageScheduleComponent } from './manage-schedule/manage-schedule.component';
import { ManageFlightComponent } from './manage-flight/manage-flight.component';
import { ManageDiscountComponent } from './manage-discount/manage-discount.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { AdminSearchFlightComponent } from './admin-search-flight/admin-search-flight.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { BookedTicketDetailsComponent } from './booked-ticket-details/booked-ticket-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageAirlineComponent,
    ManageScheduleComponent,
    ManageFlightComponent,
    ManageDiscountComponent,
    LoginComponent,
    RegisterComponent,
    UserMenuComponent,
    AdminMenuComponent,
    SearchFlightComponent,
    AdminSearchFlightComponent,
    BookFlightComponent,
    BookedTicketDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

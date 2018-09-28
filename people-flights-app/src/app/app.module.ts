import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { FlightsByUserComponent } from './flights-by-user/flights-by-user.component';
import { PeopleFlightPassInfoService } from './shared/people-flight-pass-info.service';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    FlightsByUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PeopleFlightPassInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

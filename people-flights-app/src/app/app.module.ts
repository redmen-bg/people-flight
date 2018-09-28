import { BrowserModule } from '@angular/platform-browser';
import  { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { FlightsByUserComponent } from './flights-by-user/flights-by-user.component';
import { PeopleFlightPassInfoService } from './shared/people-flight-pass-info.service';
import { appRoutes } from './app.routes';
import { AppSharedMaterialElementsModule } from './app-shared-material-elements-module/app-shared-material-elements.module';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    FlightsByUserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AppSharedMaterialElementsModule
  ],
  providers: [PeopleFlightPassInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

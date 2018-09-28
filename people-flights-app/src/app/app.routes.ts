import { Routes } from '@angular/router';
import { FlightsByUserComponent } from './flights-by-user/flights-by-user.component';
import { PeopleComponent } from './people/people.component';

export const appRoutes: Routes = [
    {path: '',component: PeopleComponent},
    {path: 'person/:personId', component: FlightsByUserComponent}
]
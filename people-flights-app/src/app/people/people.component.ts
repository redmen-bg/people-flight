import { Component, OnInit } from '@angular/core';


import { Person } from '../models/person.model';
import { PeopleFlightPassInfoService } from '../shared/people-flight-pass-info.service';
import { Router } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PeopleState } from '../state/people.state';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  // public people: Person[];
  people: Observable<Person[]>
  constructor(private peopleFlightPassInfoService: PeopleFlightPassInfoService, private router: Router, private store: Store) { 
    

  }

  ngOnInit() {
    // this.people.subscribe(res=>console.log(res));
    this.people = this.store.select(state => state.people.people)
    // this.store.select(PeopleState.getPeople).subscribe(val=>console.log(val));
    // console.log(this.people);  
    // this.peopleFlightPassInfoService.getPeople();
    // console.log(this.store.);
    // this.store.select(state=>state).subscribe(res=>console.log(res));
  }
  goToPersonFlights(person: Person){
    this.router.navigate([`person/${person._id}`]);
  }

}

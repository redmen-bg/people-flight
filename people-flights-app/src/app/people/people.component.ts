import { Component, OnInit } from '@angular/core';


import { Person } from '../models/person.model';
import { PeopleFlightPassInfoService } from '../shared/people-flight-pass-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  public people: Person[];
  constructor(private peopleFlightPassInfoService: PeopleFlightPassInfoService, private router: Router) { }

  ngOnInit() {  
    this.peopleFlightPassInfoService.getPeople();
  }
  goToPersonFlights(person: Person){
    this.router.navigate([`person/${person._id}`]);
  }

}

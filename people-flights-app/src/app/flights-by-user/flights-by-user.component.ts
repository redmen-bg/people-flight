import { Component, OnInit } from '@angular/core';
import { PeopleFlightPassInfoService} from '../shared/people-flight-pass-info.service';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../models/person.model';
@Component({
  selector: 'app-flights-by-user',
  templateUrl: './flights-by-user.component.html',
  styleUrls: ['./flights-by-user.component.css']
})
export class FlightsByUserComponent implements OnInit {
  private person: Person;

  constructor(private peopleFlightPassInfoService: PeopleFlightPassInfoService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.person = this.peopleFlightPassInfoService.people.find((person)=>person._id==this.route.snapshot.paramMap.get('personId'));
  }

}

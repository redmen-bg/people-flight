import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeopleFlightPassInfoService } from '../shared/people-flight-pass-info.service';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../models/person.model';
import { Flight } from '../models/flight.model';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-flights-by-user',
  templateUrl: './flights-by-user.component.html',
  styleUrls: ['./flights-by-user.component.css']
})
export class FlightsByUserComponent implements OnInit, OnDestroy {
  private person: Person;
  public flights: Flight[];
  public flightsToFilter: Flight[];
  public companies: String[] = [];
  public formGroup: FormGroup;
  public filter: FormControl;
  public formSubscription: Subscription;

  constructor(private peopleFlightPassInfoService: PeopleFlightPassInfoService, private route: ActivatedRoute) {
    this.filter = new FormControl('');
    this.formGroup = new FormGroup({
      'filter': this.filter
    })
    this.formSubscription = this.formGroup.valueChanges
      .pipe(
        debounceTime(300)
      )
      .subscribe((val) => {
        if (val.filter === "") {
          this.flightsToFilter = this.flights;
        } else {
          this.flightsToFilter = this.flights
            .filter((flight) => flight.cityOrigin.toLowerCase().includes(val.filter.toLowerCase()) || flight.cityDestination.toLowerCase().includes(val.filter.toLowerCase()));
        }
      })
  }

  ngOnInit() {
    this.person = this.peopleFlightPassInfoService.people.find((person) => person._id == this.route.snapshot.paramMap.get('personId'));
    this.flights = this.person.flights;
    this.flightsToFilter = this.flights;
  }
  onChange(companyName: String) {
    if (!companyName) {
      this.flightsToFilter = this.flights;
    } else {
      this.flightsToFilter = this.flights.filter((flight) => flight.company == companyName);
    }
  }
  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }

}

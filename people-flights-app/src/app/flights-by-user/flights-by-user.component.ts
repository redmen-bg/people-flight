import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeopleFlightPassInfoService } from '../shared/people-flight-pass-info.service';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../models/person.model';
import { Flight } from '../models/flight.model';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, switchMap, filter, map, concatMap, tap } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngxs/store';
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

  constructor(private peopleFlightPassInfoService: PeopleFlightPassInfoService, private route: ActivatedRoute, private store: Store) {
    this.filter = new FormControl('');
    this.formGroup = new FormGroup({
      'filter': this.filter
    })
    this.formSubscription = this.filter.valueChanges
      .pipe(
        debounceTime(300),
      ).subscribe(str => {
        this.flightsToFilter = this.flights.filter(f => f.cityOrigin.toLowerCase().includes(str.toLowerCase()) || f.cityDestination.toLowerCase().includes(str.toLowerCase()))
      })

  }

  ngOnInit() {
    let personId: string = this.route.snapshot.paramMap.get('personId');
    this.store.select(state => {
      let person = state.people.people.find(p => p._id === personId)
      if (person) {
        return person.flights;
      }
    }).subscribe(flights => {
      this.flights = flights
      this.flightsToFilter = flights
    });


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

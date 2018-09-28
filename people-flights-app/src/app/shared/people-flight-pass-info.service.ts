import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person.model';
@Injectable()

export class PeopleFlightPassInfoService{
    public people: Person[];
    constructor(private http: HttpClient){}
    getPeople(){
        this.http.get<Person[]>('../assets/db.json')
        .subscribe(people=>{
            this.people = people;
        })
    }
}
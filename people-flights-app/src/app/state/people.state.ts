import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Person } from '../models/person.model';

export class PeopleStateModel {
    people: Person[];
}

@State<PeopleStateModel>({
    name: 'people',
    defaults: {
        people: [
            {
              "_id": "5bab7aca9103ed10a4dec72a",
              "isActive": false,
              "price": "$3,535.99",
              "name": "Wood Lindsay",
              "picture": "http://placehold.it/32x32",
              "email": "woodlindsay@spherix.com",
              "address": "678 Prospect Street, Topanga, Alaska, 8932",
              "flights": [
                {
                  "company": "Watts Air",
                  "cityOrigin": "Rome",
                  "cityDestination": "Rome",
                  "cityDestinationPicture": "image",
                  "airportOrigin": "London",
                  "airportDestination": "Rome",
                  "dateTakeOff": "2017-04-14T06:41:09 -01:00",
                  "dateLanding": "2016-12-20T12:29:11 -00:00"
                },
                {
                  "company": "Dianne Air",
                  "cityOrigin": "Barcelona",
                  "cityDestination": "Paris",
                  "cityDestinationPicture": "image",
                  "airportOrigin": "Prague",
                  "airportDestination": "Barcelona",
                  "dateTakeOff": "2018-02-01T02:14:09 -00:00",
                  "dateLanding": "2016-06-28T03:53:34 -01:00"
                },
                {
                  "company": "Beatrice Air",
                  "cityOrigin": "Madrid",
                  "cityDestination": "Paris",
                  "cityDestinationPicture": "image",
                  "airportOrigin": "London",
                  "airportDestination": "Madrid",
                  "dateTakeOff": "2016-10-14T06:03:31 -01:00",
                  "dateLanding": "2015-07-11T09:34:08 -01:00"
                },
                {
                  "company": "Darla Air",
                  "cityOrigin": "London",
                  "cityDestination": "Prague",
                  "cityDestinationPicture": "image",
                  "airportOrigin": "Rome",
                  "airportDestination": "Prague",
                  "dateTakeOff": "2016-06-20T03:16:06 -01:00",
                  "dateLanding": "2018-05-02T03:43:06 -01:00"
                }
              ]
            },
            {
              "_id": "5bab7aca8ae643496ed7cb89",
              "isActive": true,
              "price": "$3,474.99",
              "name": "Gordon England",
              "picture": "http://placehold.it/32x32",
              "email": "gordonengland@spherix.com",
              "address": "469 Lawrence Street, Fannett, Michigan, 644",
              "flights": [
                {
                  "company": "Crosby Air",
                  "cityOrigin": "Rome",
                  "cityDestination": "Rome",
                  "cityDestinationPicture": "image",
                  "airportOrigin": "Madrid",
                  "airportDestination": "Rome",
                  "dateTakeOff": "2016-05-30T02:44:32 -01:00",
                  "dateLanding": "2017-07-11T07:31:35 -01:00"
                },
                {
                  "company": "Amie Air",
                  "cityOrigin": "Paris",
                  "cityDestination": "Prague",
                  "cityDestinationPicture": "image",
                  "airportOrigin": "Rome",
                  "airportDestination": "London",
                  "dateTakeOff": "2014-02-01T12:53:13 -00:00",
                  "dateLanding": "2017-09-30T01:01:33 -01:00"
                },
                {
                  "company": "Ginger Air",
                  "cityOrigin": "Madrid",
                  "cityDestination": "London",
                  "cityDestinationPicture": "image",
                  "airportOrigin": "Paris",
                  "airportDestination": "Rome",
                  "dateTakeOff": "2018-08-03T10:10:29 -01:00",
                  "dateLanding": "2014-03-05T01:55:50 -00:00"
                },
                {
                  "company": "John Air",
                  "cityOrigin": "Madrid",
                  "cityDestination": "Sindey",
                  "cityDestinationPicture": "image",
                  "airportOrigin": "Paris",
                  "airportDestination": "Barcelona",
                  "dateTakeOff": "2018-05-01T10:47:27 -01:00",
                  "dateLanding": "2016-04-11T10:45:43 -01:00"
                },
                {
                  "company": "Cervantes Air",
                  "cityOrigin": "Sindey",
                  "cityDestination": "Paris",
                  "cityDestinationPicture": "image",
                  "airportOrigin": "Prague",
                  "airportDestination": "Rome",
                  "dateTakeOff": "2014-10-05T01:56:04 -01:00",
                  "dateLanding": "2014-12-06T01:58:01 -00:00"
                },
                {
                  "company": "Gabrielle Air",
                  "cityOrigin": "Barcelona",
                  "cityDestination": "Barcelona",
                  "cityDestinationPicture": "image",
                  "airportOrigin": "Rome",
                  "airportDestination": "London",
                  "dateTakeOff": "2016-11-30T02:13:25 -00:00",
                  "dateLanding": "2016-01-10T05:18:05 -00:00"
                },
                {
                  "company": "Browning Air",
                  "cityOrigin": "Madrid",
                  "cityDestination": "London",
                  "cityDestinationPicture": "image",
                  "airportOrigin": "Prague",
                  "airportDestination": "Rome",
                  "dateTakeOff": "2014-05-05T12:18:52 -01:00",
                  "dateLanding": "2015-07-03T03:04:10 -01:00"
                }
              ]
            },
            {
              "_id": "5bab7aca2525127c993d6a67",
              "isActive": true,
              "price": "$3,229.37",
              "name": "Samantha Townsend",
              "picture": "http://placehold.it/32x32",
              "email": "samanthatownsend@spherix.com",
              "address": "411 Onderdonk Avenue, Ventress, Ohio, 5789",
              "flights": [
                {
                  "company": "Glass Air",
                  "cityOrigin": "Prague",
                  "cityDestination": "London",
                  "cityDestinationPicture": "image",
                  "airportOrigin": "Sindey",
                  "airportDestination": "Prague",
                  "dateTakeOff": "2016-04-16T02:47:26 -01:00",
                  "dateLanding": "2015-12-10T04:33:16 -00:00"
                },
                {
                  "company": "Victoria Air",
                  "cityOrigin": "Prague",
                  "cityDestination": "Rome",
                  "cityDestinationPicture": "image",
                  "airportOrigin": "Rome",
                  "airportDestination": "Paris",
                  "dateTakeOff": "2016-08-17T01:01:04 -01:00",
                  "dateLanding": "2018-01-25T08:26:17 -00:00"
                },
                {
                  "company": "Howard Air",
                  "cityOrigin": "Paris",
                  "cityDestination": "London",
                  "cityDestinationPicture": "image",
                  "airportOrigin": "Paris",
                  "airportDestination": "Sindey",
                  "dateTakeOff": "2017-12-04T11:54:49 -00:00",
                  "dateLanding": "2017-06-19T02:09:48 -01:00"
                },
                {
                  "company": "Valerie Air",
                  "cityOrigin": "Barcelona",
                  "cityDestination": "Barcelona",
                  "cityDestinationPicture": "image",
                  "airportOrigin": "Prague",
                  "airportDestination": "London",
                  "dateTakeOff": "2016-09-12T02:23:14 -01:00",
                  "dateLanding": "2014-09-03T03:41:03 -01:00"
                },
                {
                  "company": "Charlotte Air",
                  "cityOrigin": "Prague",
                  "cityDestination": "Paris",
                  "cityDestinationPicture": "image",
                  "airportOrigin": "Prague",
                  "airportDestination": "Barcelona",
                  "dateTakeOff": "2018-03-27T01:00:21 -01:00",
                  "dateLanding": "2014-08-10T07:23:33 -01:00"
                }
              ]
            },
            {
              "_id": "5bab7aca45f7d3d728e66a76",
              "isActive": false,
              "price": "$2,860.20",
              "name": "Saunders Blake",
              "picture": "http://placehold.it/32x32",
              "email": "saundersblake@spherix.com",
              "address": "307 Kansas Place, Inkerman, Washington, 2890",
              "flights": [
                {
                  "company": "Knight Air",
                  "cityOrigin": "Sindey",
                  "cityDestination": "Prague",
                  "cityDestinationPicture": "image",
                  "airportOrigin": "Rome",
                  "airportDestination": "Sindey",
                  "dateTakeOff": "2017-09-05T11:25:04 -01:00",
                  "dateLanding": "2018-09-25T03:25:36 -01:00"
                },
                {
                  "company": "Nadia Air",
                  "cityOrigin": "Barcelona",
                  "cityDestination": "London",
                  "cityDestinationPicture": "image",
                  "airportOrigin": "London",
                  "airportDestination": "Barcelona",
                  "dateTakeOff": "2014-08-11T08:35:14 -01:00",
                  "dateLanding": "2017-12-30T03:26:55 -00:00"
                },
                {
                  "company": "Lyons Air",
                  "cityOrigin": "Sindey",
                  "cityDestination": "Prague",
                  "cityDestinationPicture": "image",
                  "airportOrigin": "Paris",
                  "airportDestination": "Paris",
                  "dateTakeOff": "2014-06-23T05:46:56 -01:00",
                  "dateLanding": "2016-06-14T01:56:09 -01:00"
                },
                {
                  "company": "Mona Air",
                  "cityOrigin": "Madrid",
                  "cityDestination": "Prague",
                  "cityDestinationPicture": "image",
                  "airportOrigin": "Sindey",
                  "airportDestination": "Paris",
                  "dateTakeOff": "2018-09-20T02:50:47 -01:00",
                  "dateLanding": "2018-03-17T03:46:21 -00:00"
                }
              ]
            }
          ]
    }
})

export class PeopleState {

    @Selector()
    static getPeople(state: PeopleStateModel) {
        return state.people;
    }
}
import { Flight } from './flight.model';

export class Person {
    constructor(
        public _id: String,
        public isActive: boolean,
        public price: String,
        public name: String,
        public picture: String,
        public email: String,
        public address: String,
        public flights: Flight[]
    ) { }
}
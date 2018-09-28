import { Person } from "../models/person.model";

export class GetPerson {
    static readonly type = '[Person] Get';

    constructor(public payload) {}
}
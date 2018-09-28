export class Flight {
    constructor(
        public company: String,
        public cityOrigin: String,
        public cityDestination: String,
        public cityDestinationPicture: String,
        public airportOrigin: String,
        public airportDestination: String,
        public dateTakeOff: string,
        public dateLanding: string,
    ) { }
}
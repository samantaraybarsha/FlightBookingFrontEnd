export interface FlightModel {
    flightId:number,
        flightNumber: string,
        airlineId: number,
        fromPlace: string,
        toPlace: string,
        departureTime: string,
        arrivalTime: string,
        instrumentUsed: string,
        totalNumberOfBusinessClassSeats: number,
        totalNumberOfNonBusinessClassSeats: number,
        cost: number,
        numberofRows: number
        isActive: boolean
      
}

import { PassengerModel } from "./passenger-model";
export interface BookTicketModel {
    passenger:PassengerModel[],
    ticketId: number,
    userId: number,
    flightId: number,
    pnr: string,
    status: boolean,
    flightNumber:string,
}

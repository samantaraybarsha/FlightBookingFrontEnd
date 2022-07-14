import { PassengerModel } from "./passenger-model";
export interface BookTicketModel {
    passengers:PassengerModel[],
    ticketId: number,
    userId: number,
    flightId: number,
    pnr: string,
    status: boolean,
    flightNumber:string,
}

import {RootState} from "../store";
import {Layovers} from "../reducer";

export const getTicketsData = (state: RootState) => {
    const {layovers, ticketsData} = state;

    if (layovers[Layovers.ALL]) {
        return ticketsData;
    }

    const allowedLayovers = new Set();

    if (layovers.ZERO) allowedLayovers.add(0);
    if (layovers.ONE) allowedLayovers.add(1);
    if (layovers.TWO) allowedLayovers.add(2);
    if (layovers.THREE) allowedLayovers.add(3);

    return ticketsData.filter((ticket) => allowedLayovers.has(ticket.stops));
};

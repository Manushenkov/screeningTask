import React from "react";
import "./Tickets.css";
import TicketCard from "./TicketCard/TicketCard";
import {getCurrentCurrencySign} from "../../helpers/getCurrentCurrencySign";
import {useSelector} from "../../hooks";
import {getTicketsData} from "../../selectors/getTicketsData";

interface TicketsProps {
    cls?: string;
}

function Tickets({cls}: TicketsProps) {
    const ticketsData = useSelector(getTicketsData);
    const currency = useSelector((state) => state.currency);
    const currencySign = getCurrentCurrencySign(currency);

    return (
        <ul className={`tickets ${cls}`}>
            {ticketsData.map((data) => (
                <TicketCard
                    {...data}
                    currencySign={currencySign}
                    cls="tickets__ticket"
                />
            ))}
        </ul>
    );
}

export default Tickets;

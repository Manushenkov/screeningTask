import React from "react";
import "./TicketCard.css";
import {Button} from "@mui/material";
import TicketsBlock from "../../TicketsBlock/TicketsBlock";
import {createDecline} from "../../../helpers/createDecline";
import {CurrencySign} from "../../../helpers/getCurrentCurrencySign";

const imgUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Turkish_Airlines_logo_2019_compact.svg/2560px-Turkish_Airlines_logo_2019_compact.svg.png";
const declinedLayover = ["пересадка", "пересадки", "пересадок"];

const layoverDecline = createDecline(declinedLayover);

interface TicketCardProps {
    cls?: string;
    origin: string;
    origin_name: string;
    destination: string;
    destination_name: string;
    departure_date: string;
    departure_time: string;
    arrival_date: string;
    arrival_time: string;
    carrier: string;
    stops: number;
    price: number;
    currencySign: CurrencySign;
}

function TicketCard({
    cls,
    origin,
    origin_name,
    destination,
    destination_name,
    departure_date,
    departure_time,
    arrival_date,
    arrival_time,
    price,
    stops,
    currencySign,
}: TicketCardProps) {
    return (
        <li>
            <TicketsBlock cls={cls}>
                <div className={"ticket-card"}>
                    <div className={"ticket-card__buy-block"}>
                        <img className={"ticket-card__image"} src={imgUrl}/>
                        <Button variant="contained">
                            Купить за {price}
                            {currencySign}
                        </Button>
                    </div>

                    <div className={"ticket-card__info-block"}>
                        <div className={"ticket-card__info-departure"}>
                            <p className={"ticket-card__info-departure-time"}>
                                {departure_time}
                            </p>
                            <p className={"ticket-card__info-departure-origin"}>
                                {origin}, {origin_name}
                            </p>
                            <p className={"ticket-card__info-departure-date"}>
                                {departure_date}
                            </p>
                        </div>
                        <div className={"ticket-card__info-layover"}>
                            {layoverDecline(stops)}
                        </div>
                        <div className={"ticket-card__info-arrival"}>
                            <p className={"ticket-card__info-arrival-time"}>{arrival_time}</p>
                            <p className={"ticket-card__info-arrival-target"}>
                                {destination_name}, {destination}
                            </p>
                            <p className={"ticket-card__info-arrival-date"}>{arrival_date}</p>
                        </div>
                    </div>
                </div>
            </TicketsBlock>
        </li>
    );
}

export default TicketCard;

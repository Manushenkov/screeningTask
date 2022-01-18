import React from "react";
import "./TicketsControls.css";
import CurrencySelect from "./CurrencySelect/CurrencySelect";
import LayoverSelect from "./LayoverSelect/LayoverSelect";
import TicketsBlock from "../TicketsBlock/TicketsBlock";

interface TicketsControlsProps {
    cls?: string;
}

function TicketsControls({cls}: TicketsControlsProps) {
    return (
        <TicketsBlock cls={cls}>
            <div className={"tickets-controls"}>
                <CurrencySelect cls={"ticket-controls__currency"}/>
                <LayoverSelect cls={"ticket-controls__layover"}/>
            </div>
        </TicketsBlock>
    );
}

export default TicketsControls;

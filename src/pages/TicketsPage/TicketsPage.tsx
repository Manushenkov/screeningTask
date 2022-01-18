import React from "react";
import "./TicketsPage.css";
import TicketsControls from "../../components/TicketsControls/TicketsControls";
import Tickets from "../../components/Tickets/Tickets";
import PageWrapper from "../PageWrapper/PageWrapper";

function TicketsPage() {
    return (
        <PageWrapper>
            <div className="tickets-page">
                <TicketsControls cls={"tickets-page__controls"}/>
                <Tickets cls={"tickets-page__tickets"}/>
            </div>
        </PageWrapper>
    );
}

export default TicketsPage;

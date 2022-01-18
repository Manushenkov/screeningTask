import React, {ReactElement} from "react";
import "./TicketsBlock.css";
import classNames from "classnames";

interface TicketsBlockProps {
    children: ReactElement[] | ReactElement;
    cls?: string;
}

function TicketsBlock({children, cls}: TicketsBlockProps) {
    return <div className={classNames("tickets-block", cls)}>{children}</div>;
}

export default TicketsBlock;

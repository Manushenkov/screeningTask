import React, {ReactElement} from "react";
import "./PageWrapper.css";
import classNames from "classnames";

interface PageWrapperProps {
    children: ReactElement[] | ReactElement;
    cls?: string;
}

function PageWrapper({children, cls}: PageWrapperProps) {
    return <div className={classNames("page-wrapper", cls)}>{children}</div>;
}

export default PageWrapper;

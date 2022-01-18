import React from "react";
import "./CurrencySelect.css";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import classNames from "classnames";
import {useDispatch, useSelector} from "../../../hooks";
import {CHANGE_CURRENCY, Currency} from "../../../reducer";

interface CurrencySelectProps {
    cls?: string;
}

function CurrencySelect({cls}: CurrencySelectProps) {
    const dispatch = useDispatch();

    const handleChange = (e: any, selectedCurrency: Currency) => {
        dispatch({type: CHANGE_CURRENCY, selectedCurrency});
    };

    const currency = useSelector(state => state.currency) || Currency.RUB;


    return (
        <div className={classNames("currency-select", cls)}>
            <label className="currency-select__label">ВАЛЮТА</label>
            <ToggleButtonGroup
                color="primary"
                value={currency}
                fullWidth
                exclusive
                onChange={handleChange}
            >
                <ToggleButton value={Currency.RUB}>RUB</ToggleButton>
                <ToggleButton value={Currency.USD}>USD</ToggleButton>
                <ToggleButton value={Currency.EUR}>EUR</ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}

export default CurrencySelect;

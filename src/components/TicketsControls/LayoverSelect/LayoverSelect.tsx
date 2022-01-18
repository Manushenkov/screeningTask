import React, {ChangeEvent} from "react";
import "./LayoverSelect.css";
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import classNames from "classnames";
import {useDispatch, useSelector} from "../../../hooks";
import {CHANGE_LAYOVERS, Layovers} from "../../../reducer";

interface LayoverSelectProps {
    cls?: string;
}

function LayoverSelect({cls}: LayoverSelectProps) {
    const dispatch = useDispatch();

    const handleChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        dispatch({type: CHANGE_LAYOVERS, changedLayover: event.target.name, checked});
    };

    const checkAll = useSelector(state => state.layovers[Layovers.ALL]);
    const checkZero = useSelector(state => state.layovers[Layovers.ZERO]);
    const checkOne = useSelector(state => state.layovers[Layovers.ONE]);
    const checkTwo = useSelector(state => state.layovers[Layovers.TWO]);
    const checkThree = useSelector(state => state.layovers[Layovers.THREE]);

    return (
        <div className={classNames("layover-select", cls)}>
            <label className="tickets-controls__label">КОЛИЧЕСТВО ПЕРЕСАДОК</label>
            <FormGroup>
                <FormControlLabel control={<Checkbox checked={checkAll} onChange={handleChange} name={Layovers.ALL}/>}
                                  label="Все"/>
                <FormControlLabel control={<Checkbox checked={checkZero} onChange={handleChange} name={Layovers.ZERO}/>}
                                  label="Без пересадок"/>
                <FormControlLabel control={<Checkbox checked={checkOne} onChange={handleChange} name={Layovers.ONE}/>}
                                  label="1 пересадка"/>
                <FormControlLabel control={<Checkbox checked={checkTwo} onChange={handleChange} name={Layovers.TWO}/>}
                                  label="2 пересадки"/>
                <FormControlLabel
                    control={<Checkbox checked={checkThree} onChange={handleChange} name={Layovers.THREE}/>}
                    label="3 пересадки"/>
            </FormGroup>
        </div>
    );
}

export default LayoverSelect;

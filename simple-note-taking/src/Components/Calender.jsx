import React from 'react';
import Cal from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from "react-redux"; 
import { changeDate } from '../Redux/Actions';
import Form from './Form';

const Calender = () => {
    const dispatch = useDispatch();

    // Variable today (value: Todays date)
    const today = new Date();
    
    // Variable selecetd [Selected date] (value: default none)
    const selected = useSelector(state => state.selected);

    // Disable dates that have already passed in the Calender (Cal)
    const disableTile = ({ activeStartDate, date, view }) => {
        // console.log(date.getDate(), today.getDate());
        // const yest = new Date(today.setDate(today.getDate() - 1));
        // console.log(yest, today)
        return date < today;
    };

    // Changes selected date
    const changeSelected = (date) => {
        // console.log(date);
        dispatch(changeDate(date));
    }

    return (
        <div className='container-fluid text-center sticky-top pt-3'>

            <h3 className='p-1'>Select a desired date</h3>

            {/* Calender (react-calender) */}
            <Cal className="container-fluid rounded" value={selected || today} onChange={changeSelected} view="month" tileDisabled={disableTile} tileClassName="rounded-circle" />

            {
                selected ? <Form /> : false
            }

        </div>
    )
}

export default Calender;
import React, { useState } from 'react';
import * as dateFns from "date-fns";
import "./Calendar.css";
import Header from './Header';

export default function Calendar (){
    //passing new Date() into useState so that when the calendar is initially rendered, the current date will be highlighted.
    const [currentDate, setCurrentDate] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState(new Date())

    const header = () => {
    const dateFormat = "MMMM yyyy";

    return (
        <div className="header row flex-middle">
            <div className="column col-start">
                <div className="icon" onClick={prevMonth}>
                    chevron_left
                </div>
            </div>
            <div className="column col-center">
                <span>{dateFns.format(currentDate, dateFormat)}</span>
            </div>
            <div className="column col-end">
                <div className="icon" onClick={nextMonth}>
                    chevron_right
                </div>
            </div>
        </div>
        );
    };

    const nextMonth = () => {
        setCurrentDate(dateFns.addMonths(currentDate, 1));
    }

    const prevMonth = () => {
        setCurrentDate(dateFns.subMonths(currentDate,1));
    }

    const daysOfWeek = () => {

    const dateFormat = "ddd";
    const days = [];
    let startDate = dateFns.startOfWeek(currentDate);

    for (let i=0; i < 7; i++){
        days.push(
            <div className="column col-center" key={i}>
                {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
            </div>
            );
        }
        return <div className="days row">{days}</div>;
    };

    return(
        <div className="calendar">
            <div>{header()}</div>
            <div>{daysOfWeek()}</div>
            <div>{cells()}</div>
        </div>
    );
}
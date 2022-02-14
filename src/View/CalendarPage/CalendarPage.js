import React from 'react'
import Calendar from 'react-awesome-calendar';
import { Container } from '@mui/material'
export default function CalendarPage(props) {
    const tempEvents = [
        {
            _id: "620574633fc5807273a9ea40",
            supplierId: "61c1db28957a3047555cc35c",
            supplierName: "Ori Carm",
            date: "2022-02-10T14:00:00Z"
        },
        {
            _id: "620574633fc5807273a9ea40",
            supplierId: "61c1db28957a3047555cc35c",
            supplierName: "Ori Zozobra",
            date: "2022-02-05T19:00:00+00:00"
        }
    ];

    const userEventsToCalendarEvents = (events) => {
        return events.map(event => {
            return {
                id: event._id,
                color: '#fd3153',
                from: event.date,
                to: event.date,
                title: 'Meeting with ' + event.supplierName
            }
        })
    }
    return (
        <Container>
            <Calendar events={userEventsToCalendarEvents(tempEvents)} />
        </Container>

    )
}
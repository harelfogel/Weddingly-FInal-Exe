import React from 'react'
import Calendar from 'react-awesome-calendar';
import { Container } from '@mui/material'
export default function CalendarPage(props) {
    const tempEvents = [
        {
            _id: "620574633fc5807273a9ea40",
            supplierId: "61c1db28957a3047555cc35c",
            supplierName: "Ori Carm",
            date:"2022-02-10T14:00:00Z"
        },
        {
            _id: "620574633fc5807273a9ea40",
            supplierId: "61c1db28957a3047555cc35c",
            supplierName: "Ori Zozobra",
            date:"2022-02-05T19:00:00+00:00"
        }
    ];

    const userEventsToCalendarEvents = (events) => {
       return events.map(event => {
            return {
                id: event._id,
                color: '#fd3153',
                from: event.date,
                to:  event.date,
                title: 'Meeting with ' + event.supplierName
            }
        })
    }

    const events = [{
        id: 1,
        color: '#fd3153',
        from: '2019-05-02T18:00:00+00:00',
        to: '2019-05-05T19:00:00+00:00',
        title: 'This is an event'
    }, {
        id: 2,
        color: '#1ccb9e',
        from: '2019-05-01T13:00:00+00:00',
        to: '2019-05-05T14:00:00+00:00',
        title: 'This is another event'
    }, {
        id: 3,
        color: '#3694DF',
        from: '2019-05-05T13:00:00+00:00',
        to: '2019-05-05T20:00:00+00:00',
        title: 'This is also another event'
    }];
    return (
        <Container>
            <Calendar events = {userEventsToCalendarEvents(tempEvents)} />
        </Container>

    )
}

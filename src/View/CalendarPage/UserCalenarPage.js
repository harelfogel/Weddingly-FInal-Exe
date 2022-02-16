import React from 'react';
import Calendar from 'react-awesome-calendar';
import { Container } from '@mui/material';

export default function UserCalendarPage() {
    const user = JSON.parse((localStorage.getItem('userDetails')));
    const userEventsToCalendarEvents = (events) => {
        return events.map(event => {
            return {
                id: event._id,
                color: event.approved ? 'green' : '#fd3153',
                from: event.date,
                to: event.date,
                title: 'Meeting with ' + event.name
            }
        })
    }
    return (
        <Container>
            <Calendar events={userEventsToCalendarEvents(user.appoitment)} />
        </Container>

    )
}

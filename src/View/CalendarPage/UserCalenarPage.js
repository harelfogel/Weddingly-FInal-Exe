import React from 'react';
import Calendar from 'react-awesome-calendar';
import { Container } from '@mui/material';
import { getUserDetails } from '../../DataManager/LocalStorageConfig';
import axios from 'axios';


export default function UserCalendarPage() {
    const user = getUserDetails();
    const [userAppointment, setUserAppoitment] = React.useState([]);
    React.useEffect(() => {
        const getAppoitment = async () => {
            const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weddingly/customers/appoitments/${user._id}`);
            const {appointment} = data
            setUserAppoitment(appointment)
        }
        getAppoitment()
    }, [])

    const userEventsToCalendarEvents = (events) => {

        return events.map(event => {
            return {
                id: event._id,
                color: event.approved ? "green":'#fd3153',
                from: event.date,
                to: event.date,
                title: 'Meeting with ' + event.supplierName
            }
        })
    }
    return (
        <Container>
            <Calendar events={userEventsToCalendarEvents(userAppointment)} />
        </Container>

    )
}

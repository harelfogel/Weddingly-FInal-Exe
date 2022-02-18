import * as React from 'react';
import { Box } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import './Meetings.css';
import { Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { alertError, alertSucess } from '../AlertToast/AlertToast';

export default function Meetings() {
  const user = (JSON.parse((localStorage.getItem('userDetails'))));
  const [userMeetings, setUserMeetings] = React.useState([]);
  React.useEffect(() => {
    setUserMeetings(user.meeting.filter((elem) => {
      return elem.approved == false;
    }))
  }, [])

  const handleConfirmMeeting = async (meetingId) => {
    try {
      const data = { approved: true };
      const updateMeeting = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/weddingly/suppliers/meetings/${user._id}/${meetingId}`, data, { withCredentials: true })
      const clientId = updateMeeting.data.meeting[updateMeeting.data.meeting.length - 1].clientId;
      const appointemntId = updateMeeting.data.meeting[updateMeeting.data.meeting.length - 1].appointemntId;
      const updateClientAppoitment = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/weddingly/customers/appoitmentsApproved/${clientId}/${appointemntId}`, { withCredentials: true })
      alertSucess(`Meeting has been approved!`);
      setUserMeetings(prev => prev.filter((meeting) => meeting._id != meetingId));
      const userAprrovedMeeting = {
        ...user, meeting: user.meeting.map((meet) => {
          if (meet._id == meetingId) {
            return { ...meet, approved: true };
          } else {
            return meet;
          }
        })
      }
      localStorage.removeItem('userDetails');
      localStorage.setItem('userDetails', JSON.stringify(userAprrovedMeeting));
    } catch (e) {
      alertError('Error! Cant confirm meeting');
    }
  }

  const handleDelete = (value) => async () => {
    const data = value._id;
    const removeMeeting = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/weddingly/suppliers/removeMeeting/${user._id}/${value._id}`, data, { withCredentials: true })
    if (removeMeeting) {
      alertSucess(`Meeting with ${value.name} is been succesfully removed!`);
    }
    const currentIndex = userMeetings.indexOf(value._id);
    const newUserMeetings = [...userMeetings];
    newUserMeetings.splice(currentIndex, 1);
    setUserMeetings(newUserMeetings);
  }
  return (
    <Box className="list-wrapper">
      <div className="list-headline">
        <Typography variant="h5">Pending Meetings</Typography>
      </div>
      <List className="meetings-list" >
        {userMeetings.map((meeting) => {
          return (
            <ListItem
              key={meeting}
              secondaryAction={
                <>
                  <Button onClick={() => handleConfirmMeeting(meeting._id)} >Confirm Meeting</Button>
                  <DeleteIcon className="delete-icon"
                    onClick={handleDelete(meeting)}
                  />
                </>
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar n°${meeting + 1}`}
                    src={`/static/images/avatar/${meeting + 1}.jpg`}
                  />
                </ListItemAvatar>
                <ListItemText primary={` Meeting with ${meeting.name}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>

  );
}

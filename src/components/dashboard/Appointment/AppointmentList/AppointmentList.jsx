import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import { Button, Card, CardContent, Stack } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { appointmentList } from '../../../../api';
import { AppContext } from '../../../../states/app.context';
import PrescriptionModal from './PrescriptionModal';
import RatingDoc from './RatingDoc';

const appStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#033b4a', color: 'white', margin: '5px 0', padding: '2px 1rem', borderRadius: '15px' }

const AppointmentList = () => {
  const { user } = useContext(AppContext);
  const [appointments, setAppointments] = useState();
  const navigate = useNavigate();
  const loadAppointments = async () => {
    const res = await appointmentList({ userId: user._id, role: user.role });
    setAppointments(res?.data?.appiontments);
  }
  useEffect(() => {
    if (user) {
      loadAppointments();
      setInterval(function () {
        loadAppointments()
      }, 6000)
    }
    // eslint-disable-next-line
  }, [user])

  return (
    <div>
      {
        user?.role === 'patient' ? (<>
          <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>My Appointments</h1>
          {
            appointments?.length !== 0 ? appointments?.map(appointment => <Card key={appointment._id} style={appStyle}>
              <CardContent>
                <p>Doctor: <em>{appointment.doctorId.userId.name}</em></p>
                <p>Service hours: <em>{appointment.doctorId.service_hours}</em></p>
                <p>Date: {appointment.appointmentTime.slice(0, 10)}</p>
                <p>Status: <b>{appointment.isDone ? 'Done' : 'Not started'}</b></p>
                <p>Paid: <b>{appointment.isPaid ? 'Paid' : <Button variant="contained" color="success" onClick={() => navigate(`pay/${appointment._id}`)}>Pay now</Button>}</b></p>
              </CardContent>
              {appointment.isDone ? <Stack direction='column' gap={'10px'}>
                {appointment.prescription && <PrescriptionModal title='Prescription' data={appointment.prescription} />}{appointment.exams && <PrescriptionModal title='Tests' data={appointment.exams} />}
                <RatingDoc docid={appointment.doctorId} rating={appointment.doctorId.rating} />
              </Stack> : 'Scheduled'}
            </Card>) : (<p>You have no booked appointment</p>)
          }
        </>) : (<div>
          <h1>Your today's appointments:</h1>
          {
            appointments?.length !== 0 ? appointments?.map(appointment => <div key={appointment._id} style={appStyle}>
              <div>
                <p><b>Patient:</b> {appointment?.patientId.userId.name}</p>
                <p><b>Date:</b> {appointment.appointmentTime.slice(0, 10)}</p>
                <p><b>Status:</b> {appointment.isDone ? 'Done' : 'Not started'}</p>
              </div>
              <Button variant="contained" color="success" onClick={() => {
                localStorage.setItem('patientSocketId', appointment.patientId.socketId)
              }} component={Link} to={`/dashboard/video/${appointment._id}`} sx={{ height: 'fit-content' }}><VideoCameraFrontIcon sx={{ mr: 1 }} /> Call</Button>
            </div>) : (<p>No appointments</p>)
          }
        </div>)
      }
    </div>
  );
};

export default AppointmentList;
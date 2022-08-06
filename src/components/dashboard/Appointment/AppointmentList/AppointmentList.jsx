import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import { Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { appointmentList } from '../../../../api';
import { AppContext } from '../../../../states/app.context';

const appStyle = {
    backgroundColor: 'lightBlue',
    padding: '2px 10px',
    margin: '10px 0',
    borderRadius: '10px'
}

const AppointmentList = () => {
    const { user } = useContext(AppContext);
    const [appointments, setAppointments] = useState([])
    const loadAppointments = async () => {
        const res = await appointmentList({ userId: user._id, role: user.role });
        setAppointments(res?.data?.appiontments);
        console.log(res?.data?.appiontments);
    }
    useEffect(() => {
        if (user) {
            loadAppointments();
            // setInterval(loadAppointments, 50000);
        }
        // eslint-disable-next-line
    }, [user])

    return (
        <div>
            {
                user?.role === 'patient' ? (<>
                    <h1>Your booked appointments</h1>
                    {
                        appointments?.map(appointment => <div style={appStyle}>
                            <p>Doctor: <em>{appointment.doctorId.userId.name}</em></p>
                            <p>Service hours: <em>{appointment.doctorId.service_hours}</em></p>
                            <p>Date: {appointment.appointmentTime.slice(0, 10)}</p>
                        </div>)
                    }
                </>) : (<div>
                    <h1>Your today's appointments:</h1>
                    {
                        appointments?.map(appointment => <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'lightblue', margin: '5px 0', padding: '2px 1rem', borderRadius: '15px' }}>
                            <div>
                                <p><b>Patient:</b> {appointment.patientId.userId.name}</p>
                                <p><b>Date:</b> {appointment.appointmentTime.slice(0, 10)}</p>
                                <p><b>Status:</b> {appointment.isDone ? 'Done' : 'Not started'}</p>
                            </div>
                            <Button variant="contained" color="success" onClick={() => {
                                localStorage.setItem('patientSocketId', appointment.patientId.socketId)
                            }} component={Link} to='/dashboard/video' sx={{ height: 'fit-content' }}><VideoCameraFrontIcon sx={{ mr: 1 }} /> Call</Button>
                        </div>)
                    }
                </div>)
            }
        </div>
    );
};

export default AppointmentList;
import { Button, LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doctorInfo } from '../../../api';

const AppointmentTime = () => {
    const [doc, setDoc] = useState();
    let { docid } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target[0].value);
    }

    const loadInfo = async () => {
        const res = await doctorInfo(`_id=${docid}`);
        setDoc(res.data.doctors[0]);
    }
    useEffect(() => {
        loadInfo()
        // eslint-disable-next-line
    }, [])

    return (<>
        {
            doc ? <div>
                <h1>Select appointment time for <em>Dr. {doc.userId.name}</em></h1>
                <form onSubmit={handleSubmit}>
                    <label for="birthday">Birthday: </label>
                    <input type="date" id="birthday" name="birthday" /> <br />
                    <Button type="submit" variant="contained" sx={{mt: '10px'}}>
                        Book
                    </Button>
                </form>
            </div> : <LinearProgress />
        }
    </>);
};

export default AppointmentTime;
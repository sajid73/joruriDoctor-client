import { Container } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { doctorList } from '../../../api';
import { speci } from '../../DemoData/HomeData';

const AppointmentBook = () => {
    const [speciality, setSpeciality] = useState("");
    const [filterDoc, setFiltterDoc] = useState();
    const [doctors, setDoctors] = useState();

    const loadData = async () => {
        const res = await doctorList();
        setDoctors(res?.data?.doctors);
        setFiltterDoc(res?.data?.doctors);
    }
    const setDocList = (e) => {
        setSpeciality(e.target.value);
        if (e.target.value === "") {
            setFiltterDoc(doctors);
        } else {
            const result = doctors.filter(doc => doc.specilities.includes(e.target.value))
            setFiltterDoc(result);
        }
    }
    useEffect(() => {
        loadData();
    }, []);
    return (
        <Container>
            <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="demo-simple-select-helper-label">Speciality</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Speciality"
                    value={speciality}
                    onChange={(e) => setDocList(e)}
                >
                    <MenuItem value="">
                        <em>Select specility</em>
                    </MenuItem>
                    {speci.map((sp) => (
                        <MenuItem key={sp} value={sp}>{sp}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel>Speciality</InputLabel>
                <Select
                    id="demo-simple-select-helper"
                    label="Speciality"
                    value={speciality}
                    onChange={(e) => setDocList(e)}
                >
                    <MenuItem value="">
                        <em>Select specility</em>
                    </MenuItem>
                    {speci.map((sp) => (
                        <MenuItem key={sp} value={sp}>{sp}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {
                    filterDoc?.map((doc) => (<Link key={doc._id} to={doc._id}><ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={doc.userId.name}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Specilities -
                                    </Typography>
                                    {doc.specilities.map((sp) => ` ${sp},`)}
                                </React.Fragment>
                            }
                        />
                        Fees: {doc.fees}
                    </ListItem>
                        <Divider variant="inset" component="li" /></Link>))
                }
            </List>
        </Container>
    );
};

export default AppointmentBook;
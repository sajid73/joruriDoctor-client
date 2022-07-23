import { Container, TextField } from '@mui/material';
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
    const [speciality, setSpeciality] = useState('');
    const [qualification, setQualification] = useState('');
    const [filterDoc, setFiltterDoc] = useState();
    const [doctors, setDoctors] = useState();

    const loadData = async () => {
        const res = await doctorList();
        setDoctors(res?.data?.doctors);
        setFiltterDoc(res?.data?.doctors);
    }
    const setDocList = () => {
        const result = doctors?.filter(doc => {
            return (doc.specilities?.includes(speciality) && doc.qualifications?.toLowerCase().includes(qualification?.toLowerCase()))
        })
        setFiltterDoc(result);
    }

    useEffect(() => {
        setDocList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [qualification, speciality]);

    useEffect(() => {
        loadData();
    }, []);
    return (
        <Container>
            <Typography variant='h4' textAlign={'center'}>Select doctor for book an appointment</Typography>
            <Typography>Filter options</Typography>
            <FormControl sx={{ mr: 1, my: 1, minWidth: 150 }}>
                <InputLabel>Speciality</InputLabel>
                <Select
                    name='speciality'
                    id="demo-simple-select-helper"
                    label="Speciality"
                    value={speciality}
                    onChange={(e) => setSpeciality(e.target.value)}
                >
                    <MenuItem value="">
                        <em>Select specility</em>
                    </MenuItem>
                    {speci.map((sp) => (
                        <MenuItem key={sp} value={sp}>{sp}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl sx={{ mr: 1, my: 1, minWidth: 150 }}>
                <TextField placeholder='Qualification' name='qualification' onChange={(e) => setQualification(e.target.value)} />
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
                                        Specilities —
                                    </Typography>
                                    {doc.specilities.map((sp) => ` ${sp},`)} <br />
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary">
                                        Qualifications — {" "}
                                    </Typography>
                                    {doc.qualifications}
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
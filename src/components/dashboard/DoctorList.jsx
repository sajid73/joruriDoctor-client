import { Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { doctorList } from '../../api';

const DoctorList = () => {
    const [doctors, setDoctors] = useState();

    const loadData = async () => {
        const res = await doctorList();
        setDoctors(res?.data?.doctors)
    }
    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            {doctors ? <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Working</TableCell>
                            <TableCell>Qualifications</TableCell>
                            <TableCell>Specilities</TableCell>
                            <TableCell>Fees</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            doctors?.map((doc) => (<TableRow key={doc._id}>
                                <TableCell>{doc.userId.name}</TableCell>
                                <TableCell>{doc.userId.email}</TableCell>
                                <TableCell>{doc.working}</TableCell>
                                <TableCell>{doc.qualifications?.slice(0,12)} ...</TableCell>
                                <TableCell>{doc.specilities[0]}</TableCell>
                                <TableCell>{doc.fees}</TableCell>
                            </TableRow>))
                        }
                    </TableBody>
                </Table>
            </TableContainer> : <Box sx={{ pt: 0.5 }}>
                <Skeleton variant="rectangular" width={210} height={118} />
                <Skeleton />
                <Skeleton width="60%" />
            </Box>}
        </>
    );
};

export default DoctorList;
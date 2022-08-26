import { Rating } from '@mui/material';
import React, { useState } from 'react';
import { updateDoctor } from '../../../../api';

const RatingDoc = ({ docid, rating }) => {
    const [value, setValue] = useState(rating || 4);
    const handleChange = async (newValue) => {
        setValue(newValue);
        const newRating = Math.round((docid.rating + newValue) / 2);
        await updateDoctor(docid._id, { rating: newRating });
    }
    return (
        <Rating
            name="feedback"
            value={value}
            onChange={(_, newValue) => {
                handleChange(newValue)
            }}
        />
    );
};

export default RatingDoc;
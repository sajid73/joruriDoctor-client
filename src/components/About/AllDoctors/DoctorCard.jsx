import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Rating,
  Stack,
  Typography
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const DoctorCard = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { userId, specilities, qualifications, rating, experience, fees } = props.doc;
  const demoImg = "https://www.pngitem.com/pimgs/m/22-224249_blank-person-hd-png-download.png";

  return (
    <Card
      sx={{
        maxWidth: 450,
        borderRadius: "30px",
        boxShadow:
          `12px 12px 16px 0 rgba(0, 0, 0, 0.25), 8px 8px 12px 0 ${location.pathname === '/about' ? '#065e75' : 'grey'}`,
      }}
    >
      <CardMedia
        component="img"
        height="320"
        image={userId.avatar ? userId.avatar : demoImg}
        alt="Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {userId.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {specilities[0]} Specialist <br />
          {qualifications}
        </Typography>
        <Stack direction="row" spacing={1}>
          <Stack direction='column' justifyContent={'center'} alignItems={'center'} spacing={0}>
            <Typography variant="h6">Total experience: </Typography>
            <Typography variant="h6" fontWeight={'bold'}>{experience}</Typography>
          </Stack>
          <Divider orientation="vertical" flexItem />
          <Stack direction="column" alignItems={'center'} spacing={1}>
            <Typography>Rating</Typography>
            <Rating
              name="half-rating-read"
              defaultValue={rating ? rating  : 4.5}
              precision={0.5}
              readOnly
            />
            <Typography variant="h6">
              {rating ? rating : 4.5}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={'row'} justifyContent='space-between'>
          <Typography variant="h6"><span style={{ fontWeight: 'bold' }}>{fees}৳</span> per conssulation</Typography>
          <IconButton size='large' sx={{backgroundColor: '#01D6A3'}} onClick={() => navigate(`/dashboard/appointmentbook/${props.doc._id}`)}><ArrowForwardIosIcon /></IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const DoctorCard = (props) => {
    console.log(props.doc);
  const { userId, specilities, qualifications } = props.doc;

  
  return (
    <Card sx={{ maxWidth: 350}}>
      <CardMedia
        component="img"
        height="280"
        image={userId.avatar}
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
      </CardContent>
    </Card>
  );
};

export default DoctorCard;

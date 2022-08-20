import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography
} from "@mui/material";
import React from "react";

const DoctorCard = (props) => {
  const { userId, specilities, qualifications, rating } = props.doc;
  const demoImg = "https://randomuser.me/api/portraits/men/7.jpg";

  return (
    <Card
      sx={{
        maxWidth: 350,
        borderRadius: "30px",
        boxShadow:
          "12px 12px 16px 0 rgba(0, 0, 0, 0.25), -8px -8px 12px 0 #065e75",
      }}
    >
      <CardMedia
        component="img"
        height="280"
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
        <Stack direction="row" spacing={2}>
          <Rating
            name="half-rating-read"
            defaultValue={rating ? (rating * 5) / 100 : 2.5}
            precision={0.5}
            readOnly
          />
          <Typography variant="h6">
            {rating ? (rating * 5) / 100 : 2.5}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;

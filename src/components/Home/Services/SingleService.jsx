import { Button, Paper, Typography } from "@mui/material";
import React from "react";

const SingleService = ({ img, title, des }) => {
  return (
    <Paper
      elevation={6}
      sx={{ textAlign: "center", maxWidth: "300px", p: 5, my: 3 }}
    >
      <img width={80} src={img} alt={title} />
      <Typography variant="h5" component="div" fontWeight={"bold"}>
        {title}
      </Typography>
      <Typography variant="body2" color="black">
        {des}
      </Typography>
      <Button size="small">Learn More</Button>
    </Paper>
  );
};

export default SingleService;

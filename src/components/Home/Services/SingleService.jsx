import { Paper, Typography } from "@mui/material";

const SingleService = ({ img, title, des }) => {
  return (
    <Paper
      elevation={6}
      sx={{ textAlign: "center", maxWidth: "300px", p: 5, my: 3, mx: "auto" }}
    >
      <img width={80} src={img} alt={title} />
      <Typography variant="h5" component="div" fontWeight={"bold"}>
        {title}
      </Typography>
      <Typography variant="body2" color="black">
        {des}
      </Typography>
    </Paper>
  );
};

export default SingleService;

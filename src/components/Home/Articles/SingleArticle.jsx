import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Paper } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const SingleArticle = ({ data }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const d = new Date(data.publishedAt);

  return (
    <Card sx={{ maxWidth: 345, borderRadius: 3, minHeight: 600 }}>
      <CardMedia
        component="img"
        height="284"
        image={data.urlToImage}
        alt="Article_Pic"
      />
      <CardHeader title={data.title.length <= 60 ? data.title : `${data.title.slice(0,60)} ...`} sx={{mt: 5}} />
      <CardContent>
        <Paper
          sx={{
            backgroundColor: "#00D6A3",
            position: "absolute",
            top: "188.5rem",
            width: "62px",
            height: "70px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 0.3,
          }}
        >
          <Typography variant="h4">{d.getDate()}</Typography>
          <Typography variant="caption">{`${d.toDateString().slice(3,7)} ${d.getFullYear()}`}</Typography>
        </Paper>
        <Typography variant="body2" color="text.secondary">
          {data.description.length <= 80 ? data.description : `${data.description.slice(0,80)}...`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="3" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {data.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default SingleArticle;

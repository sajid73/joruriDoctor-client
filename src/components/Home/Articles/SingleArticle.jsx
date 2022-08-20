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

  // const [clicked, setClicked] = React.useState(true);

  return (
    <Card sx={{ maxWidth: 345, borderRadius: 3 }}>
      <CardMedia
        component="img"
        height="284"
        image={data.img}
        alt="Article_Pic"
      />
      <CardHeader title={data.title} />
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
          <Typography variant="h4">16</Typography>
          <Typography variant="caption">{data.date2}</Typography>
        </Paper>
        <Typography variant="body2" color="text.secondary">
          {data.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton
          aria-label="add to favorites"
          sx={{
            color: clicked ? "#707070" : "#00D6A3",
          }}
          onClick={ () => setClicked(!clicked) }
        >
          <FavoriteIcon />
        </IconButton> */}
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
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
            Molestias voluptatem et quia nobis iure, deserunt error, consequatur
            eum voluptatum ducimus maiores! Tempore, fugit. Esse nihil tenetur
            quidem iste quas autem! Harum tempora, accusamus at cupiditate
            aliquid inventore vitae aspernatur laudantium architecto, totam a
            nisi natus unde, facere pariatur! Ipsam iure facilis vitae
            necessitatibus!
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default SingleArticle;

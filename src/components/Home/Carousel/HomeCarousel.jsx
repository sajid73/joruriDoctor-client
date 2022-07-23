import {
  Box,
  Button, Stack,
  Typography
} from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Link as RouterLink } from 'react-router-dom';
import Hero1 from "../../../assets/images/Doctor2.jpg";
import { items } from "../../DemoData/HomeData";

const HomeCarousel = () => {
  return (
    <div style={{ marginTop: '-5rem' }}>
      <Carousel>
        {items.map((item, i) => (
          <Box
            key={i}
            sx={{
              height: { xs: "50vh", md: "90vh" },
              display: "flex",
              alignItems: `${item.align}`,
              flexDirection: "column",
              textAlign: `${item.talign}`,
              backgroundImage: `url(${Hero1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              pt: 10,
              pb: 5,
              px: 15,
              position: 'relative',
            }}
          >
            <Stack
              spacing={3}
              maxWidth={680}
              paddingTop={20}
              color="white"
              alignItems={"inherit"}
            >
              <Typography
                sx={{
                  backgroundColor: "#00D6A3",
                  textAlign: "center",
                  width: 320,
                  height: 25,
                  p: 1,
                }}
              >
                {" "}
                {item.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: "3.8rem",
                  fontWeight: "1000",
                }}
              >
                {item.part01} {item.part02}
                <br /> {item.part03}
              </Typography>
              <Button
                variant="outlined"
                size="large"
                color="inherit"
                component={RouterLink}
                to="/dashboard/appointmentbook"
                sx={{
                  width: 300,
                  fontWeight: "bold",
                  "&:hover": {
                    color: "black",
                    backgroundColor: "white",
                    border: "none",
                  },
                }}
              >
                MAKE AN APPOINTMENT!
              </Button>
            </Stack>
          </Box>
        ))}
      </Carousel>


    </div >
  );
};

export default HomeCarousel;

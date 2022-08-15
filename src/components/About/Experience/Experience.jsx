import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box, Grid, Stack, Typography } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import * as React from "react";
import exp from "../../../assets/images/Experience.jpg";
import panel1 from "../../../assets/images/Online_Demo1.jpg";
import panel2 from "../../../assets/images/Online_Demo2.jpg";
import panel3 from "../../../assets/images/Online_Demo3.jpg";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // backgroundColor: '#033B4A',
  border: `1px solid  #01D6A3`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));


const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <AddCircleOutlineIcon sx={{ fontSize: "0.9rem", }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#033B4A',
  "& .MuiAccordionSummary-content": {
    // marginLeft: theme.spacing(1),
    color: '#00D6A3'
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  padding: "5px 3px",
}));

const Experience = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={8}
      sx={{
        my: 10,
        px: 25,
      }}
    >
      <img src={exp} alt="Web-Info" width={460} height={585} />
      <Stack direction="column" spacing={3}>
        <span>WHAT WE DO</span>
        <Typography variant="h2">We Have 5 Years Experience</Typography>
        <Typography variant="body1" align="justify">
          We offer extensive medical procedures to outbound and inbound patients
          what it is and we are very proud of achievement of our stpatients for
          recovery
        </Typography>
        <Box>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel1" ? (
                  <RemoveCircleOutlineIcon sx={{ color: '#00D6A3'}}  />
                ) : (
                  <AddCircleOutlineIcon sx={{ color: '#00D6A3'}}  />
                )
              }
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography variant="h6" color={'#01D6A3'}>Our Mission</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container sx={{ m: 0 }}>
                <Grid xs={12} md={4}>
                  <Box
                    component={"img"}
                    src={panel1}
                    alt="Panel1"
                    sx={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </Grid>
                <Grid xs={12} md={8}>
                  <Typography textAlign={"center"}>
                    Our Clinic has grown to provide a world class facility for
                    the treatment of tooth loss, dental cosmetics and bore
                    advanced restorative dentistry. We are among the most
                    qualified implant providers in the AUS with over 30 years of
                    quality training and experience.
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel2" ? (
                  <RemoveCircleOutlineIcon sx={{ color: '#00D6A3'}} />
                ) : (
                  <AddCircleOutlineIcon sx={{ color: '#00D6A3'}} />
                )
              }
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography variant="h6" color={'#01D6A3'}>Our Vision</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container sx={{ m: 0 }}>
                <Grid xs={12} md={4}>
                  <Box
                    component={"img"}
                    src={panel2}
                    alt="Panel2"
                    sx={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </Grid>
                <Grid xs={12} md={8}>
                  <Typography textAlign={"center"}>
                    Our Clinic has grown to provide a world class facility for
                    the treatment of tooth loss, dental cosmetics and bore
                    advanced restorative dentistry. We are among the most
                    qualified implant providers in the AUS with over 30 years of
                    quality training and experience.
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel3" ? (
                  <RemoveCircleOutlineIcon sx={{ color: '#00D6A3'}}  />
                ) : (
                  <AddCircleOutlineIcon sx={{ color: '#00D6A3'}}  />
                )
              }
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography variant="h6" color={'#01D6A3'}>Our Stratagies</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container sx={{ m: 0 }}>
                <Grid xs={12} md={4}>
                  <Box
                    component={"img"}
                    src={panel3}
                    alt="Panel3"
                    sx={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </Grid>
                <Grid xs={12} md={8}>
                  <Typography textAlign={"center"}>
                    Our Clinic has grown to provide a world class facility for
                    the treatment of tooth loss, dental cosmetics and bore
                    advanced restorative dentistry. We are among the most
                    qualified implant providers in the AUS with over 30 years of
                    quality training and experience.
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Experience;

import { Phone, PhoneDisabled } from "@material-ui/icons";
import {
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../states/app.context";

const CallOptions = ({ children }) => {
  const { callAccepted, setName, callEnded, leaveCall, callUser, user } =
    useContext(AppContext);

  useEffect(() => {
    setName(user?.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Paper
        elevation={10}
        sx={{
          p: "10px 20px",
          border: "2px solid black",
        }}
      >
        <form noValidate autoComplete="off">
          <Grid container style={{ width: "100%" }}>
            <Grid item xs={12} md={6} style={{ padding: 20 }}>
              <Typography gutterBottom variant="h6">
                Account Info
              </Typography>
              <TextField value={user?.name} disabled fullWidth />
            </Grid>
            <Grid item xs={12} md={6} style={{ padding: 20 }}>
              <Typography gutterBottom variant="h6">
                Make a call
              </Typography>
              {/* <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth /> */}
              {callAccepted && !callEnded ? (
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<PhoneDisabled fontSize="large" />}
                  fullWidth
                  onClick={leaveCall}
                  style={{ marginTop: 20 }}
                >
                  Hang Up
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Phone fontSize="large" />}
                  fullWidth
                  onClick={() =>
                    callUser(localStorage.getItem("patientSocketId"))
                  }
                  style={{ marginTop: 20 }}
                >
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default CallOptions;

import {
  Alert,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const AddAdmin = () => {
  const [submitStats, setSubmitStats] = useState({ status: "", desc: "" });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      repassword: data.get("retype-password"),
    };
    if (formData.password !== formData.repassword) {
      setSubmitStats({ status: "error", desc: "Failed to add!" });
    } else {
      setSubmitStats({ status: "success", desc: "Admin added!" });
    }
  };
  return (
    <>
      <Typography variant="h3" textAlign={"center"}>
        Add new admin
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          width: {
            xs: "100%",
            md: "50%",
          },
          margin: "auto",
        }}
      >
        <TextField
          sx={{ m: "5px 0" }}
          required
          fullWidth
          id="name"
          name="name"
          label="Enter Admin's name"
          autoFocus
        />
        <TextField
          sx={{ m: "5px 0" }}
          required
          fullWidth
          id="email"
          name="email"
          label="Enter Admin's email"
          type="email"
        />
        <Grid container spacing={2} sx={{ mt: "5px" }}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              name="password"
              id="password"
              label="Enter password"
              type="password"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              name="retype-password"
              id="retype-password"
              label="Re-type password"
              type="password"
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" sx={{ mt: 2, mx: "auto" }}>
          Add
        </Button>
      </Box>
      <Snackbar
        open={
          submitStats.status === "success" || submitStats.status === "error"
            ? true
            : false
        }
        autoHideDuration={4000}
        onClose={() => setSubmitStats({ status: "", desc: "" })}
      >
        <Alert
          onClose={() => setSubmitStats({ status: "", desc: "" })}
          severity={submitStats.status || "success"}
          sx={{ width: "100%", fontWeight: "bolder" }}
          elevation={6}
          variant="filled"
        >
          {submitStats.desc}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddAdmin;

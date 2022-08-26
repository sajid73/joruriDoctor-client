import {
    Alert,
    Autocomplete,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Snackbar,
    TextField,
    Typography
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoctor } from "../../api";
import { speci } from "../DemoData/HomeData";

const RegisterDoctor = () => {
    const [submitStats, setSubmitStats] = useState({ status: "", desc: "", open: false });
    const [specilities, setSpecilities] = useState();
    const [gender, setGender] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const formData = {
            name: data.get("name"),
            email: data.get("email"),
            password: data.get("password"),
            experience: data.get("experience"),
            phone: data.get("phone"),
            working: data.get("working"),
            fees: data.get("fees"),
            specilities, gender,
        };
        if (formData.password === data.get("retype-password")) {
            await addDoctor(formData);
            setSubmitStats({ status: "success", desc: "Doctor added!", open: true });
            navigate("/");
        } else {
            setSubmitStats({ status: "error", desc: "Failed to add!", open: true });
        }
    };
    return (
        <>
            <Typography variant="h3" textAlign={"center"}>
                Register as Doctor
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
                    label="Doctor's name"
                    placeholder="Enter Doctor's name"
                    autoFocus
                />
                <TextField
                    sx={{ m: "5px 0" }}
                    required
                    fullWidth
                    id="email"
                    name="email"
                    label="Doctor's email"
                    placeholder="Enter Doctor's email"
                    type="email"
                />

                <Autocomplete
                    sx={{ m: "10px 0" }}
                    multiple
                    options={speci}
                    getOptionLabel={(option) => option}
                    onChange={((e, val) => setSpecilities(val))}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Specilities"
                            placeholder="Any Other?"
                        />
                    )}
                />
                <Grid container spacing={2} sx={{ mt: "5px" }}>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Experiences" fullWidth type="number" required placeholder="Enter years of experiences" name="experience" InputProps={{ inputProps: { min: 0 } }} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Phone no." fullWidth name="phone" placeholder="Enter phone no." />
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: "5px" }}>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth required>
                            <InputLabel>Gender</InputLabel>
                            <Select defaultValue="" label="Gender" onChange={(e) => setGender(e.target.value)}>
                                <MenuItem value={"male"}>Male</MenuItem>
                                <MenuItem value={"female"}>Female</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Working" required placeholder="Enter work institute" name="working" />
                    </Grid>
                </Grid>

                <TextField fullWidth name="fees" type="number" InputProps={{ inputProps: { min: 0 } }} sx={{ mt: "10px" }} label="Fees" required />

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
                    Register
                </Button>
            </Box>
            <Snackbar
                open={
                    submitStats.status === "success" || submitStats.status === "error"
                        ? true
                        : false
                }
                autoHideDuration={4000}
                onClose={() => setSubmitStats({ ...submitStats, open: true })}
            >
                <Alert
                    onClose={() => setSubmitStats({ ...submitStats, open: true })}
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

export default RegisterDoctor;
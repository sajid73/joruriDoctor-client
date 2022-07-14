import EditIcon from "@mui/icons-material/Edit";
import {
  Autocomplete,
  Avatar,
  Badge,
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Input,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { AppContext } from "../../../states/app.context";
import { speci } from "../../DemoData/HomeData";

const ProfileDetails = () => {
  const { user } = useContext(AppContext);
  const defaultValues = {
    Name: user.name,
    Email: user.email,
  };
  // const [formdata, setFormdata] = useState({
  //   Name: user?.name,
  //   Email: user?.email,
  // });

  const {
    // register,
    control,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    defaultValues,
  });

  // useEffect(() => {
  //   setFormdata({
  //     Name: user?.name,
  //     Email: user?.email,
  //   });
  // }, [user]);

  return (
    <div>
      {user ? (
        <Container>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
            autoComplete="off"
          >
            <Stack direction={"column"} alignItems="center" spacing={2}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <Box component={"label"} htmlFor="icon-button-file">
                    <Input
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                      sx={{ display: "none" }}
                    />
                    <IconButton
                      type="file"
                      size="small"
                      component="span"
                      sx={{
                        border: "solid",
                        bgcolor: "#00D6A3",
                        color: "white",
                        "&:hover": {
                          color: "white",
                          bgcolor: "#033b4a",
                          borderColor: "#033b4a",
                        },
                      }}
                    >
                      <EditIcon fontSize="inherit" />
                    </IconButton>
                  </Box>
                }
              >
                <Avatar alt="Profile Picture" sx={{ width: 100, height: 100 }}>
                  OP
                </Avatar>
              </Badge>

              <Grid
                container
                rowSpacing={3}
                px={10}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Controller
                    name="Name"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        value={field.value ?? " "}
                        onChange={field.onChange}
                        fullWidth
                        label="Name"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="Email"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        value={field.value ?? " "}
                        onChange={field.onChange}
                        fullWidth
                        label="Email"
                        type={"email"}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="Phone"
                    control={control}
                    rules={{
                      required: true,
                      maxLength: 11,
                      pattern: /^01[13-9]\d{8}$/,
                    }}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        value={field.value ?? " "}
                        onChange={field.onChange}
                        label="Contact Number"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    disabled
                    fullWidth
                    label="Role"
                    value={user.role || ""}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="Address"
                    control={control}
                    rules={{ maxLength: 250 }}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Address"
                        multiline
                        rows={2}
                        value={field.value ?? " "}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="Password"
                    control={control}
                    rules={{
                      required: true,
                      // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    }}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        value={field.value ?? ""}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl>
                    <FormLabel>Gender</FormLabel>
                    <Controller
                      name="Gender"
                      control={control}
                      render={({ field }) => (
                        <RadioGroup
                          value={field.value ?? " "}
                          onChange={field.onChange}
                          row
                        >
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Female"
                          />
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                          />
                        </RadioGroup>
                      )}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="Age"
                    control={control}
                    rules={{
                      required: true,
                      min: 18,
                      max: 99,
                    }}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        value={field.value ?? " "}
                        onChange={field.onChange}
                        label="Age"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel>Blood Group</InputLabel>
                    <Controller
                      control={control}
                      name="Blood_Grp"
                      render={({ field }) => (
                        <Select
                          onChange={field.onChange}
                          value={field.value ?? " "}
                          defaultValue=" "
                        >
                          <MenuItem value={"A+"}>A+</MenuItem>
                          <MenuItem value={"B+"}>B+</MenuItem>
                          <MenuItem value={"A-"}>A-</MenuItem>
                          <MenuItem value={"B-"}>B-</MenuItem>
                          <MenuItem value={"O+"}>O+</MenuItem>
                          <MenuItem value={"O-"}>O-</MenuItem>
                          <MenuItem value={"AB+"}>AB+</MenuItem>
                          <MenuItem value={"AB-"}>AB-</MenuItem>
                        </Select>
                      )}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={7}>
                  <Controller
                    name="Specialist"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field }) => (
                      <Autocomplete
                        multiple
                        limitTags={2}
                        options={speci}
                        getOptionLabel={(option) => option}
                        defaultValue={[speci[2], speci[3]]}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Specialists"
                            placeholder="Any Other?"
                          />
                        )}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    name="experience"
                    id="experience"
                    fullWidth
                    label="Experience"
                    type={"number"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="work" id="work" fullWidth label="Work In" />
                </Grid>
                <Grid item xs={7}>
                  <TextField
                    fullWidth
                    label="Fee per consultation"
                    type={"number"}
                    name="fees"
                    id="fees"
                  />
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    name="rating"
                    id="rating"
                    fullWidth
                    label="Your Rating"
                    disabled
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h4">Engaged With Patient</Typography>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box
                        sx={{
                          position: "relative",
                          left: 125,
                          fontSize: 30,
                        }}
                      >
                        50%
                      </Box>
                      <CircularProgress
                        variant="determinate"
                        value={75}
                        thickness="7.5"
                        size={200}
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Button type="submit" variant="contained">
                Edit
              </Button>
            </Stack>
          </Box>
        </Container>
      ) : (
        <h1>Edit Profile</h1>
      )}
    </div>
  );
};

export default ProfileDetails;

import EditIcon from "@mui/icons-material/Edit";
import {
  Autocomplete,
  Avatar,
  Badge,
  Box,
  Button,
  CircularProgress,
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

  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      {user.name ? (
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
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
                  name="name"
                  control={control}
                  // rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      defaultValue={user.name}
                      onChange={field.onChange}
                      fullWidth
                      label="Name"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="email"
                  control={control}
                  // rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      defaultValue={user.email}
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
                  name="phone"
                  control={control}
                  // rules={{
                  //   required: true,
                  //   maxLength: 11,
                  //   pattern: /^01[13-9]\d{8}$/,
                  // }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      defaultValue={user.phone}
                      onChange={field.onChange}
                      label="Contact Number"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField disabled fullWidth label="Role" value={user.role} />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="address"
                  control={control}
                  // rules={{ maxLength: 250 }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Address"
                      multiline
                      rows={2}
                      defaultValue={user.address}
                      onChange={field.onChange}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="Password"
                  control={control}
                  // rules={{
                  //   required: true,
                  //   // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                  // }}
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
                    name="gender"
                    control={control}
                    defaultValue={user.gender}
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
                  name="age"
                  control={control}
                  // rules={{
                  //   required: true,
                  //   min: 18,
                  //   max: 99,
                  // }}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      value={field.value ?? ""}
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
                    name="bloodGroup"
                    render={({ field }) => (
                      <Select
                        onChange={field.onChange}
                        value={field.value ?? ""}
                        defaultValue=""
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
                  name="specilities"
                  render={({ field }) => (
                    <Autocomplete
                      {...field}
                      id="specilities"
                      multiple
                      limitTags={2}
                      options={speci}
                      getOptionLabel={(option) => option}
                      // defaultValue={user.specilities}
                      filterSelectedOptions
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Specilities"
                          placeholder="Any Other?"
                        />
                      )}
                    />
                  )}
                  control={control}
                  onChange={([, data]) => data}
                  // rules={{
                  //   required: true,
                  // }}
                />
              </Grid>
              <Grid item xs={5}>
                <Controller
                  name="experience"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="experience"
                      defaultValue={user.experience}
                      fullWidth
                      label="Experience"
                      type={"number"}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  defaultValue={user.working}
                  name="work"
                  id="work"
                  fullWidth
                  label="Work In"
                />
              </Grid>
              <Grid item xs={7}>
                <Controller
                  name="fees"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      defaultValue={user.fees}
                      label="Fee per consultation"
                      type={"number"}
                    />
                  )}
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
                  <Typography variant="h4">Your average rating</Typography>
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
                      75%
                    </Box>
                    <CircularProgress
                      variant="determinate"
                      value={75}
                      thickness={7.5}
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
      ) : (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};

export default ProfileDetails;

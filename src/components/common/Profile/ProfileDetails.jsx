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
import axios from "axios";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { saveProfile, updateProfile } from "../../../api";
import { AppContext } from "../../../states/app.context";
import { speci } from "../../DemoData/HomeData";
import ShowResult from "../others/ShowResult";

const ProfileDetails = () => {
  const { user, setUser } = useContext(AppContext);
  const [submitStats, setSubmitStats] = useState({ status: "", desc: "", open: false });
  const [avatar, setAvatar] = useState('');
  // const [preview, setPreview] = useState();

  const { control, handleSubmit } = useForm();

  // console.log(typeof process.env.REACT_APP_imgbb_API_KEY);

  const onSubmit = async data => {
    if (avatar !== 'loading' && avatar !== '') {
      data = { ...data, avatar }
    }
    const res = await updateProfile(data);
    if (res.status === 201) {
      setUser(res.data);
      await saveProfile(res.data);
      setSubmitStats({ status: "success", desc: "Profile updated!", open: true });
    } else {
      setSubmitStats({ status: "error", desc: "Failed to update!", open: true });
    }
  }

  const uploadImage = async (e) => {
    setAvatar('loading');
    if (!e.target.files || e.target.files.length === 0) {
      // setPreview(undefined)
      return
    }
    // setPreview(e.target.files[0])
    const imageData = new FormData();
    imageData.set('key', process.env.REACT_APP_imgbb_API_KEY);
    imageData.append('image', e.target.files[0]);
    const res = await axios.post('https://api.imgbb.com/1/upload', imageData);
    setAvatar(res.data.data.display_url);
  }

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
                    onChange={uploadImage}
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
              <Avatar alt="Profile Picture" sx={{ width: 100, height: 100 }} src={user?.avatar || ''} />
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
              {/* <Grid item xs={6}>
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
              </Grid> */}
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
              {
                user.role === 'doctor' ? <><Grid item xs={6}>
                  <Controller name="experience" control={control}
                    render={({ field }) => (<TextField
                      {...field}
                      id="experience"
                      defaultValue={user.experience}
                      fullWidth
                      label="Experience"
                      type={"number"}
                    />)} />
                </Grid>
                  <Grid item xs={6}>
                    <Controller
                      name={"specilities"}
                      control={control}
                      // rules={{
                      //   required: true,
                      // }}
                      render={({ field: { onChange } }) => (
                        <Autocomplete
                          multiple
                          fullWidth={false}
                          id="specilities"
                          options={speci}
                          getOptionLabel={(option) => option}
                          defaultValue={user.specilities}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Specilities"
                              placeholder="Any Other?"
                            />
                          )}
                          onChange={(_, data) => {
                            onChange(data);
                            return data;
                          }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Controller name="qualifications" control={control}
                      render={({ field }) => (<TextField {...field} defaultValue={user.qualifications} name="qualifications" id="qualifications" fullWidth label="Qualifications" />)} />
                  </Grid>
                  <Grid item xs={6}>
                    <Controller name="working" control={control}
                      render={({ field }) => (<TextField {...field} defaultValue={user.working} name="work" id="work" fullWidth label="Work In" />)} />
                  </Grid>
                  <Grid item xs={6}>
                    <Controller
                      name="fees"
                      control={control}
                      render={({ field }) => (<TextField
                        {...field}
                        fullWidth
                        defaultValue={user.fees}
                        label="Fee per consultation"
                        type={"number"}
                      />)} />
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
                        sx={{
                          color: '#01D6A3'
                        }}
                      >
                        <Box
                          sx={{
                            position: "relative",
                            left: 125,
                            fontSize: 30,
                          }}
                        >
                          {user?.rating || 75}%
                        </Box>
                        <CircularProgress
                          color="inherit"
                          variant="determinate"
                          value={user?.rating || 75}
                          thickness={7.5}
                          size={200}
                        />
                      </Box>
                    </Box>
                  </Grid></> : <><Grid item xs={6}>
                    <TextField
                      fullWidth
                      type={"number"}
                      label="Age"
                      value={new Date().getFullYear() - user?.dob?.slice(0, 4)}
                      disabled
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Controller
                      name="dob"
                      control={control}
                      render={({ field }) => (
                        <Input type="date" {...field} fullWidth label="Date of Birth" defaultValue={user?.dob?.slice(0, 10)} />
                      )}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel>Blood Group</InputLabel>
                      <Controller
                        control={control}
                        name="bloodGroup"
                        defaultValue={user.bloodGroup}
                        render={({ field }) => (
                          <Select
                            label="Blood Group"
                            onChange={field.onChange}
                            value={field.value ?? ""}
                            defaultValue={user.bloodGroup || ''}
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
                  <Grid item xs={12}>
                    <Controller
                      name="healthHistory"
                      control={control}
                      // rules={{ maxLength: 250 }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label="Health history"
                          placeholder="Example: Diabetics, Heart problem etc."
                          defaultValue={user.healthHistory}
                          onChange={field.onChange}
                        />
                      )}
                    />
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
                  </Grid></>
              }
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
      )
      }
      <ShowResult submitStats={submitStats} setSubmitStats={setSubmitStats} />
    </div >
  );
};

export default ProfileDetails;

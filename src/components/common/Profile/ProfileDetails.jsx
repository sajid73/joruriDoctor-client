import EditIcon from "@mui/icons-material/Edit";
import {
  Autocomplete,
  Avatar,
  Badge,
  Box,
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
import { AppContext } from "../../../states/app.context";
import { speci } from "../../DemoData/HomeData";

const ProfileDetails = () => {
  const { user } = useContext(AppContext);

  return (
    <div>
      {user ? (
        <Container>
          <form noValidate autoComplete="off">
            <Stack direction={"column"} alignItems="center" spacing={2}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <label htmlFor="icon-button-file">
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
                  </label>
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
                  <TextField
                    fullWidth
                    label="Name"
                    value={user.name}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    value={user.email}
                    type={"email"}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="Contact Number" required />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    disabled
                    fullWidth
                    label="Role"
                    value={user.role}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Address" multiline rows={2} />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    label="Password"
                    type="password"
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup row>
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
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="Age" />
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel>Blood Group</InputLabel>
                    <Select>
                      <MenuItem value={"A+"}>A+</MenuItem>
                      <MenuItem value={"B+"}>B+</MenuItem>
                      <MenuItem value={"A-"}>A-</MenuItem>
                      <MenuItem value={"B-"}>B-</MenuItem>
                      <MenuItem value={"O+"}>O+</MenuItem>
                      <MenuItem value={"O-"}>O-</MenuItem>
                      <MenuItem value={"AB+"}>AB+</MenuItem>
                      <MenuItem value={"AB-"}>AB-</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={7}>
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
                </Grid>
                <Grid item xs={5}>
                  <TextField fullWidth label="Experience" type={"number"} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Work In" />
                </Grid>
                <Grid item xs={7}>
                  <TextField
                    fullWidth
                    label="Fee per consultation"
                    type={"number"}
                  />
                </Grid>
                <Grid item xs={5}>
                  <TextField fullWidth label="Your Rating" disabled />
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
            </Stack>
          </form>
        </Container>
      ) : (
        <h1>Edit Profile</h1>
      )}
    </div>
  );
};

export default ProfileDetails;

import { Stack } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../../states/app.context";
import CallNotification from "./Notifications";
import Prescription from "./Prescription";
import VideoPlayer from "./VideoPlayer";

const Consulting = () => {
  const { user } = useContext(AppContext);
  return (
    <>
      <Stack direction={'row'} spacing={2}>
        <VideoPlayer />
        <CallNotification />
        {/* <CallOptions>
            </CallOptions> */}
        {user?.role === "doctor" ? <Prescription /> : " "}
      </Stack>
    </>
  );
};

export default Consulting;

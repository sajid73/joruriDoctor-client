import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getAppointment, updateAppointment } from "../../../api";
import ShowResult from "../../common/others/ShowResult";

const Prescription = () => {
  const { control, handleSubmit } = useForm();
  const [prescription, setPrescription] = useState({
    problem: "",
    prescription: "",
    exams: "",
  });
  const [submitStats, setSubmitStats] = useState({
    status: "",
    desc: "",
    open: false,
  });
  const { apntid } = useParams();
  const onSubmit = async (data) => {
    // console.log(data);
    const obj = {
      ...data,
      isDone: true,
    };
    const res = await updateAppointment(apntid, obj);
    // console.log(res)
    if (res?.status === 200) {
      setSubmitStats({
        status: "success",
        desc: "Appointment done",
        open: true,
      });
    } else {
      setSubmitStats({
        status: "error",
        desc: "Something went wrong on appointment",
        open: true,
      });
    }
  };
  const loadPrescription = async () => {
    const res = await getAppointment(apntid);
    if (res?.status === 200) {
      setPrescription({
        problem: res?.data?.appointment?.problem,
        prescription: res?.data?.appointment?.prescription,
        exams: res?.data?.appointment?.exams,
      });
    }
  };
  useEffect(() => {
    loadPrescription();
    // eslint-disable-next-line
  }, []);

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        backgroundColor: "#033B4A",
        color: "white",
        p: "20px",
        borderRadius: "10px",
      }}
    >
      <Stack direction={"column"} alignItems="center" spacing={2}>
        <p>
          <b>Problem:</b> {prescription.problem}
        </p>
        <Typography variant="h4" color="white">
          Prescribe Section
        </Typography>
        <Typography variant="h6" fontWeight={'regular'} color="white">
          Prescription
        </Typography>
        <Controller
          name="prescription"
          control={control}
          render={({ field }) => (
            <TextField
              defaultValue={prescription.prescription}
              multiline
              rows={3}
              variant="outlined"
              sx={{
                width: "500px",
                backgroundColor: "white",
                color: "black",
              }}
              {...field}
              placeholder="Rx:"
            />
          )}
        />{" "}
        <br />
        <Typography variant="h6" fontWeight={'regular'} color="white">
          Tests
        </Typography>
        <Controller
          name="exams"
          control={control}
          render={({ field }) => (
            <TextField
              defaultValue={prescription.exams}
              variant="outlined"
              multiline
              rows={3}
              sx={{
                width: "500px",
                backgroundColor: "white",
                color: "black",
              }}
              {...field}
              placeholder="Exams"
            />
          )}
        />{" "}
        <br />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: "10px", backgroundColor: "#3DE49A", color: "#033B4A" }}
        >
          Prescribe
        </Button>
      </Stack>
      <ShowResult submitStats={submitStats} setSubmitStats={setSubmitStats} />
    </Box>
  );
};

export default Prescription;

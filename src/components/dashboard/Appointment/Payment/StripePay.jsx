import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAppointment, updateAppointment } from "../../../../api";
import PaymentCard from "./PaymentCard";

const StripePay = () => {
  const { apntid } = useParams();
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState();
  const stripePromise = loadStripe(
    "pk_test_51IeFe8E22xzNhJJeUrlWM1WXWQ7qupIChF3NHOWvoKLlGyMCxmtzjYJdR4y6fh1mHa9f1S2mQUeqpiKybWYuA6jD000qhJr9Ie"
  );
  const handlePayment = async (paymentId) => {
    const res = await updateAppointment(apntid, { isPaid: true });
    navigate("/dashboard/appointments");
    return res;
  };
  const loadAppointment = async () => {
    const res = await getAppointment(apntid);
    if (res?.status === 200) {
      setAppointment(res?.data?.appointment);
      console.log(res?.data?.appointment);
    }
  };
  useEffect(() => {
    loadAppointment();
    // eslint-disable-next-line
  }, []);
  return (
    <Elements stripe={stripePromise}>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" color="#00D6A3" mb={3} fontWeight={500}>
          You Have To Pay ${appointment?.doctorId.fees}
        </Typography>
        <PaymentCard handlePayment={handlePayment} />
      </Box>
    </Elements>
  );
};

export default StripePay;

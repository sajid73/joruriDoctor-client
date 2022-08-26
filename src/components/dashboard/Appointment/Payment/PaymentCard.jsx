import { Box, Button, Stack, TextField } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import ShowResult from "../../../common/others/ShowResult";

const PaymentCard = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [name, setName] = useState();
  const [submitStats, setSubmitStats] = useState({
    status: "",
    desc: "",
    open: false,
  });
  const handleSubmit = async () => {
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setSubmitStats({ status: "error", desc: error.message, open: true });
    } else {
      if (!name) {
        setSubmitStats({
          status: "error",
          desc: "Please Enter Your Name",
          open: true,
        });
        return;
      }
      await handlePayment(paymentMethod.id);
    }
  };
  return (
    <form style={{ width: 500 }}>
      <Stack direction={"column"} spacing={3}>
        <TextField
          name="firstName"
          fullWidth
          label="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Box border={5} p={2.5} sx={{ borderWidth: ".5px", borderRadius: "2px" }}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "black",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </Box>
        <Button
          onClick={() => handleSubmit()}
          disabled={!stripe || !elements}
          variant="contained"
          sx={{
            mt: "10px",
            textAlign: "center",
            backgroundColor: "#00D6A3",
            color: "white",
          }}
        >
          Pay
        </Button>
      </Stack>
      <ShowResult submitStats={submitStats} setSubmitStats={setSubmitStats} />
    </form>
  );
};

export default PaymentCard;

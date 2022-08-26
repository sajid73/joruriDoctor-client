import { Button } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import ShowResult from '../../../common/others/ShowResult';

const PaymentCard = ({ handlePayment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [submitStats, setSubmitStats] = useState({ status: '', desc: "", open: false });
    const handleSubmit = async () => {
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setSubmitStats({ status: 'error', desc: error.message, open: true })
        } else {
            await handlePayment(paymentMethod.id);
        }
    };
    return (
        <form style={{ width: 500 }}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <Button onClick={() => handleSubmit()} disabled={!stripe || !elements} variant="contained" color='info' sx={{ mt: '10px', textAlign: 'center' }}>
                Pay
            </Button>
            <ShowResult submitStats={submitStats} setSubmitStats={setSubmitStats} />
        </form>
    );
};

export default PaymentCard;
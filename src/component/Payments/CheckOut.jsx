import React from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from './CheckOutForm';
const CheckOut = () => {
  const stripePromise = loadStripe(
    'pk_test_51MaBGjCfCnJCyV0J3b7Wh9YHPGx011J4vOjU04Ee8oZsbK20aGp9LEJbcODzWoUdQsEQORVybib397SKjPsTVh6F00K9F4J82m'
  );
   
  return (
    <Elements stripe={stripePromise}>
    <CheckOutForm />
  </Elements>
  )
}

export default CheckOut
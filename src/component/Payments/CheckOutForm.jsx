import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loaduser } from '../../redux/actions/user';
import { server } from "../../redux/store";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
function CheckOutForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {loading,success,message,error,subscriptionId} = useSelector(state=>state.payment)

  // stripe items
  const stripe = useStripe();
  const elements = useElements();

  // main function
  const createSubscription = async () => {
    try {
      dispatch({
        type:"buySubscriptionRequest"
      })
      // setLoading(true)
      
      // create a payment method
      const paymentMethod = await stripe?.createPaymentMethod({
        type: "card",
        card: elements?.getElement(CardElement),
      });

      const {data} = await axios.post('http://localhost:4000/api/v1/buysubscription',{
        paymentMethod:paymentMethod?.paymentMethod?.id
       },{
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }) 
      console.log(data)

      // setLoading(false)

     dispatch({
      type:"buySubscriptionSuccess",
      payload:data
     })
    } catch (error) {
      dispatch({
        type:"buySubscriptionFail",
        payload:error.response.data
    })
    console.log(error)
    }
  };
  useEffect(()=>{
    if(error){
      toast.error(error)
      dispatch({
        type:"clearError"
      })
      navigate('/paymentfail')
    }
    if(success === true){
      toast.success(message)
      dispatch({
        type:"clearMessage"
      })
      dispatch(loaduser());
      navigate(`/paymentsuccess/${subscriptionId}`)
    }
  },[dispatch,success,message])
  return (
  <HStack justifyContent={'center'} alignItems='center' h={'100vh'} >
    <VStack w='40%' backgroundColor={'blackAlpha.300'} gap='4' p='7' rounded={'lg'} >
      <Box w={'100%'}>
      <CardElement  />
      </Box>
      <Button isLoading={loading} onClick={createSubscription} disabled={!stripe} >
      Subscribe
      </Button>
    </VStack>
  </HStack>
  );
}

export default CheckOutForm;
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";

function Paymenttest() {
  
  // collect data from the user
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
const priceId = "price_1MaBO8CfCnJCyV0JPHTBtfey";
  
  // stripe items
  const stripe = useStripe();
  const elements = useElements();

  // main function
  const createSubscription = async () => {
    try {
      
      // create a payment method
      const paymentMethod = await stripe?.createPaymentMethod({
        type: "card",
        card: elements?.getElement(CardElement),
        billing_details: {
          name,
          email,
        },
      });
     

      // call the backend to create subscription
      // const response = await fetch("http://localhost:4000/api/v1/create-subscription", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     paymentMethod: paymentMethod?.paymentMethod?.id,
      //     name,
      //     email,
      //     priceId
      //   }),
      // }).then((res) => res.json());

     const response = await axios.post("http://localhost:4000/api/v1/buysubscription",{
      paymentMethod:paymentMethod?.paymentMethod?.id
     },{
      headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer pk_test_51LlypyFAN2w87ew5vfw2shNYW0x8PejPuG09CVaaB0BNdVwYxOz63pb1GueMf6uWQr5yQ9NDTkwbG7wyPv2sR8qm00fGjycXAN"
      },
      withCredentials: true,
    }) 
    console.log(response?.clientSecret)
      const confirmPayment = await stripe?.confirmCardPayment(
        response.clientSecret
      );

      if (confirmPayment?.error) {
        alert(confirmPayment.error.message);
      } else {
        alert("Success! Check your email for the invoice.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const cancleSubscription=()=>{
        axios.delete("http://localhost:4000/api/v1/canselsubscription",{ withCredentials: true,})
       
  }

  return (
   <div className="flex  justify-center items-center h-[100vh] ">
     <div className="w-2/5 bg-slate-800 flex flex-col gap-4 p-9 rounded-lg">
      <input
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        placeholder="Email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <CardElement />
      <button className="bg-slate-500 text-white h-10 rounded-lg" onClick={createSubscription} disabled={!stripe}>
        Subscribe
      </button>

      <button className="bg-slate-500 text-white h-10 rounded-lg" onClick={cancleSubscription} disabled={!stripe}>
     cancle
    </button>
    </div>
   </div>
  );
}

export default Paymenttest;
import { Button } from '@mui/joy';
import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useState } from 'react'

function Revenue() {
    const [paying, setPaying] = useState(false)
    const handlePayment = async()=>{
        setPaying(true)
        try {
            const postBody  = {
                "cardHolderName":"John Doe",
                "cardNumber": "4446763125813623",
                "cvv": "000",
                "expiryMonth": 12,
                "expiryYear": 28,
                "cardType": 1,
                "amount": 150
            }             
          const response = await axios.post(`${import.meta.env.VITE_BASE_URL}payment/process`, postBody)
          var wnd = window.open("", "_blank");
          wnd.document.write(response?.data);
          setPaying(false)

        } catch (error) {
            console.log("Error during payment:", error.toString());
            setPaying(false)
        }
    }
  return (
    <div className='w-screen h-screen flex flex-col gap-10 justify-center items-center overflow-hidden'>
        <Button
        loading={paying}
        onClick={handlePayment}
        className='text-white font-bold p-4 bg-primary rounded-sm hover:bg-primary/95 transition-colors'>
            Pay Now
        </Button>
    </div>
  )
}

export default Revenue
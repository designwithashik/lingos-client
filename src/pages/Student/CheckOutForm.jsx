import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useEffect } from "react";
import './CheckOutForm.css'
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const CheckOutForm = ({ cls }) => {
    const {price, name, _id, classId, availableSeats, studentEnrolled,instructor} = cls
  
    const stripe = useStripe();
  const elements = useElements();
    const [cardError, setCardError] = useState();
    const [axiosSecure] = useAxiosSecure();
    const {user}= useAuth()
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
    useEffect(() => {
      if (price > 0) {
        axiosSecure.post('/create-payment-intent', { price })
        .then(response => {
            console.log(response.data.clientSecret)
            setClientSecret(response.data.clientSecret)
    })
        }
    },[price, axiosSecure])


    const handleSubmit = async (event) => {
      setCardError('')
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
        console.log('Stripe.js has not loaded yet')
      return
      }
    const card = elements.getElement(CardElement);

      
      if (card == null) {
        return;
      }


  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });


      if (error) {
          console.log('error', error);
          setCardError(error.message)
      } else {
        // console.log('PaymentMethod', paymentMethod);
        }
        
      setProcessing(true);
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.displayName || 'anonymous'
                },
              },
            },
        );
        if (confirmError) {
            console.log(confirmError)
        }
      console.log('payment intent', paymentIntent)
      setProcessing(false)
      
      if (paymentIntent.status === 'succeeded') {
        const transactionId = paymentIntent.id;
        setTransactionId(transactionId)
        const payment = {
          email: user?.email, transactionId, price, date: new Date(), clsName: name, checkoutId: _id, classId, availableSeats, studentEnrolled, instructor
        }
        axiosSecure.post('/payments', payment)
          .then(res => {
              console.log(res.data);
              
          })
          
      }
          
    };

    


  return (
    <div className="checkoutform">
    <form className="mt-5" onSubmit={handleSubmit}>
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
              {cardError && <p className="text-red-500">{cardError}</p>}
        <button disabled={!stripe || !clientSecret|| processing} className="btn brn-outline btn-primary m-4 rounded-box" type="submit" >
        Pay
        </button>
        {transactionId && <p className="text-green-500 font-bold">Transaction succeeded. Transaction ID:  {transactionId}</p>}
    </form>



          </div>)
}

export default CheckOutForm;
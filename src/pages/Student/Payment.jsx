import { Elements } from '@stripe/react-stripe-js';
import {useLocation} from 'react-router-dom'
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import PaymentHistory from './PaymentHistory'
const Payment = () => {
    const location = useLocation()
    const selectedClass = location.state.data;
    console.log(selectedClass)
    const stripePromise = loadStripe(import.meta.env.VITE_PK_KEY)


    
    return (
        <div className="">
            <h2 className='text-lg mt-28'>Please Pay Here</h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm cls={selectedClass} />
            </Elements>

            <div className="my-28">
            <h2 className='text-lg mt-28'>Previous Payment History</h2>

                <PaymentHistory/>
            </div>

        </div>
    );

};

export default Payment;
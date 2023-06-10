import { Elements } from '@stripe/react-stripe-js';
import {useLocation} from 'react-router-dom'
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
const Payment = () => {
    const location = useLocation()
    const selectedClass = location.state.data;
    console.log(selectedClass)
    const stripePromise = loadStripe(import.meta.env.VITE_PK_KEY)


    
    return (
        <div className="m-9">
            <h2>Please Pay Here</h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm cls={selectedClass} />
            </Elements>
        </div>
    );

};

export default Payment;
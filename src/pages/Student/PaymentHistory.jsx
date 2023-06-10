import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const PaymentHistory = () => {
    const { user } = useAuth()
    const [payments, setPayments] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/payments?email=${user.email}`)
            .then(res => res.json())
        .then(data=>setPayments(data))
    },[])
    return (
        <div>
            <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Name</th>
                                <th>Transaction ID</th>
                                <th>Date</th>
                                <th>Price</th>

                            </tr>
                        </thead>
                        <tbody>
            {payments.map((payment, index) => {
                const {transactionId,price,date,clsName, _id}= payment
                return  <tr key={_id}>
                                        <td>
                                            {index + 1}
                                        </td>
                                        
                                        <td>{clsName}</td>
                                        <td className="font-bold">${transactionId}</td>
                                        <td>
                                            {date.split('T')[0]}
                        </td>
                        <td>{price}</td>
                                    </tr>
                              
             
            })}
                    </tbody>

</table>
        </div>
    );
};

export default PaymentHistory;
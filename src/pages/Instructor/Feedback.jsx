import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const Feedback = () => {
    const {user} = useAuth()
    const [feedbacks, setFeedbacks] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/feedback`)
        .then(res => res.json())
      .then(data=>setFeedbacks(data))
           console.log(feedbacks)
    }, [])
    const clsFeedback = feedbacks.filter(feedback => feedback.email === user.email);
    console.log(clsFeedback)
    return (
        <div>
            <table className="table">
    {/* head */}
    <thead >
      <tr>
        <th>
          #
        </th>
        <th>Class</th>
        <th>Feedback</th>
        <th> Email</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/*classes row  */}
                        {clsFeedback.map((cls, index) => {
                            const {name, feedback, email, status, _id} = cls
                            return <tr key={_id}>
                                <td>
                                    {index+1}
              </td>
         
                                <td>
                                    {name}
                                    
          </td>
                              <td>{feedback}</td>
                              <td>{email}</td>
                              <td>
                              <div className={`${status ==='pending'? 'bg-yellow-500':status ==='denied'? 'bg-red-500':'bg-green-500'} text-white btn cursor-none`}>{status}</div>
                                </td>
                                <td>
                                    
                                </td>
                              
          
        </tr>
        
      })}
     
            </tbody>
    
    
  </table>
        </div>
    );
};

export default Feedback;
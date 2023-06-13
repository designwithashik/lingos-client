import useClasses from '../../hooks/useClasses';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const MyClasses = () => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const [Classes] = useClasses()
    const myCls = Classes.filter(cls => cls.email === user.email)
    console.log(myCls)
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
        <th>Students</th>
        <th> Seats</th>
        <th>Price</th>
        <th>Status</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/*classes row  */}
                        {myCls.map((cls, index) => {
                            const {studentsEnrolled, image, price, _id, availableSeats, status, name} = cls
                            return <tr key={_id}>
                                <td>
                                    {index+1}
              </td>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={image} alt="class Image" />
                </div>
              </div>
              <div>
                <div className="font-bold">{name}</div>
                
              </div>
            </div>
          </td>
                                <td>
                                  {studentsEnrolled}
            
          </td>
                              <td>{availableSeats}</td>
                              <td>{price}</td>
                              <td>
                              <div className={`${status ==='pending'? 'bg-yellow-500':status ==='denied'? 'bg-red-500':'bg-green-500'} text-white btn cursor-none`}>{status}</div>
                                </td>
                                <td>
                                    <div className="flex justify-center items-center gap-2">
                                   
                                    <button className="btn btn-accent btn-sm ">Update</button>
                                    </div>
                                </td>
                              <td><button onClick={()=>navigate('/dashboard/feedback')} className="btn btn-primary btn-sm">Feedback</button></td>
          
        </tr>
        
      })}
     
            </tbody>
    
    
  </table>
        </div>
    );
};

export default MyClasses;
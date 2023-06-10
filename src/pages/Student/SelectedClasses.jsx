import { FaDollarSign } from "react-icons/fa";
import PageTitle from "../../components/PageTitle";
import useAuth from "../../hooks/useAuth";
import useSelectedClass from "../../hooks/useSelectedClass";
import { useNavigate } from 'react-router-dom';

const SelectedClasses = () => {
    const { user } = useAuth()
    const navigate =useNavigate()
    console.log(user)
        const [allSelectedClasses] = useSelectedClass(user.email);
   
    console.log(allSelectedClasses)
    const handleMakePayment = (cls) => {
        navigate('/dashboard/payment', { state: { data: cls  } });
      
  
    }
    return (
        <div>
            <PageTitle>Selected Classes</PageTitle>
            <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Class Name</th>
                                <th>Instructor</th>
                                <th>Price</th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody>
                            {/*products row  */}
                            {allSelectedClasses.map((cls, index) => {
                                return (
                                    <tr key={cls._id}>

                                        <td>
                                            {index + 1}
                                        </td>
                                        
                                    
                                        <td>{cls.name}</td>
                                        <td className="text-end">
                                            {cls.instructor}
                                            <br />
                                            {cls.email}</td>
                                        <td>
                                        ${cls.price}
                                        </td>
                                        <td>
                                            <button className="btn text-white bg-green-500" onClick={() => handleMakePayment(cls)}> PAY <FaDollarSign></FaDollarSign></button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>

                    </table>
                </div>
            
        </div>
    );
};

export default SelectedClasses;
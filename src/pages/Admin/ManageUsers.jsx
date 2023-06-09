import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import {FaChalkboardTeacher, FaUserShield} from 'react-icons/fa';
import Swal from "sweetalert2";
import PageTitle from "../../components/PageTitle";
const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const {data: users = [], refetch} = useQuery(['users'], async () => {
        const res = await axiosSecure('/users')
        return res.data;
    })

    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:3000/users/admin/${user._id}`, {
            method: 'PATCH',
            headers: {'content-type': 'application/json'},
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        title: `${user.name} has been promoted to Admin`,
                        showClass: {
                          popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                          popup: 'animate__animated animate__fadeOutUp'
                        }
                      })
            }
        })
    }
    return (
        <div>
            <PageTitle>Manage Users</PageTitle>
            <h3 className="text-3xl font-semibold">Total Users: {users.length}</h3>
            <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th></th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody>
                            {/*products row  */}
                            {users.map((user, index) => {
                                return (
                                    <tr key={user._id}>

                                        <td>
                                            {index + 1}
                                        </td>
                                        
                                    
                                        <td>{user.name}</td>
                                        <td className="text-end">${user.email}</td>
                                        <td><button onClick={()=>handleMakeAdmin(user)} className="btn btn-warning">{user.role === 'admin' ? 'admin' : <FaUserShield></FaUserShield>}</button></td>
                                        <td>
                                            <button className="btn bg-error btn-ghost"><FaChalkboardTeacher></FaChalkboardTeacher></button>
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

export default ManageUsers;
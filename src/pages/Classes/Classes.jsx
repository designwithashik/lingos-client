import Swal from "sweetalert2";
import PageTitle from "../../components/PageTitle";
import useClasses from "../../hooks/useClasses";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageBanner from "../../components/PageBanner";

const Classes = () => {
  const [allClasses] = useClasses()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [singleUser,setSingleUser] = useState([])
  console.log(allClasses)
  const classes = allClasses.filter(cls=>cls.status==='approved')
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  

  const handleSelectClass = (cls) => {
    
    if (user) {
      
      fetch(`https://lingos-server.vercel.app/user/${user?.email}`)
        .then(res => res.json())
      .then(data=>setSingleUser(data))
           console.log(singleUser)
      
      let exitingUser
      if (singleUser.email === user.email) {
        exitingUser = singleUser
      }  
      console.log(exitingUser)
      if (exitingUser?.email) {
        if (exitingUser.role === 'admin' || exitingUser.role === 'instructor') {
          console.log('vitore')
          {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            

            })
          

            Toast.fire({
              icon: 'error',
              title: 'Please Sign In as a Student!'
            })
          }
          return setButtonDisabled(true)
          
            }
      }
    }
    else {
     return navigate('/login')
    }
    
        const selectClass = { name: cls.name, email: cls.email, instructor: cls.instructor, studentEmail: user?.email, price: cls.price, classId: cls._id, availableSeats: cls.availableSeats, studentsEnrolled: cls.studentsEnrolled}
        console.log(selectClass)
        fetch('https://lingos-server.vercel.app/selected-class',
          {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(selectClass)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
                if (data.acknowledged) {
                    {
                        const Toast = Swal.mixin({
                          toast: true,
                          position: 'top-end',
                          showConfirmButton: false,
                          timer: 3000,
                          timerProgressBar: true,
                          didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                          }
                        
          
                        })
                      
          
                        Toast.fire({
                          icon: 'success',
                          title: 'Class selected'
                        })
                      }
              }
              if(data.message){
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  
    
                  })
                
    
                  Toast.fire({
                    icon: 'error',
                    title: 'Class already selected'
                  })
              }

            })
    }
    return (

        <div>
        <PageTitle>Classes</PageTitle>
        <PageBanner/>

            <div className="flex justify-center items-center flex-wrap mx-auto gap-5">
                {classes.map(cls => {
                    const {image, name,instructor, _id, availableSeats, studentsEnrolled, price}= cls
                    return ( <div key={_id} className="card  w-96 h-72">
                      <img src={image} alt="class" className="object-cover w-full h-full rounded-box" />
                      <div className={`font-normal lg:ml-11 absolute right-0 top-1/3 w-44 bg-opacity-75 p-3 ${availableSeats? 'bg-slate-500': 'bg-red-500'}`}>
                      <h2 className="card-title text-white">{name}</h2>
                            <p className="text-white">{instructor}</p>
                        <p className="text-white">Seats: {availableSeats} Price: {price}</p>
                            <p className="text-white">Enrolled: {studentsEnrolled}</p>
                        <div className=" justify-end">
                            <button disabled={isButtonDisabled || !availableSeats} onClick={()=>handleSelectClass(cls)} className="btn btn-sm btn-primary bg-[#524FD5] text-white">Select Class</button>
                      </div>
                    </div>
                </div>
                )
            })}
            </div>


        </div>
    );
};

export default Classes;
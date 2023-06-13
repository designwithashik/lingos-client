import Swal from "sweetalert2";
import useClasses from "../../hooks/useClasses";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ManageClasses = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [feedbackCls, setFeedbackCls] =useState()
  const [allClasses, , refetch] = useClasses()
  const handleFeedback = (cls) => {
    setFeedbackCls(cls)
    window.my_modal_5.showModal()
  }
  const onSubmit = data => { 
    const {_id, email, name, status} = feedbackCls
    const clsFeedback = {
      clsId: _id,
      email,
      status,
      name,
      feedback: data.feedback

    }
    fetch('http://localhost:3000/feedback',
          {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(clsFeedback)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
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
                title: 'Feedback is sent!'
              })
            }

            

            })

  }
  const handleApproveCls = (id) => {
    
    const response = {decision: true, id}
    fetch(`http://localhost:3000/selected-class/response`, {
        method: 'PATCH',
      headers: { 'content-type': 'application/json' },
        body: JSON.stringify(response)
    })
        .then(res => res.json())
        .then(data => {
          if (data.modifiedCount) {
            refetch()
            
                Swal.fire({
                    title: `Class has been approved`,
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
  const handleDenyCls = (id) => {
    const response = {decision: false, id}
    fetch(`http://localhost:3000/selected-class/response`, {
        method: 'PATCH',
      headers: { 'content-type': 'application/json' },
        body: JSON.stringify(response)
    })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
              refetch()
              
                Swal.fire({
                    title: `Class has been disapproved`,
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
            <div className="overflow-x-scroll lg:overflow-auto">
  <table className="table">
    {/* head */}
    <thead >
      <tr>
        <th>
          #
        </th>
        <th>Class</th>
        <th>Instructor</th>
        <th> Seats</th>
        <th>Price</th>
        <th>Status</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/*classes row  */}
                        {allClasses.map((cls, index) => {
                            const {name, instructor, image, price, _id, availableSeats, status, email} = cls
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
                                    {instructor}
                                    <br />
                                    {email}
            
          </td>
                              <td>{availableSeats}</td>
                              <td>{price}</td>
                              <td>
                              <div className={`${status ==='pending'? 'bg-yellow-500':status ==='denied'? 'bg-red-500':'bg-green-500'} text-white btn cursor-none`}>{status}</div>
                                </td>
                                <td>
                                    <div className="flex justify-center items-center gap-2">
                                    <button disabled={status === 'approved' || status ==='denied'}  onClick={()=>handleApproveCls(_id)} className="btn btn-primary btn-sm">Approve</button>
                                    
                                    <button disabled={status === 'approved' || status ==='denied'} onClick={()=>handleDenyCls(_id)} className="btn btn-error btn-sm ">Deny</button>
                                    </div>
                                </td>
                              <td><button onClick={()=>handleFeedback(cls)} className="btn btn-primary btn-sm">Send Feedback</button></td>
          
        </tr>
        
      })}
     
            </tbody>
    
    
  </table>
        </div>
        {/* Open the modal using ID.showModal() method */}
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <form method="dialog" className="modal-box">
          <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

    <h3 className="font-bold text-lg">Provide Feedback!</h3>
            <div className="py-4">
            <textarea {...register('feedback')} placeholder="Congratulations ..." className="text-area w-full h-72  border-4"></textarea> 
    </div>
    <div className="modal-action">
      {/* if there is a button in form, it will close the modal */}
              <button onClick={handleSubmit(onSubmit)} className="btn">Send</button>
    </div>
  </form>
</dialog>
        </div>
    );
};

export default ManageClasses;
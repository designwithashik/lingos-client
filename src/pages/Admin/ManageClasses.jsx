import Swal from "sweetalert2";
import useClasses from "../../hooks/useClasses";

const ManageClasses = () => {
  const [allClasses, refetch] = useClasses()
  
  const handleApproveCls = (id) => {
    const response = {decision: true, id}
    fetch(`http://localhost:3000/selected-class/${response}`, {
        method: 'PATCH',
        headers: {'content-type': 'application/json'},
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
    fetch(`http://localhost:3000/selected-class/${response}`, {
        method: 'PATCH',
        headers: {'content-type': 'application/json'},
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
                                    {/* TODO: add gmail and status */}
                                    {instructor}
                                    <br />
                                   blabla.gmail.com
            
          </td>
                              <td>{availableSeats}</td>
                              <td>{price}</td>
                                <td>{status}</td>
                                <td>
                                    <div className="flex justify-center items-center gap-2">
                                    <button onClick={()=>handleApproveCls(_id)} className="btn btn-primary btn-sm">Approve</button>
                                    
                                    <button onClick={()=>handleDenyCls(_id)} className="btn btn-error btn-sm ">Deny</button>
                                    </div>
                                </td>
                              <td><button onClick={()=>window.my_modal_5.showModal()} className="btn btn-primary btn-sm">Send Feedback</button></td>
          
        </tr>
        
      })}
     
            </tbody>
    
    
  </table>
        </div>
        {/* Open the modal using ID.showModal() method */}
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <form method="dialog" className="modal-box">
    <h3 className="font-bold text-lg">Provide Feedback!</h3>
            <div className="py-4">
            <textarea name="" id="" cols="60" rows="10"></textarea> 
    </div>
    <div className="modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn">Send</button>
    </div>
  </form>
</dialog>
        </div>
    );
};

export default ManageClasses;
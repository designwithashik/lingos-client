import useClasses from "../../hooks/useClasses";

const ManageClasses = () => {
    const [allClasses] = useClasses()
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
                                    <button className="btn btn-primary btn-sm">Approve</button>
                                    
                                    <button className="btn btn-error btn-sm ">Deny</button>
                                    </div>
                                </td>
                              <td><button className="btn btn-primary btn-sm">Send Feedback</button></td>
          
        </tr>
      })}
     
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default ManageClasses;
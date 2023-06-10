import Swal from "sweetalert2";
import PageTitle from "../../components/PageTitle";
import useClasses from "../../hooks/useClasses";
import useAuth from "../../hooks/useAuth";

const Classes = () => {
    const [allClasses] = useClasses()
    const {user} = useAuth()
    console.log(allClasses)
    const handleSelectClass = (cls) => {
        
        const selectClass = { name: cls.name, email: cls.email, instructor: cls.instructor, studentEmail: user?.email, price: cls.price, classId: cls._id}
        console.log(selectClass)
        fetch('http://localhost:3000/selected-class',
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

            <div className="flex justify-center items-center flex-wrap mx-auto gap-5">
                {allClasses.map(cls => {
                    const {image, name,instructor, _id}= cls
                    return ( <div key={_id} className="card w-96 h-72 image-full">
                    <figure><img src={image} alt="class" className="object-cover w-96 h-72" /></figure>
                    <div className="card-body">
                            <h2 className="card-title">{name}!</h2>
                            <p>{instructor}</p>
                        <div className="card-actions justify-end">
                            <button onClick={()=>handleSelectClass(cls)} className="btn btn-primary">Select Class</button>
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
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const AddClass = () => {
    const { user } = useAuth()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = clsData => {
        console.log(clsData)
        const { className, classImage, email, instructor, price,availableSeats} = clsData;
        const saveCls = {name:className,image:classImage , email, instructor, price, availableSeats, status: 'pending', studentsEnrolled: 0}
        fetch('https://lingos-server.vercel.app/classes',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveCls)
          })
          .then(res => res.json())
          .then(data => {
              console.log(data)
                reset()
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
                title: 'Class is added successfully'
              })
            }

            })

      

    }
    return (
        <>

            <div className="w-full">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-5 justify-center items-center">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input type="text"
                                placeholder="Class Name"
                                className="input input-bordered"
                                {...register("className")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Banner Image</span>
                            </label>
                            <input type="text"
                                placeholder="Class Display Image"
                                className="input input-bordered"
                                {...register("classImage")} />
                        </div>
                    </div>
                    <div className="flex gap-5 justify-center items-center">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>
                            <input readOnly type="email"
                                defaultValue={user?.email}
                                className="input input-bordered"
                                {...register("email")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>

                            <input type='text'
                                readOnly
                                defaultValue={user?.displayName}
                                className="input input-bordered" {...register("instructor")} />

                        </div>
                    </div>

                    <div className="flex gap-5 justify-center items-center">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text"
                                placeholder="Price"
                                className="input input-bordered"
                                {...register("price")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Seats</span>
                            </label>
                            <input type="text"
                                placeholder="Available Seats"
                                className="input input-bordered"
                                {...register("availableSeats")} />
                        </div>
                    </div>


                    <div className="form-control mt-6 ">
                        <button type="submit" className="btn btn-primary max-w-sm mx-auto">Add Class</button>
                    </div>

                </form>
            </div>
        </>
    );
};

export default AddClass;
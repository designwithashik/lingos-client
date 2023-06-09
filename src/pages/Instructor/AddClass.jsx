import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const AddClass = () => {
    const { user } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {


        console.log(data);

    }
    return (
        <div>

            <div className="">
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-5">
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
                    <div className="flex gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>
                            <input disabled type="email"
                                defaultValue={user?.email}
                                className="input input-bordered"
                                {...register("email")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input disabled type='text'
                                defaultValue={user?.displayName}
                                className="input input-bordered" {...register("instructor")} />

                        </div>
                    </div>

                    <div className="flex gap-5">
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
                                {...register("seats")} />
                        </div>
                    </div>


                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Add Class</button>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddClass;
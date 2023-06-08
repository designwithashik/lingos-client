import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
const Login = () => {
    const { googleLogin, emailLogin } = useAuth();
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('')
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }

    const onSubmit = data => {
        setError('')
       
        console.log(data);
        emailLogin(data.email, data.password)
            .catch(error => setError(error.message))
    }


    const handleGoogleLogIn = () => {
        googleLogin()
            .then(res => console.log(res.user))
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
                                <input type="email" placeholder="email" className="input input-bordered"
                                    {...register("email", { required: true })} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
                                <input type={toggle ? 'text' : 'password'} placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                                
                                <input onClick={handleToggle} type="checkbox" className="toggle toggle-info"  />

                            </div>
                            {/**TODO: Empty Login Validation */}
                            {/* {errors.password || errors.email? setError('Please Fill Up'): setError('')} */}
                            {error && <p className="text-red-500">{error}</p>}

        <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                                
                            </div>
                            
                        </form>
                        <button onClick={handleGoogleLogIn} className="btn btn-primary">Connect with google</button>
    </div>
  </div>
</div>
           
        </div>
    );
};

export default Login;
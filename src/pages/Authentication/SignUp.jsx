import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
    const {emailSignUp} = useAuth()
    const [error, setError] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();
// console.log(errors)

    const onSubmit = data => {
        setError('')
        if (data.confirmPassword !== data.password) {
            setError("Password Doesn't Match!")
            return
        }
        console.log(data);
        emailSignUp(data.email, data.password)
            .then(res => {
                const user = res.user
                console.log(res.user)
                updateProfile(user, {
                    displayName: user.displayName, photoURL: data.image
                  }).then(() => {
                    console.log('picture Updated')
                  }).catch((error) => {
                    setError(error.message)
                  });
                  
            })
            .catch(error => setError(error.message))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" >
      <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
                      type="email"
                      placeholder="example@email.com"
                      className="input input-bordered w-full rounded-full"
                      {...register("email", { required: true })} 
                    />
            

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
                      type="password"
                      placeholder="abcd123$"
                      className="input input-bordered w-full rounded-full"
                      {...register('password', {
                        required: true, 
                          pattern: /(?=.*[!#$%&?^*@~() "])(?=.{6,})(?=.*[A-Z])/
                      })}
                      
                    />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="input input-bordered w-full rounded-full"
                                    {...register('confirmPassword', {required: true})}
                      
                    />
                                
                            </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
                                    type="text"
                                    placeholder="Photo URL"
                                    className="input input-bordered w-full rounded-full"
                      
                                    {...register('image')}
                    />
                                
                            </div>
                            {errors.password && <p className="text-red-500">Password Must be least 6 characters with a capital letter and a special character</p>}
                            {errors.email && <p className="text-red-500">Invalid Email!</p>}
                            {error && <p className="text-red-500">{error}</p>}
                            

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;
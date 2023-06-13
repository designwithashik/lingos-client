import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const { emailSignUp } = useAuth()
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
          displayName: data.name, photoURL: data.image
        }).then(() => {
          console.log('picture Updated')


        })
          .catch((error) => {
            setError(error.message)
          });
        const saveUser = { name: data.name, email: data.email, role: 'student' }
        console.log(res.user)
        fetch('http://localhost:3000/users',
          {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
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
                title: 'Signed up successfully'
              })
            }

            })




      })

      .catch(error => setError(error.message))
  }
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-full">
            <img className="w-full" src='https://i.ibb.co/dPSg86q/undraw-welcome-cats-thqn.png
' alt="welcome" />
          </div>
          <div className="card w-full max-w-sm shadow-2xl bg-base-100" >
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full rounded-full"
                  {...register("name", { required: true })}
                />


              </div>
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
                  {...register('confirmPassword', { required: true })}

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
              <p>Already have an Account?<Link to='/login' className="text-purple-500"> Login Here</Link></p>

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
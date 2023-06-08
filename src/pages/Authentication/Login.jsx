import useAuth from "../../hooks/useAuth";

const Login = () => {
    const { googleLogin } = useAuth();
    const handleGoogleLogIn = () => {
        googleLogin()
            .then(res => console.log(res.user))
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <button onClick={handleGoogleLogIn} className="btn btn-primary">Connect with google</button>
        </div>
    );
};

export default Login;
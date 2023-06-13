import useAuth from "../../hooks/useAuth";

const DashboardHome = () => {
    const { user } = useAuth()
    console.log(user?.displayName)
    
    return (
        <div>
            <h2 className="text-xl font-bold">Welcome Back, {user?.displayName}</h2>
            <img className="w-full" src='https://i.ibb.co/dPSg86q/undraw-welcome-cats-thqn.png
' alt="welcome" />
        </div>
    );
};

export default DashboardHome;
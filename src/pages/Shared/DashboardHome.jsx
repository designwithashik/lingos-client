import useAuth from "../../hooks/useAuth";

const DashboardHome = () => {
    const { user } = useAuth()
    console.log(user?.displayName)
    
    return (
        <div>
            <h2 className="text-lg font-bold">Welcome Back, {user?.displayName}</h2>
        </div>
    );
};

export default DashboardHome;
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
  

    return (
        <div>
            <NavigationBar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default MainLayout;
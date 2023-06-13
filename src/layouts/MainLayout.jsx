import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
  

    return (
        <div>
            <div className="min-h-[calc(100vh-220px)]">
            <NavigationBar />

                <div className="">
                <Outlet /></div></div>
            <Footer/>
        </div>
    );
};

export default MainLayout;
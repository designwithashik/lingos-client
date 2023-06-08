import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import StudentDashboard from "../layouts/StudentDashboard";
import SelectedClasses from "../pages/Student/SelectedClasses";
import PrivateRoute from "./PrivateRoute";
import Classes from "../pages/Classes/Classes";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'sign-up',
                element: <SignUp/>
            },
            {
                path: 'classes',
                element: <Classes/>
            }
           
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><StudentDashboard /></PrivateRoute>,
        children: [
            {
                path: 'selected-classes',
                element: <SelectedClasses/>
            }
        ]
        
    }

])

export default routes;
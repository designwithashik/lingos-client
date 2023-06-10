import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import SelectedClasses from "../pages/Student/SelectedClasses";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors";
import DashboardLayout from "../layouts/DashboardLayout";
import ManageClasses from "../pages/Admin/ManageClasses";
import AddClass from "../pages/Instructor/AddClass";
import DashboardHome from "../pages/Shared/DashboardHome";
import ManageUsers from "../pages/Admin/ManageUsers";
import Payment from "../pages/Student/Payment";
import PaymentHistory from "../pages/Student/PaymentHistory";
import StudentEnrolledClasses from "../pages/Student/StudentEnrolledClasses";

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
            },
            {
                path: 'instructors',
                element: <Instructors/>
            }
           
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
        children: [
            {
                path: 'home',
                element: <DashboardHome/>
        },
        // student routes
            {
                path: 'selected-classes',
                element: <SelectedClasses/>
            },
            {
                path: 'payment',
                element: <Payment/>
            },
            {
                path: 'payment-history',
                element: <PaymentHistory/>
            },
            {
                path: 'enrolled-classes',
                element: <StudentEnrolledClasses/>
            },
        // admin routes
            {
                path: 'manage-classes',
                element: <ManageClasses/>
            },
            {
                path: 'manage-users',
                element: <AdminRoute><ManageUsers/></AdminRoute>
            },

        // instructor routes
            
            {
                path: 'add-class',
                element:<AddClass/>
            }
        ]
        
    }

])

export default routes;
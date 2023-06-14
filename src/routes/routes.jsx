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
import MyClasses from "../pages/Instructor/MyClasses";
import Feedback from "../pages/Instructor/Feedback";
import InstructorRoute from "./InstructorRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage/>,
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
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        errorElement: <ErrorPage/>,
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
                element: <AdminRoute><ManageClasses/></AdminRoute>
            },
            {
                path: 'manage-users',
                element: <AdminRoute><ManageUsers/></AdminRoute>
            },

        // instructor routes
            
            {
                path: 'add-class',
                element:<InstructorRoute><AddClass/></InstructorRoute>
            },
            {
                path: 'my-classes',
                element:<InstructorRoute><MyClasses/></InstructorRoute>
            },
            {
                path: 'feedback',
                element: <InstructorRoute><Feedback/></InstructorRoute>
            }
        ]
        
    }

])

export default routes;
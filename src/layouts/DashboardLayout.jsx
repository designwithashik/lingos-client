import { Link, Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import useAuth from "../hooks/useAuth";
import useAdminVerify from "../hooks/useAdminVerify";
import useInstructorVerify from "../hooks/useInstructorVerify";
import NavigationBar from "../pages/Shared/NavigationBar";

const DashboardLayout = () => {
  const [isAdmin] = useAdminVerify()
  const [isInstructor] = useInstructorVerify()
  console.log('instructor', isInstructor)    
    return (
        <div>
           <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            <div className=" min-h-[calc(100vh-220px)]">
            <NavigationBar />

              <div className="mx-11"><Outlet /></div>
            </div>
                    <Footer/>
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
        
              <li><Link to='/dashboard/home'>{isAdmin? 'Admin':isInstructor?'Instructor':'Student'} Home</Link></li>
              {isAdmin ===true? <>
                <li><Link to='/dashboard/manage-classes'>Manage Classes</Link></li>
                <li><Link to='/dashboard/manage-users'>Manage Users</Link></li> </>
                : isInstructor === true? <>
                <li><Link to='/dashboard/add-class'>Add A Class</Link></li>
              </>: <>
              <li><Link to='/dashboard/selected-classes'>Selected Classes</Link></li>
                </>}
              
             
              

            
              
            
              <hr />
              <li><Link to='/'>Home</Link></li>
    <li><Link to='/instructors'>Instructors</Link></li>
    <li><Link to='/classes'>Classes</Link></li>
    </ul>
  
  </div>
</div> 
        </div>
    );
};

export default DashboardLayout;
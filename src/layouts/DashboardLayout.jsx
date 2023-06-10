import { Link, Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import useAuth from "../hooks/useAuth";
import useAdminVerify from "../hooks/useAdminVerify";
import useInstructorVerify from "../hooks/useInstructorVerify";

const DashboardLayout = () => {
  const [isAdmin] = useAdminVerify()
  const [isInstructor] = useInstructorVerify()
    const {setTheme, theme} = useAuth()
    const handleToggle = (e) => {
        if (e.target.checked) {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      };
    return (
        <div>
           <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <div className="m-11"><Outlet /></div>
                    <Footer/>
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
      <li><button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "light" ? false : true}
            />
            <img src={'https://solarsystem.nasa.gov/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBamRTIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8f58db6031cb325cfbaf366a330cf78148c0444a/Sun.png?disposition=inline'} alt="light" className="w-8 h-8 swap-on" />
            <img src={'https://media.istockphoto.com/id/1334613123/vector/moon-and-star-black-icon-of-moon-for-night-pictogram-of-crescent-and-star-logo-for-sleep-and.jpg?s=612x612&w=0&k=20&c=Gy6DGTiwY2lsGPXRr2f7kqPELZEUtG1MsSEce1BkPdo='} alt="dark" className="w-8 h-8 swap-off" />
          </label>
              </button></li>    
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
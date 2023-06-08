import { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const { user, logOut} = useAuth();
    console.log(user)
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
      );
    
      const handleToggle = (e) => {
        if (e.target.checked) {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      };
    
      useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
      }, [theme]);
    const navItems = <>
    
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/instructors'>Instructors</Link></li>
    <li><Link to='/Classes'>Classes</Link></li>
        
  </>
  

  const handleLogOut = () => {
    logOut()
  }
    
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">lingos</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    {user?  <> 
    <img className='w-11 rounded-box m-2' src={user?.photoURL} title={user?.displayName} alt='user' /> 
         
          <p onClick={handleLogOut} className="btn">Log Out</p>
          </>
: <p className="btn"><Link to='/login'>Login</Link></p>}
    <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "light" ? false : true}
            />
            <img src={'https://solarsystem.nasa.gov/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBamRTIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8f58db6031cb325cfbaf366a330cf78148c0444a/Sun.png?disposition=inline'} alt="light" className="w-8 h-8 swap-on" />
            <img src={'https://media.istockphoto.com/id/1334613123/vector/moon-and-star-black-icon-of-moon-for-night-pictogram-of-crescent-and-star-logo-for-sleep-and.jpg?s=612x612&w=0&k=20&c=Gy6DGTiwY2lsGPXRr2f7kqPELZEUtG1MsSEce1BkPdo='} alt="dark" className="w-8 h-8 swap-off" />
          </label>
        </button>       
  </div>
</div>
       
    );
};

export default NavigationBar;
import { useEffect, useState } from 'react'
import { themeChange } from 'theme-change'
const Home = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
      );
    
      // update state on toggle
      const handleToggle = (e) => {
        if (e.target.checked) {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      };
    
      // set theme state in localstorage on mount & also update localstorage on state change
      useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        // add custom data-theme attribute to html tag required to update theme using DaisyUI
        document.querySelector("html").setAttribute("data-theme", localTheme);
      }, [theme]);
    
    return (
        <div>
            <h2>Welcome to Lingos</h2>
            <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              // show toggle image based on localstorage theme
              checked={theme === "light" ? false : true}
            />
            {/* light theme sun image */}
            <img src={'https://solarsystem.nasa.gov/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBamRTIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8f58db6031cb325cfbaf366a330cf78148c0444a/Sun.png?disposition=inline'} alt="light" className="w-8 h-8 swap-on" />
            {/* dark theme moon image */}
            <img src={'https://media.istockphoto.com/id/1334613123/vector/moon-and-star-black-icon-of-moon-for-night-pictogram-of-crescent-and-star-logo-for-sleep-and.jpg?s=612x612&w=0&k=20&c=Gy6DGTiwY2lsGPXRr2f7kqPELZEUtG1MsSEce1BkPdo='} alt="dark" className="w-8 h-8 swap-off" />
          </label>
        </button>


        </div>
    );
};

export default Home;
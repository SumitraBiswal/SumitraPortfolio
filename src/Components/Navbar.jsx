import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMenuSharp } from "react-icons/io5";
import style from "../Style/navbar.module.css"



function Navbar() {
    const [sidebarOpen , setSidebarOpen]=useState(false);
    const[isMobile,setIsmobile]=useState(false);


    useEffect(()=>{
        function handleResize() {
            setIsmobile(window.innerWidth <= 850);{
                setSidebarOpen(false);
            }
        }
        handleResize();
        window.addEventListener("resize" , handleResize);
        return () => window.removeEventListener("resize", handleResize)
    },[]);

  return (
    <div className={style.navbarcontainer}>
        {/*logo*/}
        <NavLink
        to="/"
        className={style.sidebarlogo}
        onClick={()=>setSidebarOpen(false)}
        >
            
                 < img src="/portfollio/logo.jpeg" alt="logo" className={style.logoImg} />
               <span className={style.logoHightlight}>Portfollio</span>
              
            

        </NavLink>
        {!isMobile && (
            <ul className={style.navlinks}>
                <li>
                    <NavLink 
                    to='/'
                    end
                    className={({isactive})=>(isactive ? style.activeLink:"" )}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/about'
                    end
                    className={({isactive})=>(isactive ? style.activeLink:"" )}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/resume'
                    end
                    className={({isactive})=>(isactive ? style.activeLink:"" )}
                    >
                        resume
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/skill'
                    end
                    className={({isactive})=>(isactive ? style.activeLink:"" )}
                    >
                        Skilll
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/certificate'
                    end
                    className={({isactive})=>(isactive ? style.activeLink:"" )}
                    >
                        certificate
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/project'
                    end
                    className={({isactive})=>(isactive ? style.activeLink:"" )}
                    >
                        Project
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/contact'
                    end
                    className={({isactive})=>(isactive ? style.activeLink:"" )}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        )}
        {isMobile && (
            <button
                className={style.menuButton}
                onClick={()=> setSidebarOpen(true)}
                aria-label='Open menu'
            >
              <IoMenuSharp />
            </button>
        )}
        {sidebarOpen && (
            <>
            <div className={style.overlay}
            onClick={()=>setSidebarOpen(false)}></div>
            <nav className={style.sidebar}>
                <button className={style.closeBtn}
                onClick={()=>setSidebarOpen(false)}
                aria-label='close-menu'
                >❎</button>
                <ul className={style.sidebarNavlinks}>
                    <li>
                    <NavLink 
                    to='/'
                    end
                    className={({isactive})=>(isactive ? style.activeLink:"" )}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/about'
                    end
                    className={({isactive})=>(isactive ? style.activeLink:"" )}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/certificate'
                    end
                    className={({isactive})=>(isactive ? style.activeLink:"" )}
                    >
                        Certificate
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/project'
                    end
                    className={({isactive})=>(isactive ? style.activeLink:"" )}
                    >
                        Project
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/resume'
                    end
                    className={({isactive})=>(isactive ? style.activeLink:"" )}
                    >
                        Resume
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/skill'
                    end
                    className={({isactive})=>(isactive ? style.activeLink:"" )}
                    >
                        Skill
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/contact'
                    end
                    className={({isactive})=>(isactive ? style.activeLink:"" )}
                    >
                        Contact
                    </NavLink>
                </li>
                </ul>
            </nav>
            </>
        )}
      
    </div>
  )
}

export default Navbar
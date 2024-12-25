
import "./Nav.css"



import { Link } from "react-router-dom"

import MenuIcon from '@mui/icons-material/Menu';


import { useState } from "react";



const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
        <div className="nav-panel">
            <Link to = "/" className="nav-logo">
                <p>The</p>
                <p className='next'>Next Gen</p>
                <p className='show'>SHOW</p>
            </Link>

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
  <MenuIcon />
</div>

<nav>
  <div className={menuOpen ? "open" : ""}>
    <div className="nav-links">
      <Link to="/about">About</Link>
      <Link to="/events">Events</Link>
      <Link to="/Talents">Talents</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/faq">FAQ</Link>
    </div>
  </div>
</nav>


            

            <div className="button-link1">
                <button>Join Us</button>
            </div>
            

             
        </div>


       

        
    </>
  )
}

export default Nav

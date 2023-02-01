import React from 'react'
import  './Navbar.css'
import { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"
import image from '../../Assets/office1.jpg';
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
       navRef.current.classList.toggle("responsive_nav");
  }

  
     
  return (
    
    <div>

  <div className='land-page'>
          <img src={image} alt=""/>
          
        </div>

     
     <header>
			<h3>Website</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">About us</a>
				<a href="/#">Service</a>
				<a href="/#">Contact</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
 
      
     </div> 
   
        
    
  )
}
export default Navbar;


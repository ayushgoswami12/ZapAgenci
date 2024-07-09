// Header.jsx
// import React from 'react'; 


import Logo from '../assets/Zap.jpg';
import './Header.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <motion.div
       initial={{ opacity: 0, x: -10 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="mainHeader"
      >
      <Link to="/">

       <img src={Logo} alt="Logo" />
      </Link>
      
      </motion.div>

      <motion.div
 initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="intro"
      >
        <ul>
          <li>
          <Link to={"/"}>Home</Link> 
          </li>
          <li>
          <Link to={"/About"}>About</Link> 
          </li>
          <li> <Link to={"/SignIn"}>Sign In</Link> </li>
          <li id='cntc'>  <Link to={"/Contactus"}>Contact us </Link> </li>
        </ul>
      </motion.div>
    
    </div>
    
  );
}

export default Header;

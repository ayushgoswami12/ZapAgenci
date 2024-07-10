// import React from 'react'
import "./Footer.css"
import InstaLogo from "./Instagram.svg"
import WhatLogo from "./Whatsapp.svg"

function Footer() {
  return (
    <>
<div className="bg-black text-white p-4">
<footer className="flex gap-5">

    <div id="division" >
   <h1 className="text-3xl underline py-3">ZapAgenci.</h1> 
   <h1 className="text-xl">We are available in  </h1> 
   <h1 className="text-xl">Rajkot</h1> 
   <h1 className="text-xl">Mail : ZapAgenci@gmail.com</h1> 
   <h1 className="text-xl">Phone : 9408966332</h1> 


    </div>
    <div >
   <h1 className="text-3xl underline " >Social Media Platforms </h1> 
   <div className="flex m-3 gap-5">
   <a href="https://www.instagram.com/zap.agenci/" target="_blank">

    <img className="hover:cursor-pointer" src={InstaLogo}></img>
   </a>

   <a href="   https://wa.me/919408966332" target="_blank">

    <img className="hover:cursor-pointer" src={WhatLogo}></img>
    </a>
   </div>
    
  

    </div>
    
</footer>
</div>
    </>
  )
}

export default Footer

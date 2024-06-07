// import React from 'react'
import Header from "./Header.jsx"
import Hero from "./Hero.jsx"
import { Outlet } from "react-router-dom"
function HomePage() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Outlet></Outlet>
    </div>
  )
}

export default HomePage

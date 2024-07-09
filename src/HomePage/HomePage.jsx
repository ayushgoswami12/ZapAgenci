// import React from 'react'
import Digitalmarketing from "./Digitalmarketing.jsx"
import Header from "./Header.jsx"
import Hero from "./Hero.jsx"
import Services from "./Services.jsx"
import "./Hero.css"

function HomePage() {
  return (
    <>

    <div className="mainPage">
      <Header></Header>
      <Hero></Hero>
    </div>
    <Services></Services>
    <div className="whyDigital">

    <Digitalmarketing></Digitalmarketing>
    </div>
    </>

  )
}

export default HomePage

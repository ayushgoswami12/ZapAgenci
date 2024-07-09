// import React from 'react'
import Digitalmarketing from "./Digitalmarketing.jsx"
import Header from "./Header.jsx"
import Hero from "./Hero.jsx"
import Services from "./Services.jsx"

function HomePage() {
  return (
    <>

    <div className="mainPage">
      <Header></Header>
      <Hero></Hero>
    </div>
    <Services></Services>
    <Digitalmarketing></Digitalmarketing>
    </>

  )
}

export default HomePage

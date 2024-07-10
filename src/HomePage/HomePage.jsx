// import React from 'react'
import Digitalmarketing from "./Digitalmarketing.jsx"
import Header from "./Header.jsx"
import Hero from "./Hero.jsx"
import Services from "./Services.jsx"
import "./Hero.css"
import Testimonials from "./Testimonial.jsx"
import Footer from "./Footer.jsx"

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
    <Testimonials></Testimonials>
    <Footer></Footer>
    </>

  )
}

export default HomePage

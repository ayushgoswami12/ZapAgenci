import "./Services.css"

function ServicesProp (propshere){
return(
    <>
        <img src={propshere.img}></img>
        <h1 id="headingprops" className="propteries">{propshere.heading}</h1>
        <h2 className="propteries1">{propshere.description}</h2>
    </>
)
}

function Services() {
  return (
    <>
<div className="mainService">

    <div className="ServicePageHeading">
      <h1>Our Services </h1>
    </div>

    <div className="ProvidedServices">


    <div className="ServiceDetail">
    <ServicesProp 
    img = "https://i0.wp.com/www.graphic-design-institute.com/wp-content/uploads/2019/07/gdi-internal-blog-graphic-design-future-artificial-intelligence.jpg?fit=1199%2C800&ssl=1"
    heading = "SEO FRIENDLY"
    description = "This is me here"
    />
    </div>
    <div className="ServiceDetail">
    <ServicesProp 
    img = "https://i0.wp.com/www.graphic-design-institute.com/wp-content/uploads/2019/07/gdi-internal-blog-graphic-design-future-artificial-intelligence.jpg?fit=1199%2C800&ssl=1"
    heading = "SEO FRIENDLY"
    description = "This is me here "
    />
    </div>
    <div className="ServiceDetail">
    <ServicesProp 
    img = "https://i0.wp.com/www.graphic-design-institute.com/wp-content/uploads/2019/07/gdi-internal-blog-graphic-design-future-artificial-intelligence.jpg?fit=1199%2C800&ssl=1"
    heading = "SEO FRIENDLY  " 
    description = "Unlimited creativity: Generative AI is a great brainstorming tool. You can try new ideas and concepts faster than ever, so you can explore your wildest ideas "
    />
    </div>
    <div className="ServiceDetail">
    <ServicesProp 
    img = "https://i0.wp.com/www.graphic-design-institute.com/wp-content/uploads/2019/07/gdi-internal-blog-graphic-design-future-artificial-intelligence.jpg?fit=1199%2C800&ssl=1"
    heading = "SEO FRIENDLY DIGITAL " 
    description = "imply press "
    />
    </div>
    <div className="ServiceDetail">
    <ServicesProp 
    img = "https://i0.wp.com/www.graphic-design-institute.com/wp-content/uploads/2019/07/gdi-internal-blog-graphic-design-future-artificial-intelligence.jpg?fit=1199%2C800&ssl=1"
    heading = "SEO FRIENDLY " 
    description = "This is me here "
    />
    </div>
    <div className="ServiceDetail">
    <ServicesProp 
    img = "https://i0.wp.com/www.graphic-design-institute.com/wp-content/uploads/2019/07/gdi-internal-blog-graphic-design-future-artificial-intelligence.jpg?fit=1199%2C800&ssl=1"
    heading = "SEO FRIENDLY  " 
    description = "This is me here "
    />
    </div>
   
    </div>
</div>
    </>
  )
}

export default Services

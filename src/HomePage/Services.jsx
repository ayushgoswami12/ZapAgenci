import "./Services.css"
import Social from "../Pictures/Social.jpg"
import Brochure from "../Pictures/brochure.jpg"
import Sales from "../Pictures/sales.jpg"
import Discount from "../Pictures/discount.jpg"
import Spike from "../Pictures/spike.jpg"
import { motion } from 'framer-motion';

function ServicesProp(props) {
  return (
    <>
      <img className="imgServices" src={props.img} style={{ width: props.width }}></img>
      <h1 id="headingprops" className="propteries">{props.heading}</h1>
      <h2 className="propteries1">{props.description}</h2>
      <button>{props.button} </button>
    </>
  )
}

function Services() {
  return (
    <>
      <div className="mainService">
        <div className="ServicePageHeading">
          <h1>Our Services </h1>
          <h2 id="requirement">Click for Service Requirement Below</h2>
        </div>

        <div className="ProvidedServices">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            transition={{ duration: 1.5, delay: 0.1 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="ServiceDetail"
          >
            <ServicesProp 
              img="https://i0.wp.com/www.graphic-design-institute.com/wp-content/uploads/2019/07/gdi-internal-blog-graphic-design-future-artificial-intelligence.jpg?fit=1199%2C800&ssl=1"
              heading="Digital Marketing"
              description="This is me here"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.1 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="ServiceDetail"
          >
            <ServicesProp 
              img={Social}
              heading="Social Media Handling"
              description="We handle Social medias like Instagram, Facebook, WhatsApp. We will help you to grow your business through our expertise."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            transition={{ duration: 1.5, delay: 0.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="ServiceDetail"
          >
            <ServicesProp 
              img={Spike}
              heading="Business Growth"
              description="Unlimited creativity: Generative AI is a great brainstorming tool. You can try new ideas and concepts faster than ever, so you can explore your wildest ideas."
              width="19vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            transition={{ duration: 1.5, delay: 0.1 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="ServiceDetail"
          >
            <ServicesProp 
              img={Discount}
              heading="Discount"
              description="Simply press."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.1 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="ServiceDetail"
          >
            <ServicesProp 
              img={Brochure}
              heading="Brochure"
              description="We can make Brochure for your company."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            transition={{ duration: 1.5, delay: 0.1 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="ServiceDetail"
          >
            <ServicesProp 
              img={Sales}
              description="We also introduce sales to your business."
            />
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Services

import "./Services.css"
import Social from "../Pictures/Social.jpg"
import Brochure from "../Pictures/brochure.jpg"
import Sales from "../Pictures/sales.jpg"
import Discount from "../Pictures/discount.jpg"

import { motion } from 'framer-motion';

// function ServicesProp(props) {
//   return (
//     <>
//       <img className="imgServices" src={props.img} style={{ width: props.width }} alt="Service"></img>
//       <h1 id="headingprops" className="propteries">{props.heading}</h1>
//       <h2 className="propteries1">{props.description}</h2>
//       <button>{props.button} </button>
//     </>
//   )
// }

function Services() {
  return (
    <>
      <div className="mainService">
        <div className="ServicePageHeading pb-5">
          <h1>Our Services</h1>
          {/* <h2 id="requirement">Click for Service Requirement Below</h2> */}
        </div>

        <div className="flex flex-row flex-wrap gap-4 justify-center">




          <motion.div
            initial={{ opacity: 0, x: -10 }}
            transition={{ duration: 1.5, delay: 0.1 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="box">
            <img src={Social} alt="Description of image" className="box-image" />
            <h2 className="box-title">Digital Marketing </h2>
            <p className="box-description">This is a description of the box content. It can be as long or short as you like.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            transition={{ duration: 1.5, delay: 0.1 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="box">
            <img src={Brochure} alt="Description of image" className="box-image" />
            <h2 className="box-title">Brochure</h2>
            <p className="box-description">This is a description of the box content. It can be as long or short as you like.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            transition={{ duration: 1.5, delay: 0.1 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="box">
            <img src={Discount} alt="Description of image" className="box-image" />
            <h2 className="box-title">Discount</h2>
            <p className="box-description">This is a description of the box content. It can be as long or short as you like.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            transition={{ duration: 1.5, delay: 0.1 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="box">
            <img src={Sales} alt="Description of image" className="box-image" />
            <h2 className="box-title">Sales Management</h2>
            <p className="box-description">This is a description of the box content. It can be as long or short as you like.</p>
          </motion.div>

        </div>
      </div>

    </>
  )
}

export default Services;

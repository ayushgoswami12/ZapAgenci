import HeroLogo from "../assets/hero.jpg"
import { motion } from "framer-motion"
import './Header.css';



function Hero() {
  return (
    <section className="text-gray-400 bg-black body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <motion.div
         initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        whileInView={{ opacity: 1, x: 0 }}
         className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium  text-white" id="Hero_h1">
           Empowering Connections | <span className="text-pink-500">
              Igniting Growth
           </span>
            {/* <br className="hidden lg:inline-block" />  */}
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
          </p>
          
        </motion.div>
        
        <motion.div
         initial={{ opacity: 0, x: 10  , overflow:"hidden"}}
        transition={{ duration: 1.5, delay: 0.1 , }}
        whileInView={{ opacity: 1, x: 0  , overflow:"hidden"}}
         className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src={HeroLogo} />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

import Header from "../HomePage/Header"
import { motion } from 'framer-motion';
import "./About.css"


function About() {
  return (
    <>

    <div >
   <Header></Header>
   <section className="text-white body-font p-5">
      <div className="container px-5 py-24 mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
            transition={{ duration: 1.5, delay: 0.1 }}
            whileInView={{ opacity: 1, x: 0 }}
         className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-purple-700 tracking-widest">OUR TEAM</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            We  are the Team of ZapAgenci.
          </p>
        </motion.div>
        <motion.div
        
        initial={{ opacity: 0, x: -10 }}
            transition={{ duration: 1.5, delay: 0.1 }}
            whileInView={{ opacity: 1, x: 0 }}
         className="flex flex-wrap -m-4 " id="mainABOUT">
          <div className="p-4 lg:w-1/2">
            <div className="lg:items-center lg:justify-center lg:flex h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" />
              <div className="flex-grow sm:pl-8">
                <h2 id="names" className=" title-font font-medium text-lg text-purple-700">Ayush Goswami</h2>
                <h3 className="text-gray-500 mb-3">Web Developer</h3>
                <p className="mb-4">Currently Studying in LDRP .</p>
                
              </div>
            </div>
          </div>
         
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            transition={{ duration: 1.5, delay: 0.1 }}
            whileInView={{ opacity: 1, x: 0 }}
           className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/204x204" />
              <div className="flex-grow sm:pl-8">
                <h2 id="names" className="title-font font-medium text-lg text-purple-700">Jainam Shah </h2>
                <h3 className="text-gray-500 mb-3">Marketing </h3>
                <p className="mb-4">Persuing Expertise in Rajkot </p>
              
              </div>
            </div>
          </motion.div>
          <motion.div
          
          initial={{ opacity: 0, x: -10 }}
            transition={{ duration: 1.5, delay: 0.1 }}
            whileInView={{ opacity: 1, x: 0 }}
           className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/206x206" />
              <div className="flex-grow sm:pl-8">
                <h2 id="names" className="title-font font-medium text-lg text-purple-700">YashVardhan </h2>
                <h3 className="text-gray-500 mb-3">Designer</h3>
                <p className="mb-4">Persuing Expertise in Rajkot </p>
               
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
    </div>


   
    </>
  )
}

export default About

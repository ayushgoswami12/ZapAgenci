import Digital from "../Pictures/Digital.png"
import "./Digitalmarketing.css"
import { motion } from 'framer-motion';


function Digitalmarketing() {
  return (
    <div className="digitial_main flex pt-6">

      <motion.div


        className=" digital-h w-[48vw]  justify-center flex flex-col">

        <motion.h1
          initial={{ opacity: 0, x: -10 }}
          transition={{ duration: 1.5, delay: 0.1 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-3xl text-black font-bold p-2 paraofdigital">

          Why should you use Digital Marketing ?
        </motion.h1>
        <p className="p-2 paraofdigital">
          {/* <p className="text-lg pt-3 m-0 font-bold underline  text-black">Global Reach</p>   */}
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-lg pt-3 m-0 font-bold underline  text-black">Global Reach</motion.p>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            whileInView={{ opacity: 1, x: 0 }}
          >

            Digital marketing allows your business to reach a global audience effortlessly. Unlike traditional marketing, you can connect with potential customers from different parts of the world with just a few clicks. This expanded reach helps you tap into new markets and grow your brand beyond geographical boundaries.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -10 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-lg pt-3 m-0 font-bold underline  text-black">Cost-Effective</motion.p>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}>

            Digital marketing is more cost-effective compared to traditional marketing methods. With tools like social media, email marketing, and search engine optimization, you can achieve significant results with a lower budget. This means you get a higher return on investment, making your marketing efforts more efficient and affordable.
          </motion.p>

          <p className="text-lg pt-3 m-0 font-bold underline  text-black">Targeted Advertising</p>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            whileInView={{ opacity: 1, x: 0 }}>

            One of the biggest advantages of digital marketing is the ability to target specific demographics. You can tailor your campaigns to reach the right audience based on their age, location, interests, and online behavior. This precision ensures that your message resonates with those who are most likely to be interested in your products or services.
          </motion.p>



          <p className="text-lg pt-3 m-0 font-bold underline  text-black">Enhanced Engagement</p>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            whileInView={{ opacity: 1, x: 0 }}>

            Engage with your audience like never before through digital marketing. Social media platforms, blogs, and email newsletters enable you to interact with customers, answer their queries, and build a loyal community. This two-way communication fosters stronger relationships and boosts customer satisfaction.
          </motion.p>



          <p className="text-lg pt-3 m-0 font-bold underline  text-black">Boosts Brand Credibility</p>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            transition={{ duration: 1.5, delay: 0.9 }}
            whileInView={{ opacity: 1, x: 0 }}>

            Having a strong online presence enhances your brand credibility. Customers are more likely to trust businesses with an active digital footprint. Positive reviews, engaging content, and a professional website all contribute to building a reputable brand image.
          </motion.p>
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        whileInView={{ opacity: 1, x: 0 }}
        id="digital_img " className="flex items-center   md:w-1/2 w-5/6">

        <img src={Digital} alt="Error"></img>
      </motion.div>
    </div >
  )
}

export default Digitalmarketing

import "./Testimonial.css"
import { motion } from "framer-motion"

const Testimonials = () => {
    return (
        <>

            <motion.h1
                initial={{ opacity: 0, x: -10 }}
                transition={{ duration: 1.5, delay: 0.1 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-5xl p-4 text-center text-yellow-300 underline">TESTIMONIALS</motion.h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                transition={{ duration: 1.5, delay: 0.1 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://i.pinimg.com/736x/2d/54/76/2d5476736f17f1b2d7e55ea27deb03b5.jpg"
                                />
                                <p className="leading-relaxed text-white">
                                    Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 className="text-red-600 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                <p className="text-indigo-500">Senior Product Designer</p>
                            </motion.div>
                        </div>
                        <motion.div 
                        initial={{ opacity: 0, x: -10 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        whileInView={{ opacity: 1, x: 0 }}
                        className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84b00dfe8579a707b4074c91c5"
                                />
                                <p className="leading-relaxed text-white">
                                    Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 className="text-red-600 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
                                <p className="text-indigo-500">UI Developer</p>
                            </div>
                        </motion.div>
                        <motion.div
                        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        whileInView={{ opacity: 1, y: 0 }}
                         className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1CLgBTJuxK3OKCo-DPCY8sLCJjLFTPGsQQ&usqp=CAU"
                                />
                                <p className="leading-relaxed text-white">
                                    Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 className="text-red-600 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                                <p className="text-indigo-500">CTO</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonials;

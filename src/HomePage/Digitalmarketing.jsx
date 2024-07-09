import Digital from "../Pictures/Digital.png"
import "./Digitalmarketing.css"


function Digitalmarketing() {
  return (
    <div className="digitial_main flex pt-6">
      
      <div className=" digital-h w-[48vw]  justify-center flex flex-col">

        <h1 className="text-2xl text-black font-bold p-2">

          Why should you use Digital Marketing ?
        </h1>
        <p className="p-2">
           {/* <p className="text-lg pt-3 m-0 font-bold underline  text-black">Global Reach</p>   */}
           <p className="text-lg pt-3 m-0 font-bold underline  text-black">Global Reach</p> 
Digital marketing allows your business to reach a global audience effortlessly. Unlike traditional marketing, you can connect with potential customers from different parts of the world with just a few clicks. This expanded reach helps you tap into new markets and grow your brand beyond geographical boundaries.

<p className="text-lg pt-3 m-0 font-bold underline  text-black">Cost-Effective</p> 
Digital marketing is more cost-effective compared to traditional marketing methods. With tools like social media, email marketing, and search engine optimization, you can achieve significant results with a lower budget. This means you get a higher return on investment, making your marketing efforts more efficient and affordable.

<p className="text-lg pt-3 m-0 font-bold underline  text-black">Targeted Advertising</p> 
One of the biggest advantages of digital marketing is the ability to target specific demographics. You can tailor your campaigns to reach the right audience based on their age, location, interests, and online behavior. This precision ensures that your message resonates with those who are most likely to be interested in your products or services.



<p className="text-lg pt-3 m-0 font-bold underline  text-black">Enhanced Engagement</p> 

Engage with your audience like never before through digital marketing. Social media platforms, blogs, and email newsletters enable you to interact with customers, answer their queries, and build a loyal community. This two-way communication fosters stronger relationships and boosts customer satisfaction.



<p className="text-lg pt-3 m-0 font-bold underline  text-black">Boosts Brand Credibility</p> 

Having a strong online presence enhances your brand credibility. Customers are more likely to trust businesses with an active digital footprint. Positive reviews, engaging content, and a professional website all contribute to building a reputable brand image.
        </p>
      </div>
      <div id="digital_img " className="flex items-center   md:w-1/2 w-5/6">
 
        <img src={Digital} alt="Error"></img>
      </div>
    </div>
  )
}

export default Digitalmarketing

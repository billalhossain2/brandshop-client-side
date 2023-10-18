import "./Footer.css";
import { Link } from "react-router-dom";
import { BsTelephoneOutbound } from 'react-icons/bs';
import { FaFacebookF, FaInstagramSquare } from 'react-icons/fa';
import { BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi';
import { BsArrowRightShort } from 'react-icons/bs';
const Footer = () => {
  return (
    <footer>
       <div className="max-w-[1240px] mx-auto grid lg:grid-cols-4 md:gap-3 gap-10 md:grid-cols-2 grid-cols-1 px-2">
        {/* Column 1  */}
       <div className="space-y-5">
       <Link to="/">
      <div className="font-bold md:text-3xl">
        <span className="text-[#F5921D] me-2">Tech</span>
        <span>store</span>
      </div>
      </Link>
      <div className="flex items-center gap-2">
        <BsTelephoneOutbound className="text-5xl"></BsTelephoneOutbound>
        <div className="text-gray-700 space-y-1">
          <p>Got Questions ? Call us 24/7!</p>
          <h4 className="font-bold text-xl">Call Us: (888) 1234 56789</h4>
          <p>PO Box CT16122 Collins Street</p>
          <p>West, Victoria 8007,</p>
          <p>Australia.</p>
        </div>
      </div>
      <div className="flex gap-5 text-gray-400">
        <FaFacebookF className="social-icon"></FaFacebookF>
        <BiLogoTwitter className="social-icon"></BiLogoTwitter>
        <BiLogoLinkedin className="social-icon"></BiLogoLinkedin>
        <FaInstagramSquare className="social-icon"></FaInstagramSquare>
      </div>
       </div>

        {/* Column 2  */}
       <div className="text-gray-700">
        <h4 className="column-title mb-5">Find By Brands</h4>
        <p>Apple</p>
        <p>Samsung</p>
        <p>Sony</p>
        <p>Google</p>
        <p>Intel</p>
        <p>Dell</p>
       </div>

        {/* Column 3  */}
       <div className="text-gray-700">
       <h4 className="column-title mb-5">Customer Care</h4>
       <div className="space-y-1">
       <p>Contack Us</p>
       <p>Site Map</p>
       <p>Delivery Information</p>
       <p>Terms & Conditions</p>
       <p>Privacy Policy</p>
       </div>
       </div>

        {/* Column 4  */}
       <div className="text-gray-700">
        <h4 className="column-title mb-5">Sign Up To New Letter</h4>
        <p className="mb-5">Make sure that you never miss our interesting
           news by joining our newsletter program</p>
         <div className="relative">
        <BsArrowRightShort className="absolute right-3 top-2 text-4xl"></BsArrowRightShort>
        <input className="rounded-full p-3 w-full border-2 border-solid border-gray-300 outline-none" type="text" placeholder="Your E-Mail"/>
         </div>
       </div>
       </div>
    </footer>
  )
}

export default Footer
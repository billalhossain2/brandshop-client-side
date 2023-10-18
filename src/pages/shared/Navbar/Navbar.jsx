import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
const Navbar = () => {
  const [show, setShow] = useState(false)
  const handleShow = ()=>setShow(!show)
  const navList = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/add-product">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/my-cart">My Cart</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  return (
    <nav className="flex justify-between items-center px-2 mt-5 relative">
      <Link to="/">
      <div className="font-bold text-3xl">
        <span className="text-[#F5921D] me-2">Tech</span>
        <span>store</span>
      </div>
      </Link>
      <ul className="md:flex hidden md:flex-row flex-col gap-8 font-medium text-[18px]">
        {navList}
      </ul>

      {/* Mobile Menu  */}
      <div className="md:hidden font-medium text-[18px]">
        <FaBars onClick={handleShow} className={`${show && 'hidden'} text-4xl text-[#F5921D] border-2 border-solid border-[#F5921D]`}></FaBars>
        <RxCross1 onClick={handleShow} className={`${!show && 'hidden'} text-4xl text-[#F5921D] border-2 border-solid border-[#F5921D]`}></RxCross1>
      </div>
      {
        show && <ul className={`top-${show ? '[40px]' : '[-500px]'} duration-300 md:hidden absolute right-0 bg-zinc-900 w-full top-10 text-white py-2 pl-5 mobile-menu`}>
        {navList}
      </ul>
      }
    </nav>
  );
};

export default Navbar;

import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-bg secondary-text">
      <footer className="footer sm:footer-horizontal p-10 container mx-auto grid grid-cols-1 md:grid-cols-3">
        <aside>
          <Image src={logo} alt="Logo" width={100} height={100} />
          <p className="px-4">
            A modern summer eCommerce platform where users can explore and
            purchase seasonal products like sunglasses, summer outfits,
            skincare, beach accessories, and more. Users can browse products,
            view details, and place orders after authentication.
          </p>
        </aside>
        {/* contact info  */}
        <nav>
          <h6 className=" text-accent text-2xl font-bold">Contact Info</h6>
          <ul>
            <li>Email: support@suncart.com</li>
            <li>Phone: +880 1712-345678</li>
            <li>
              Address: House 12, Road 5, Dhanmondi, Dhaka 1209, Bangladesh
            </li>
            <li>Hours: Sat – Thu, 9:00 AM – 8:00 PM</li>
          </ul>
        </nav>
        {/* social links  */}
        <nav>
          <h6 className="text-accent text-2xl font-bold">Social Links</h6>
          <div className="flex justify-start items-center gap-3">
            <a className="text-2xl">
              <FaFacebookSquare />
            </a>
            <a className="text-2xl">
              <FaInstagram />
            </a>
            <a className="text-2xl">
              <FaYoutube />
            </a>
          </div>
        </nav>
      </footer>
      <div className="text-center p-6 text-base-300 text-xs border-t border-gray-700">
        <p>SunCart | All rights reserved | &copy; {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;

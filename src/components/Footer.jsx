import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray2 w-full  mx-auto ">
      <div className="container md:w-[80%] py-6 w-full mx-auto flex flex-col md:flex-row justify-between items-center text-white">
        {/* Left section: Logo and Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-2">DUBAI HILLS </h2>
          <p className="text-center">ESTATE</p>
        </div>

        {/* Right section: Contact Info */}
        <div className="mt-4 md:mt-0 text-center md:text-right">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center space-x-2">
              <FiPhone />
              <Link to={"tel:+971569461900" }className="hover:underline">
                +971 56 946 1900
              </Link>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <FiMail />
              <Link
                to={"mailto:info@dubai-hills-estate.ae"}
                className="underline"
              >
                Mail Us for more details
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section  */}
      </div>
      <div className="bg-gray3 text-gray-200 text-center  py-3 ">
        <p className="">
          Copyright © 2024 dubai-hills-estate.ae. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { Navbar } from "flowbite-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleContactClick = (e) => {
    e.preventDefault(); // This will prevent the default anchor behavior
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close the mobile menu if open
  };

  return (
    <Navbar fluid className="bg-white">
      <Navbar.Brand as={Link} to="/">
        <div className="flex flex-col text-center">
          <h1 className="md:text-4xl text-2xl font-semibold tracking-widest text-black uppercase">
            Dubai Hills
          </h1>
          <h2 className="text-lg md:text-sm tracking-wider text-gray-500 mt-2 uppercase">
            Estate
          </h2>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link to="/">
          <Navbar.Link>Home</Navbar.Link>
        </Link>
        {/* Updated the onClick to handle the scrolling */}
        <Navbar.Link className="cursor-pointer" onClick={handleContactClick}>Contact Us</Navbar.Link>
        <Navbar.Link>
          <div className="flex items-center">
            <Link to="tel:+971569461900" className="hover:underline">
              <FaPhoneAlt className="size-4" />
            </Link>
          </div>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

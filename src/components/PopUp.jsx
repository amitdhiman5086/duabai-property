import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "flowbite";

const PopUp = () => {
  // State management for the form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // State to manage popup visibility
  const [isOpen, setIsOpen] = useState(true); // Start open on page load

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle phone number change (specific to PhoneInput)
  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
    // Perform any further actions (e.g., send data to API)
  };

  // Close the popup
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed w-full h-full inset-0 bg-black bg-opacity-50 flex items-start pt-10 justify-center z-50">
          <div className="w-[80%] md:w-full  max-w-lg bg-gray-100 p-8 rounded-lg shadow-lg relative">
            {/* Close button */}
            <button
              className="absolute top-4  cursor-pointer right-4 text-gray-700"
              onClick={closeModal}
            >
              &#x2715; {/* Close (X) Icon */}
            </button>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Enquire Now & Book a VIP Tour
            </h2>

            <form className="w-full grid grid-flow-row" onSubmit={handleSubmit}>
              <div className="flex  flex-col  w-full items-center gap-4 mb-4">
                {/* Name Field */}
                <div className="w-full ">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-white text-black rounded-lg focus:outline-none"
                  />
                </div>
                {/* Email Field */}
                <div className="w-full ">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-white text-black rounded-lg focus:outline-none"
                  />
                </div>
                {/* Phone Field with Country Selector */}
                <div className="w-full ">
                  <PhoneInput
                    country={"ae"}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="Phone"
                    inputClass="!bg-white !text-black !w-full !rounded-lg  !h-full !py-3 !leading-none"
                    buttonClass="!bg-white !text-black !leading-none"
                    containerClass="w-full"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 bg-white text-black rounded-lg focus:outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;

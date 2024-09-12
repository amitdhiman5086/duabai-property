import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "flowbite";

const ContactForm = () => {
  // State management for the form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

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

  return (
    <div className="bg-gray1 flex items-center justify-center w-screen ">
      <div className="w-full bg-gray1 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          Enquire Now & Book a VIP Tour
        </h2>

        <form
          className="md:w-[80%] md:mx-auto w-full grid  grid-flow-row"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row  w-full items-center gap-4 mb-4">
            {/* Name Field */}
            <div className="w-full md:w-1/3">
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
            <div className="w-full md:w-1/3">
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
            <div className="mb-4 flex items-center mt-3 w-full md:w-1/3">
              <PhoneInput
                country={"ae"}
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder="Phone"
                inputClass="!bg-white !text-black !w-full !rounded-lg  !h-full !py-3 !leading-none"
                buttonClass="!bg-white !text-black  !leading-none"
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
            className="w-full py-3 bg-green1 text-white rounded-lg hover:bg-green-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

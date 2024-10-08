import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "flowbite";
import axios from "axios";
import { Alert } from "flowbite-react";

const PopUp = () => {
  // State management for the form
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [signupStatus, setSignupStatus] = useState(null);
  const [signupStatusError, setSignupStatusError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const [country, setCountry] = useState("ae");

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
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      if (
        !formData.firstName ||
        !formData.email ||
        !formData.phone ||
        formData.firstName == "" ||
        formData.email == "" ||
        formData.phone == ""
      ) {
        setSignupStatusError("All fileds are required.");
        setLoading(false);
        return;
      }
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        firstName: formData.firstName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("https://api.asquared.ae/api/contactUsUsers", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.firstName) {
            setSignupStatus("Thank you! We will contact you shortly");
          } else {
            setSignupStatusError(
              "Oops! Something went wrong. Please try again later"
            );
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setSignupStatusError(
            "Oops! Something went wrong. Please try again later"
          );
          setLoading(false);
        });
    } catch (error) {
      setSignupStatusError(
        "Oops! Something went wrong. Please try again later"
      );
      setLoading(false);
    }
    const final = setTimeout(() => {
      setSignupStatus(null);
      setSignupStatusError(null);
    }, 10000);
    setFormData({
      firstName: "",
      email: "",
      phone: "",
      message: "",
    });
  };
 
  // Close the popup
  const closeModal = () => {
    setIsOpen(false);
    setLoading(false);
  };

  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        setCountry(response.data.country_code.toLowerCase());
      } catch (error) {
        console.error("Error fetching IP location:", error);
      }
    };
    fetchCountryCode();
  }, []);

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
                    name="firstName"
                    placeholder="Name"
                    value={formData.firstName}
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
                    country={country}
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
                className="w-full py-3  bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
              {signupStatus && (
                <Alert className="mt-3" color="success">
                  {signupStatus}
                </Alert>
              )}
              {signupStatusError && (
                <Alert className="mt-3" color="failure">
                  {signupStatusError}
                </Alert>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;

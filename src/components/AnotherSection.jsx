import { Button } from "flowbite-react";
import React, { useState } from "react";
import PopUp from "./PopUp";

const AnotherSection = () => {
  const [isOpen, setIsOpen] = useState(false);
 

  const handleContactClick = (e) => {

    setIsOpen(()=>!isOpen); // Close the mobile menu if open
  };
  return (

    <div>
        <div className="w-screen">
        {isOpen && <PopUp/>}
      </div>
      <div className="my-5  mx-auto ">
        <div className="flex justify-end mb-6">
          <Button  onClick={handleContactClick}   gradientMonochrome="success">DOWNLOAD BROCHURE</Button>
        </div>
        <div className="flex gap-6 flex-col my-6 ">
          <p className="text-pretty">
            Emaar is introducing Emerald Hills Phase 3 at Dubai Hills Estate
            which presenting executive plots. The unique residential plots are
            near the Golf course where you can build your own Dream House. The
            residential area is the perfect choice for those who looking to
            build a home in the most prestigious neighborhood in Dubai.
          </p>
          <p>
            Each plot is unique and set amongst beautiful green surroundings.
            The size of each plot is quite good giving you enough space for
            outdoor landscaping options. It is going to be an amazing community,
            offering an incredible level of privacy and peace of mind.
          </p>
          <p>
            Dubai Hills Estate is one of the largest projects in the city and it
            is also one of the greenest spots. This is a 2,700-acre development
            which is located in Mohammed Bin Rashid City close to all main
            attractions of the city. The residential area allows designing your
            exquisite homes on the plots amidst lush green surroundings and
            unparalleled amenities
          </p>
        </div>
        <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold">Key Highlights</h1>
          <ul className="grid sm:grid-cols-2  grid-flow-row place-content-start space-y-2">
            <li className=" flex gap-2 items-center">
              {" "}
              <p className="bg-green1 h-2 w-2 rounded-full "></p> 18-hole
              championship golf course
            </li>
            <li className=" flex gap-2 items-center">
              {" "}
              <p className="bg-green1 h-2 w-2 rounded-full "></p>54 KM Bicycle
              Route
            </li>
            <li className=" flex gap-2 items-center">
              {" "}
              <p className="bg-green1 h-2 w-2 rounded-full "></p> 1,450,000
              Square Metres of Parks and Open Spaces
            </li>
            <li className=" flex gap-2 items-center">
              {" "}
              <p className="bg-green1 h-2 w-2 rounded-full "></p> 2 Proposed
              Metro Lines
            </li>
            <li className=" flex gap-2 items-center">
              {" "}
              <p className="bg-green1 h-2 w-2 rounded-full "></p> 282,000 Square
              Metre Regional Mall
            </li>
            <li className=" flex gap-2 items-center">
              {" "}
              <p className="bg-green1 h-2 w-2 rounded-full "></p> 3 Schools and
              3 Office Hubs
            </li>
          </ul>
        </div>
      </div>
    
    </div>
  );
};

export default AnotherSection;

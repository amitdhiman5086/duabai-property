import { Button } from "flowbite-react";
import React from "react";

const DubaiHillsInfo = () => {
  return (
    <>
      <div className="my-5 w-[80%] mx-auto font-light">
        <div className="flex justify-center mb-6">
          <Button gradientMonochrome="success">REGESTER YOUR INTERSET</Button>
        </div>
        <div className="flex gap-6 flex-col my-6">
          <div>
            <h1 className="text-5xl font-semibold text-center">
              Dubai Hills Estate by Emaar
            </h1>
            <h2 className="text-xl font-extralight text-center">
              {" "}
              Apartments, Townhouses and Villas
            </h2>
          </div>
          <p>
            Dubai Hills Estate, a master-planned community is a mixture of
            commercial and residential development which is located at the green
            heart of Dubai. A uniquely designed community set around the
            magnificent 18-hole championship golf course. This residential
            development is a unique development in itself that includes retail,
            leisure, and entertainment complex.
          </p>
          <p>
            Dubai Hills Estate is the first multi-purpose development which is
            an integral part of the Mohammed Bin Rashid City. This community is
            Ideally situated between Downtown Dubai and Dubai Marina. The
            community offers easy access to the city’s most popular districts
            and attractions by Al Khail Road. This residential community also
            provides more attractive features like a jogging track, art
            installations, fountains, water features, infinity pools and shaded
            reading gardens for the relaxation of residents. It is a perfect
            area which includes:
          </p>
        </div>
        <div>
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
    </>
  );
};

export default DubaiHillsInfo;

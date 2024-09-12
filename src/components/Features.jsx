import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <>
      <div className="mt-16 mb-8 w-[80%] mx-auto font-light">
        <div className="flex justify-center mb-6">
          <Link to={"/more-projects"}>
            <Button gradientMonochrome="success" className="uppercase">
              View More Projects
            </Button>
          </Link>
        </div>
        <div className="flex gap-6 flex-col my-6">
          <div>
            <h1 className="text-3xl font-semibold text-center uppercase">
              Features
            </h1>
          </div>
          <p>
            Emaar Dubai Hills Estate was established with lavish and
            aristocratic in mind. This gated community is exclusive in town-
            with the aim of it being even more exclusive than Emirates Hills.
            This heavily featured residential community by Emaar which provides
            sea front apartments and villas with its best creativity.
          </p>
        </div>
        <div>
          <ul className="grid sm:grid-cols-2  grid-flow-row place-content-start space-y-2">
            <li className=" flex gap-2 items-center">
              {" "}
              <p className="bg-green1 h-2 w-2 rounded-full "></p> Private Garage
            </li>
            <li className=" flex gap-2 items-center">
              {" "}
              <p className="bg-green1 h-2 w-2 rounded-full "></p>
              Indoor Games Room
            </li>
            <li className=" flex gap-2 items-center">
              {" "}
              <p className="bg-green1 h-2 w-2 rounded-full "></p>
              Common Garden
            </li>
            <li className=" flex gap-2 items-center">
              {" "}
              <p className="bg-green1 h-2 w-2 rounded-full "></p> Communal space
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

        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center">
          {/* Section1 */}
          <div className="flex flex-col mt-10 gap-2 w-full sm:w-1/2 px-4">
            <h1 className="text-center text-3xl font-semibold">MASTER PLAN</h1>
            <p className="font-light text-start">
              Dubai Hills Estate hosts a range of residential choices like
              waterfront villas and apartments. Those luxurious residential
              places are surrounded by plants, nearby sports areas for active
              lifestyle of residences, jogging and cycling tracks twisting
              through the development.
            </p>
            <img
              className="mx-auto w-full max-w-lg h-auto" // Adjust width and height as needed
              src="https://dubai-hills-estate.ae/images/masterplan.jpg"
              alt="MasterPlan"
            />
          </div>
          {/* Section 2 */}
          <div className="flex flex-col mt-10 gap-2 w-full sm:w-1/2 px-4">
            <h1 className="text-center text-3xl font-semibold">LOCATION</h1>
            <p className="font-light text-start">
              This master planned project of Emaar is located between Downtown
              Dubai and Dubai Marina. This beautiful sea facing residential area
              is bordered by Al Khail Road for the better communication to
              residences. Dubai Hills Estate provides easy access to the city’s
              most popular districts and social hubs.
            </p>
            <img
              className="mx-auto w-full  max-w-lg h-auto" // Adjust width and height as needed
              src="https://dubai-hills-estate.ae/images/masterplan.jpg" // Correct the source if it's different
              alt="Location"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;

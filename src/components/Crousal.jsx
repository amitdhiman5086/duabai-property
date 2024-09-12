// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Import necessary modules

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import simple from "./asael-pena-qM-I6vV_45E-unsplash.jpg";
// import simple2 from "./jeremy-bishop-K74UfSpaPes-unsplash.jpg";
// import { Card } from "flowbite-react";

// // Sample data
// const data = [

//   // Add more slides as needed
// ];

// const CustomCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="relative w-full h-screen">
//       {/* Background Image */}
//       <div
//         className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all ease-in-out duration-500"
//         style={{ backgroundImage: `url(${data[activeIndex].bgImage})` }}
//       ></div>

//       {/* Swiper */}
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation]} // Include modules in Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//         className="relative h-full flex items-center z-10 bg-red-500  "
//       >
//         {data.map((item) => (
//           <SwiperSlide key={item.id}>
//             {/* Front Card */}
//           <div className="">
//           <Card
//
//     >
//       <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//         Noteworthy technology acquisitions 2021
//       </h5>
//       <p className="font-normal text-gray-700 dark:text-gray-400">
//         Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
//       </p>
//     </Card>
//           </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default CustomCarousel;

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import simple from "./asael-pena-qM-I6vV_45E-unsplash.jpg";
import simple2 from "./jeremy-bishop-K74UfSpaPes-unsplash.jpg";
import { Button, Card } from "flowbite-react";

// Sample data
const data = [
  {
    id: 1,
    bgImage: simple, // Update with your actual images
    title: "Club Villas",
    location: "Dubai Hills Estate",
    bedrooms: "3 and 4",
    area: "2924-3456",
    paymentPlan: "55/45",
  },
  {
    id: 2,
    bgImage: simple2,
    title: "Park Villas",
    location: "Dubai Hills Estate",
    bedrooms: "4 and 5",
    area: "3400-4000",
    paymentPlan: "50/50",
  },
  {
    id: 3,
    bgImage: simple,
    title: "Park Villas",
    location: "Dubai Hills Estate",
    bedrooms: "4 and 5",
    area: "3400-4000",
    paymentPlan: "50/50",
  },
  {
    id: 4,
    bgImage: simple2,
    title: "Park Villas",
    location: "Dubai Hills Estate",
    bedrooms: "4 and 5",
    area: "3400-4000",
    paymentPlan: "50/50",
  },
];

const CustomCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-60 sm:h-screen">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all ease-in-out duration-500"
        style={{ backgroundImage: `url(${data[activeIndex].bgImage})` }}
      ></div>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="relative h-full z-10"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            {/* Front Card */}
            <div className="absolute inset-0 hidden  sm:flex justify-center items-center sm:mr-[40%] sm:mt-[40%] md:mr-[55%] md:mt-[10%]    ">
              <Card
                className="bg-transparent backdrop-blur-sm bg-opacity-90 p-6 rounded-lg shadow-lg max-w-md"
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                renderImage={() => (
                  <img
                    width={500}
                    height={500}
                    src={item.bgImage}
                    alt="image 1"
                  />
                )}
              >
                <h5 className="text-3xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h5>
                <p className="text-lg text-gray-700">{item.location}</p>
                <p className="text-lg text-gray-700">
                  Bedrooms: {item.bedrooms}
                </p>
                <p className="text-lg text-gray-700">Area: {item.area} sq.ft</p>
                <p className="text-lg text-gray-700">
                  Payment Plan: {item.paymentPlan}
                </p>
                <Button gradientMonochrome="success">More Info</Button>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomCarousel;


import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import simple from "./asael-pena-qM-I6vV_45E-unsplash.jpg";
import simple2 from "./dc19782b-8961-42b9-8e7c-d106c1ba9a65.jpeg";
import simple3 from "./56fb3257-893e-4912-8b05-386e900d5038.jpeg";
import simple4 from "./jeremy-bishop-K74UfSpaPes-unsplash.jpg";
import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";

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
    bgImage: simple3,
    title: "Park Villas",
    location: "Dubai Hills Estate",
    bedrooms: "4 and 5",
    area: "3400-4000",
    paymentPlan: "50/50",
  },
  {
    id: 4,
    bgImage: simple4,
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
        className="absolute top-0   left-0 w-full h-full bg-cover bg-center transition-all ease-in-out duration-500"
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
                className="bg-white bg-opacity-70 p-6 space-x-6 text-black font-semibold rounded-lg shadow-lg max-w-md"
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                renderImage={() => (
                  <img
                    width={250}
                    height={250}
                    src={item.bgImage}
                    alt="image 1"
                    className="rounded-lg object-cover"
                  />
                )}
              horizontal
              >
                <h5 className="text-3xl font-bold  mb-4">{item.title}</h5>
                <p className="text-lg ">{item.location}</p>
                <p className="text-lg ">Bedrooms: {item.bedrooms}</p>
                <p className="text-lg ">Area: {item.area} sq.ft</p>
                <p className="text-lg ">Payment Plan: {item.paymentPlan}</p>
                <Link to={"/offproperty/:propType/:propertyTitle"}>
                  <Button  gradientMonochrome="success">More Info</Button>
                </Link>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomCarousel;

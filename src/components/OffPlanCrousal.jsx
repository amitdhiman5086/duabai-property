import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// Sample data
const data = [
  {
    id: 1,
    bgImage:
      "https://images.unsplash.com/photo-1726175392409-f05854f24af0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://images.unsplash.com/photo-1726175392409-f05854f24af0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Club Villas",
    location: "Dubai Hills Estate",
    bedrooms: "3 and 4",
    area: "2924-3456",
    paymentPlan: "55/45",
  },
  {
    id: 2,
    bgImage:
      "https://images.unsplash.com/photo-1726182886720-9bcfa08da27a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://images.unsplash.com/photo-1726182886720-9bcfa08da27a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Park Villas",
    location: "Dubai Hills Estate",
    bedrooms: "4 and 5",
    area: "3400-4000",
    paymentPlan: "50/50",
  },
  {
    id: 3,
    bgImage:
      "https://dubai-hills-estate.ae/images/parkside-hills/amenities3.jpg",
    thumbnail:
      "https://dubai-hills-estate.ae/images/parkside-hills/amenities3.jpg",
    title: "Beach Villas",
    location: "Palm Jumeirah",
    bedrooms: "5 and 6",
    area: "4500-6000",
    paymentPlan: "60/40",
  },
];

const CustomCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-56 md:h-96 lg:h-screen mb-36  rounded-3xl relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full  bg-cover bg-center  transition-all ease-in-out duration-500 "
        style={{ backgroundImage: `url(${data[activeIndex].bgImage})` }}
      ></div>

      {/* Overlay to darken background for text visibility */}
      <div className=" inset-0 bg-black bg-opacity-50 "></div>

      {/* Swiper */}
      <div className="relative z-10 h-full ">
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
          className="h-full"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              {/* Front Card with information */}
              <div></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail List */}
      <div className=" bottom-0 left-0 w-full z-10 p-4 flex justify-center space-x-4 ">
        {data.map((item, index) => (
          <img
            key={item.id}
            src={item.thumbnail}
            alt={item.title}
            className={`w-16 h-16 sm:w-24 sm:h-24 object-cover cursor-pointer transition-transform duration-300 rounded ${
              activeIndex === index
                ? "transform scale-110 border-2 border-black"
                : ""
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;

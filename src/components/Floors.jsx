import React, { useState } from "react";

const floorPlans = {
  all: [
    {
      id: 1,
      image: "https://dubai-hills-estate.ae/images/maple/floor-plan/3-Bedrooms-Unit-2M-4-Bedrooms-Unit-2E-Type-2-2462-SqFt.jpg", // Replace with actual image URL
      title: "3 Bedrooms Unit 2M-4 Bedrooms Unit 2E Type 2 2462 SqFt",
    },
    {
      id: 2,
      image: "https://dubai-hills-estate.ae/images/maple/floor-plan/3-Bedrooms-Unit-2M-Type-2-2,228-SqFt.jpg", // Replace with actual image URL
      title: "3 Bedrooms Unit 2M Type 2 2,228 SqFt",
    },
    {
      id: 3,
      image: "https://dubai-hills-estate.ae/images/maple/floor-plan/4-Bedrooms-Unit-2E-Type-2-2462-SqFt.jpg", // Replace with actual image URL
      title: "4 Bedrooms Unit 2E Type 2 2462 SqFt",
    },
    {
      id: 4,
      image: "https://dubai-hills-estate.ae/images/maple/floor-plan/4-Bedrooms-Unit-3M-Type-3-2387-SqFt.jpg", // Replace with actual image URL
      title: "4 Bedrooms Unit 3M Type 3 2387 SqFt",
    },
    {
      id: 5,
      image: "https://dubai-hills-estate.ae/images/maple/floor-plan/4-Bedrooms-Unit-3M-5-Bedrooms-Unit-3E-Type-3-2700-SqFt.jpg", // Replace with actual image URL
      title: "4 Bedrooms Unit 3M 5 Bedrooms Unit 3E Type 3 2700 SqFt",
    },
  ],
  threeBedrooms: [
    {
      id: 1,
      image: "https://dubai-hills-estate.ae/images/maple/floor-plan/4-Bedrooms-Unit-3M-5-Bedrooms-Unit-3E-Type-3-2700-SqFt.jpg", // Replace with actual image URL
      title: "3 Bedrooms Unit 2M-4 Bedrooms Unit 2E Type 2 2462 SqFt",
    },
    {
      id: 2,
      image: "https://dubai-hills-estate.ae/images/maple/floor-plan/4-Bedrooms-Unit-3M-5-Bedrooms-Unit-3E-Type-3-2700-SqFt.jpg", // Replace with actual image URL
      title: "3 Bedrooms Unit 2M Type 2 2,228 SqFt",
    },
  ],
  fourBedrooms: [
    {
      id: 3,
      image: "https://dubai-hills-estate.ae/images/maple/floor-plan/4-Bedrooms-Unit-3M-5-Bedrooms-Unit-3E-Type-3-2700-SqFt.jpg", // Replace with actual image URL
      title: "4 Bedrooms Unit 2E Type 2 2462 SqFt",
    },
    {
      id: 4,
      image: "https://dubai-hills-estate.ae/images/maple/floor-plan/4-Bedrooms-Unit-3M-5-Bedrooms-Unit-3E-Type-3-2700-SqFt.jpg", // Replace with actual image URL
      title: "4 Bedrooms Unit 3M Type 3 2387 SqFt",
    },
  ],
  fiveBedrooms: [
    {
      id: 5,
      image: "https://dubai-hills-estate.ae/images/maple/floor-plan/4-Bedrooms-Unit-3M-5-Bedrooms-Unit-3E-Type-3-2700-SqFt.jpg", // Replace with actual image URL
      title: "5 Bedrooms Unit 3E Type 3 2700 SqFt",
    },
  ],
};

const FloorPlans = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto py-8">
      {/* Heading */}
      <h2 className="text-3xl font-semibold mb-4 text-start">FLOOR PLANS</h2>
      <p className="text-start mb-8">
        Emaar Maple townhouses provide the best living that a well-planned home includes. The
        architecture of every townhouse is designed with very fine detailing. Interior has innovation,
        lights, and creativity.
      </p>

      {/* Category Tabs */}
      <div className="flex md:flex-row flex-col gap-2 md:gap-0 justify-center mb-8">
        <button
          className={`px-4 py-2 mx-2 rounded ${
            selectedCategory === "all" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"
          } transition-all duration-300`}
          onClick={() => handleCategoryChange("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded ${
            selectedCategory === "threeBedrooms" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"
          } transition-all duration-300`}
          onClick={() => handleCategoryChange("threeBedrooms")}
        >
          Three Bedrooms
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded ${
            selectedCategory === "fourBedrooms" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"
          } transition-all duration-300`}
          onClick={() => handleCategoryChange("fourBedrooms")}
        >
          Four Bedrooms
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded ${
            selectedCategory === "fiveBedrooms" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"
          } transition-all duration-300`}
          onClick={() => handleCategoryChange("fiveBedrooms")}
        >
          Five Bedrooms
        </button>
      </div>

      {/* Floor Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {floorPlans[selectedCategory].map((plan) => (
          <div
            key={plan.id}
            className="flex flex-col items-center bg-white shadow-lg p-4 rounded-md transition-transform duration-300 hover:scale-105"
          >
            <img
              src={plan.image}
              alt={plan.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{plan.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloorPlans;

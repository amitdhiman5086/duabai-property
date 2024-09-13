const PaymentPlan = () => {
  const payments = [
    { percentage: "5%", description: "Down Payment" },
    { percentage: "5%", description: "Within One Month From Booking" },
    { percentage: "10%", description: "Within Two Months From Booking" },
    { percentage: "10%", description: "Within 12 Months From Booking" },
    { percentage: "10%", description: "Every 6 Months From September 2020" },
    { percentage: "20%", description: "Within 48 Months From Booking" },
  ];

  return (
    <div className="w-full flex flex-col">
      <div className="py-8">
        <h2 className="text-3xl font-semibold mb-6 text-start">PAYMENT PLAN</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4 lg:px-0">
          {payments.map((payment, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-green-500 text-3xl font-semibold mb-2">
                {payment.percentage}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {payment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-10 gap-2 w-full  ">
        <h1 className="text-start text-3xl font-semibold">LOCATION</h1>
        <p className="font-light text-start">
          Dubai Hills Estate hosts a range of residential choices like
          waterfront villas and apartments. Those luxurious residential places
          are surrounded by plants, nearby sports areas for active lifestyle of
          residences, jogging and cycling tracks twisting through the
          development.
        </p>
        <img
          className="mx-auto w-full  h-auto" // Adjust width and height as needed
          src="https://dubai-hills-estate.ae/images/parkside-hills/amenities3.jpg"
          alt="MasterPlan"
        />
      </div>
      <div className="flex flex-col mt-10 gap-2 w-full  ">
        <h1 className="text-start text-3xl font-semibold">MASTER PLAN</h1>
        <p className="font-light text-start">
          Dubai Hills Estate hosts a range of residential choices like
          waterfront villas and apartments. Those luxurious residential places
          are surrounded by plants, nearby sports areas for active lifestyle of
          residences, jogging and cycling tracks twisting through the
          development.
        </p>
        <img
          className="mx-auto w-full  h-auto" // Adjust width and height as needed
          src="https://dubai-hills-estate.ae/images/masterplan.jpg"
          alt="MasterPlan"
        />
      </div>
    </div>
  );
};

export default PaymentPlan;

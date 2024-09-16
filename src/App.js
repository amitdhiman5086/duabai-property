import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactForm from "./components/ContactUs";
import { useEffect, useState } from "react";
import PopUp from "./components/PopUp";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop component

function App() {
  const [isPopUp, setPopUp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPopUp(true);
    }, 7000);
  }, []);

  return (
    <div className="flex w-screen flex-col min-h-screen justify-between">
      {/* ScrollToTop Component */}
      <ScrollToTop />

      {isPopUp && <PopUp />}

      {/* Update sticky positioning */}
      <div className="  w-full sticky top-0 z-40"> {/* Updated z-index and removed md:w-[80%] */}
        <div className="bg-white px-[10%] shadow-lg">
        <Header />
        </div>
      </div>

      <div className="mb-auto w-full ">
        <Outlet />
      </div>

      <div>
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}

export default App;


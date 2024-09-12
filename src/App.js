import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactForm from "./components/ContactUs";

function App() {
  return (
    <div className=" flex  w-screen  flex-col min-h-screen justify-between overflow-x-hidden">
      <div className="sticky  md:w-[80%] md:mx-auto top-0 z-10 ">
        <Header />
      </div>
      <div className="mb-auto   w-full z-0">
        <Outlet />
      </div>
      <div className="">
        <ContactForm />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;

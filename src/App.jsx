import Contact from "./components/Contact";
import Feature from "./components/Feature";
import FeatureDisc from "./components/FeatureDisc";
import Hero from "./components/Hero";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <div className="flex flex-col items-center text-white bg-neutral-900"></div>
      <Footer />
    </>
  );
}

export default App;

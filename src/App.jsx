// <<<<<<< HEAD
import Home from "./pages/Home.jsx";
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from "react-router-dom";


function App() {
  return (
    
    <div className="flex flex-col items-center text-white ">
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>

  );
}

export default App;

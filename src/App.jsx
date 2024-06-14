import "./index.css";
import { Analytics } from "@vercel/analytics/react";
import bg from "./assets/bg.png";
import grid_bg from "./assets/grid_bg.png";
import Hero from "./pages/Hero";
import Objective from "./pages/Objective";
import arrow from "./assets/arrow.png";
import Navbar from "./components/Navbar";
import PrimaryServices from "./pages/PrimaryServices";
import ServiceExtension from "./pages/ExtensionService";
import FeaturedWorks from "./pages/FeaturedWorks";

function App() {
 return (
  <>
   <Navbar />
   <div
    style={{
     backgroundImage: `url(${bg})`,
     backgroundSize: "cover",
     backgroundPosition: "center",
     backgroundRepeat: "no-repeat",
     height: "100vh",
     width: "100%",
    }}
   >
    <Hero />
    <div className="flex justify-center items-center">
     <img
      src={arrow}
      alt="Arrow"
      className="absolute bottom-0 animate-bounce w-10 h-10"
     />
    </div>
   </div>
   <Objective />
   <PrimaryServices />
   <ServiceExtension />
   <div
    style={{
     backgroundImage: `url(${grid_bg})`,
     backgroundSize: "cover",
     backgroundPosition: "center",
     backgroundRepeat: "repeat",
     height: "auto",
     width: "100%",
    }}
   >
    <FeaturedWorks />
   </div>
   <Analytics />
  </>
 );
}

export default App;

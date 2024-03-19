import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Slider from "./components/Slider";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Contact from "../../pages/Contact";
import Doctors from "./components/Doctors";
import NumberCounter from "./components/counter";
import Footer from "./components/Footer";
import SliderEvents from "../../pages/Events";
import EventsText from "./components/EventsText";
import Events from "../../pages/Events";


export default function Home() {
  return (
    <main >
     
      <Header/>
      <Navbar/>
      <Slider/>
      <AboutUs/>
      <Services/>
      <Doctors/>
      <EventsText/>
      <Events/>
     
      <NumberCounter/>
      <Footer/>
    
     
      
    
      
    </main>
  );
}

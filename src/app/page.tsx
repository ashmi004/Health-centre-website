// pages/index.tsx
"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import EventsText from "./components/EventsText";
import Events from "../../pages/Events";
import Accordion from "./components/Accordion";
import Footer from "./components/Footer";
import UserInfo from "./components/UserInfo";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* <UserInfo/> */}
      <Slider />
      <AboutUs />
      <Services />
      <Doctors />
      <EventsText />
      <Events />
      <Accordion />
     
      <Footer />
    </main>
  );
}

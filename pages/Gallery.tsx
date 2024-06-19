import React from "react";
import GalleryCard from "../src/app/components/GalleryCard";
import 'tailwindcss/tailwind.css';
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";


const Gallery = () => {
  // Array of image paths
  const images = [
    "/banner-1.jpg",
    "/banner-3.jpg",
    "/img3.jpg",
    "/img5.jpeg",
    "/img4.jpeg",
    "/img1.jpeg",
    "/ambu.jpeg",
    "/hc1.png",
    // Add more images as needed
  ];

  // Function to chunk the array into groups of three
  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Chunk the images array into groups of three
  const imageRows = chunkArray(images, 3);

  return (
    <div
      id="services"
      className="w-full mx-auto  max-w-[1440px]"
    >
      {/* Categories */}
      <Header/>
      <Navbar/>
      <div
        className="secMenu mt-8"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
        data-aos="fade-up"
      >
        <ul className="flex" style={{ listStyle: "none", padding: 0 }}>
          <li 
            style={{
              marginRight: "3rem",
              cursor: "pointer"
            }}
            className="active hover:text-purple-800"
          >
            Physiotherapy
          </li>
          <li
            style={{
              marginRight: "3rem",
              cursor: "pointer"
            }}
            className="active hover:text-purple-800"
          >
            Pharmacy
          </li>
          <li
            style={{
              marginRight: "3rem",
              cursor: "pointer"
            }}
            className="active hover:text-purple-800"
          >
             Vaccination
          </li>
          <li
            style={{
              marginRight: "3rem",
              cursor: "pointer"
            }}
            className="active hover:text-purple-800"
          >
            Ambulance
          </li>
          <li
            style={{
              marginRight: "3rem",
              cursor: "pointer"
            }}
            className="active hover:text-purple-800"
          >
            Dental
          </li>
          <li
            style={{
              marginRight: "3rem",
              cursor: "pointer"
            }}
            className="active hover:text-purple-800"
          >
            Emergency
          </li>
          <li
            style={{
              marginRight: "3rem",
              cursor: "pointer"
            }}
            className="active hover:text-purple-800"
          >
            Donation
          </li>
        
          
        </ul>
      </div>

      {/* Services Cards */}
      <div className="shadow-sm" style={{ marginTop: "1rem" }}>
        {imageRows.map((row, index) => (
          <div key={index} className="flex justify-between p-4">
            {row.map((image, i) => (
              <GalleryCard key={i} icon={image} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

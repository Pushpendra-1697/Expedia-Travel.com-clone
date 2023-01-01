import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./Carousel.module.css";

const slideImages = [
  {
    url: "https://a.travel-assets.com/travel-assets-manager/cmct-5183/US-CA-MX-HP-Editorial-2up-457x257.jpg",
  },
  {
    url: "https://a.travel-assets.com/travel-assets-manager/ceorg-2118/New-HP-Hero-D-928x398.jpg",
  },
  {
    url: "https://a.travel-assets.com/travel-assets-manager/ceorg-2165/US-HP-Edi-2UP-457x257.jpg",
  },
  {
    url: "https://a.travel-assets.com/travel-assets-manager/ceorg-2084/POSa-HP-Edi-3UP-384x256.jpg",
  },
  {
    url: "https://a.travel-assets.com/travel-assets-manager/cmct-5255/POSa-HP-Hero-D-928x398.jpg",
  },
];


const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};
const Carousel1 = () => {
  return (
    <div className={styles.slidecontainer}>
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div className={styles.eachslide} key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Carousel1;

import React, { useRef, useState, useEffect } from "react";
import styles from "../../../../styles/Home.module.scss";
import { gsap } from "gsap";

const carouselItem = [
  "/img/dulcesantafe.jpeg",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "/img/dulcesantafe.jpeg",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
];

const CarouselLocation = () => {
  const carouselRef = useRef();
  const [carouselActive, setCarouselActive] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCarouselActive((prev) => (prev + 1) % carouselItem.length);
    }, 3000);
  }, []);

  return (
    <div className={styles.carouselLocation} ref={carouselRef}>
      <div className={styles.carouselInner}>
        <div className={styles.carouselItem}>
          <img className="d-block w-100" src={carouselItem[carouselActive]} alt="First slide" />
        </div>
      </div>
    </div>
  );
};

export default CarouselLocation;

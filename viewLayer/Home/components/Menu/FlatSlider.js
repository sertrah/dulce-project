import React, { useRef } from "react";
import style from "../../../../styles/Home.module.scss";
import { gsap } from "gsap";

const FlatSlider = ({ data }) => {
  const [active, setActive] = React.useState(0);
  const box1 = useRef(null);
  const slideDuration = 1;

  const box2 = useRef(null);
  const box3 = useRef(null);
  const [datt, setDatt] = React.useState(data);
  React.useEffect(() => {
    setInterval(() => {
      setDatt((prev) => [...prev.slice(1), prev[0]]);
      gsap.to(box1.current, {
        xPercent: "-130",
        duration: slideDuration,
        startAt: { xPercent: "-40" },
      });
      gsap.to(box2.current, {
        xPercent: "-40",
        duration: slideDuration,
        startAt: { xPercent: "50" },
      });
      gsap.to(box3.current, {
        xPercent: "50",
        duration: slideDuration,
        startAt: { xPercent: "90" },
      });
    }, 5500);
  }, [data]);

  const setRef = (position) => (ref) => {
    if (position === 0) {
      box1.current = ref;
    }
    if (position === 1) {
      box2.current = ref;
    }
    if (position === 2) {
      box3.current = ref;
    }
  };

  return (
    <div className={style.slider}>
      {datt.map((item, index) => {
        return (
          <div key={index} className={style.sliderItem} ref={setRef(index)}>
            <img src={item.image} alt={item.title} style={{ width: 240 }} />
          </div>
        );
      })}
    </div>
  );
};

export default FlatSlider;

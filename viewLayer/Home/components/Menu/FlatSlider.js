import React, { useRef, useMemo, memo } from "react";
import Button from "@material-ui/core/Button";

import style from "../../../../styles/Home.module.scss";
import { gsap } from "gsap";

const Card = ({ title }) => {
  return (
    <div className={style.menu_card}>
      <div className={style.menu_image}> </div>
      <h2 className={style.menu_title}>
        <span className={style.menu_title_subtitle}>Antojate </span>
        {title}
      </h2>
      <Button size="large" variant="contained" className={style.menu_btn}>
        probar
      </Button>
    </div>
  );
};
const CardMemorized = memo(Card);

const FlatSlider = ({ data }) => {
  const box1 = useRef(null);
  const slideDuration = 1;
  const cardItems = useMemo(
    () => [
      {
        title: "BRUNCH",
        image:
          "https://images.unsplash.com/photo-1514589868-e9e8d8b9e8a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      },
      {
        title: "POSTRES",
        image:
          "https://images.unsplash.com/photo-1514589868-e9e8d8b9e8a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      },
      {
        title: "TORTAS",
        image:
          "https://images.unsplash.com/photo-1514589868-e9e8d8b9e8a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      }
    ],
    []
  );
  const box2 = useRef(null);
  const box3 = useRef(null);
  const [datt, setDatt] = React.useState(cardItems);
  React.useEffect(() => {
    gsap.to(box1.current, {
      xPercent: "-155",
      duration: slideDuration,
      scale: 0.95,
      startAt: { xPercent: "-50", scale: 1 },
    });
    gsap.to(box2.current, {
      xPercent: "-50",
      scale: 1,
      duration: slideDuration,
      startAt: { xPercent: "55", scale: 0.95},
    });
    gsap.to(box3.current, {
      xPercent: "55",
      duration: slideDuration,
      scale: 0.95,
      startAt: { xPercent: "90", scale: 0.95},
    });
    setInterval(() => {
      setDatt((prev) => [...prev.slice(1), prev[0]]);
      gsap.to(box1.current, {
        xPercent: "-155",
        duration: slideDuration,
        scale: 0.95,
        startAt: { xPercent: "-50", scale: 1 },
      });
      gsap.to(box2.current, {
        xPercent: "-50",
        scale: 1,
        duration: slideDuration,
        startAt: { xPercent: "55", scale: 0.95},
      });
      gsap.to(box3.current, {
        xPercent: "55",
        duration: slideDuration,
        scale: 0.95,
        startAt: { xPercent: "90", scale: 0.95},
      });
    }, 4000);
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
      {datt.map((item, index) => (
        <div key={index} ref={setRef(index)} className={style.sliderItem}>
          <CardMemorized key={`card-${index}`} {...item} />
        </div>
      ))}
    </div>
  );
};

export default FlatSlider;

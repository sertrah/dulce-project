import { useEffect, useRef, forwardRef } from "react";
import { gsap } from "gsap";

const Box = forwardRef(({ children }, ref) => {
  return (
    <div className="box" style={{ width: 300, height: 500, backgroundColor: "#ccc" }} ref={ref}>
      {children}
    </div>
  );
});

const slideDelay = 1.5;
const slideDuration = 4;

const Prueba = () => {
  const box1 = useRef();
  const box2 = useRef();
  const boxG = useRef();

  useEffect(() => {
    gsap.to(box1.current, {
      xPercent: "-=300",
      duration: slideDuration,
      startAt: { xPercent: "200" },
      repeat: -1,
      repeatDelay: 0,
      delay: 0,
    });
     gsap.to(box2.current, {
      xPercent: "-=350",
      duration: slideDuration,
      startAt: { xPercent: "150" },
      repeat: -1,
      repeatDelay: 0,
      delay: slideDelay,
    });
  }, []);

  return (
    <div style={{display: "inline-flex"}} ref={boxG}>
      <Box ref={box1}>Box 1</Box>
      <Box  ref={box2}>Box 2</Box>
    </div>
  );
};

export default Prueba;

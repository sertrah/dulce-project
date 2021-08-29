import { useState, useEffect, useMemo, useRef, memo} from "react";

import styles from "../../../../styles/Home.module.scss";
import Button from "@material-ui/core/Button";
import TitleWithIcon from "../../../../components/TitleWithIcon";
import classnames from 'classnames';

const cardItems = [
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
  },
];

const Card = ({ title }) => {
  console.log("title");
  return (
    <div className={styles.menu_card}>
      <div className={styles.menu_image}> </div>
      <h2 className={styles.menu_title}>
        <span className={styles.menu_title_subtitle}>Antojate </span>
        {title}
      </h2>
      <Button size="large" variant="contained" className={styles.menu_btn}>
        probar
      </Button>
    </div>
  )
};
const CardMemorized = memo(Card);
const width = 1125; // EL frame que ve el usuario

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState({value: 0, isPositive: true});
  const [position, setPosition] = useState(0);

  const [cardFrame, setCardFrame] = useState(0); // EL frame la posicion de donde empieza el menu
  const speed = 1000;
  const requestRef = useRef()


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
      },
      {
        title: "BRUNCH",
        image:
          "https://images.unsplash.com/photo-1514589868-e9e8d8b9e8a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      },
    ],
    []
  );

  useEffect(() => {
    // CODIGO A EJECUTAR CUANDO SE EJECUTE EL EFFECT
    // Cuando sea el primer ejecuto el código
    // Cuando se cambie el estado del componente
     /* const intervalId = setInterval(() => {
      setPosition((prev) => {
        const current = prev - 1;
        const getPosition = (current % width);
        divRef0.current.style.left = `${getPosition + 0}px`;
        divRef1.current.style.left = `${getPosition + 375}px`;
        divRef2.current.style.left = `${getPosition + 750}px`;
        divRef3.current.style.left = `${getPosition + 1125}px`;
        return current;
      });
    }, 20);
     return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };  */
  }, []);

  const animateCards = () => { 
    setCardFrame((prev) => {
      const current = prev - 1;
      const getPosition = (current * 3)  % width ;
      divRef0.current.style.left = `${getPosition + 0}px`;
      divRef1.current.style.left = `${getPosition + 375}px`;
      divRef2.current.style.left = `${getPosition + 750}px`;
      divRef3.current.style.left = `${getPosition + 1125}px`;
      debugger
      return current;
    });
    
    requestRef.current = requestAnimationFrame(animateCards);
  }

  const divRef0 = useRef(null)
  const divRef1 = useRef(null)
  const divRef2 = useRef(null)
  const divRef3 = useRef(null)
  useEffect(() => { 
     /* requestRef.current = requestAnimationFrame(animateCards);
   return () => cancelAnimationFrame(requestRef.current);  */
/*     
const getPosition = (0 * 3)  % width ;
   divRef0.current.style.left = `${getPosition + 0}px`;
   divRef1.current.style.left = `${getPosition + 375}px`;
   divRef2.current.style.left = `${getPosition + 750}px`; */
 } , []);
  const setRef = (index)=> (ref) => {
    if(index === 0) {
      divRef0.current = ref;
    }
    if(index === 1) {
      divRef1.current = ref;
    }
    if(index === 2) {
      divRef2.current = ref;
    }
    if(index === 3) {
      divRef3.current = ref;
    }
  }
  return (
    <>
      <section className={styles.menu}>
        <TitleWithIcon>Nuestros FAVORITOS </TitleWithIcon>
        <div className={styles.carousel}>
          <div className={styles.carousel_inner} >
            {cardItems.map((item, index) => (
              <div key={index} ref={setRef(index)}  className={classnames(styles.carousel_item, activeIndex.value  === index && styles.active)}>
                <CardMemorized key={`card-${index}`} {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;

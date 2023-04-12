import "aos/dist/aos.css";
import AOS from "aos";

export const initAos = () => {
  AOS.init({
    duration: 600,
    offset: 100,
  });
};

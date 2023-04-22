import { useEffect } from "react";
import { AdvantageCard } from "../components";
import { initAos } from "../components/initAos";
import { useTranslation } from "next-i18next";

const data = [
  {
    img: "/images/uslugi/1.png",
    title: "advantages.card1.title",
    info: "advantages.card1.info",
  },
  {
    img: "/images/uslugi/4.png",
    title: "advantages.card2.title",
    info: "advantages.card2.info",
  },
  {
    img: "/images/uslugi/2.png",
    title: "advantages.card3.title",
    info: "advantages.card3.info",
  },
  {
    img: "/images/uslugi/9.png",
    title: "advantages.card4.title",
    info: "advantages.card4.info",
  },
];

const Advantages = () => {
  useEffect(() => {
    initAos();
  }, []);
  const { t } = useTranslation();
  return (
    <section className="sections" id="advantage">
      <div className="container">
        <h1 className="section-title" data-aos="fade-up">
          {t("advantages.title")}
        </h1>
        <div className="flex flex-wrap justify-evenly">
          {data.map(({ img, title, info }, i) => (
            <AdvantageCard key={i} img={img} title={t(title)} info={t(info)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;

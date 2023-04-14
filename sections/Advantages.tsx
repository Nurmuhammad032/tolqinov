import { useEffect } from "react";
import { AdvantageCard } from "../components";
import { initAos } from "../components/initAos";

const data = [
  {
    img: "/images/uslugi/1.png",
    title: "Экономите деньги",
    info: "За счёт того что мы имеем собственное производство, это позволяет избежать переплат за выполнение проекта. А также мы работаем с более 10 различными видами камней, что дает вам возможность выбрать проект под ваш бюджет.",
  },
  {
    img: "/images/uslugi/4.png",
    title: "Экономите время",
    info: "Сроки изготовления памятников составляют от 2-х дней до 1 недели. Мемориальных комплексов до 1 месяца. Также мы готовы рассмотреть вариант оформления рассрочки, чтобы вы не откладывали покупку до лучших времен.",
  },
  {
    img: "/images/uslugi/2.png",
    title: "Гарантия качества",
    info: "Мы находимся на рынке уже более 20 лет и за это время изготовили более 700 различных по сложности работ. Кроме того мы даём гарантию на наши работы, сроком до 10 лет.",
  },
  {
    img: "/images/uslugi/9.png",
    title: "Персональный подход",
    info: "Мы можем изготовить для вас проект любой сложности по индивидуальному дизайну. Также мы готовы выехать к вам или отправить за вами машину, чтобы обсудить все детали вашего проекта.",
  },
];

const Advantages = () => {
  useEffect(() => {
    initAos();
  }, []);
  return (
    <section className="sections" id="advantage">
      <div className="container">
        <h1 className="section-title" data-aos="fade-up">
          Что вы получаете обращаясь к нам
        </h1>
        <div className="flex flex-wrap items-stretch justify-evenly">
          {data.map(({ img, title, info }, i) => (
            <AdvantageCard key={i} img={img} title={title} info={info} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;

import { AdvantageCard } from "../components";

const data = [
  {
    img: "",
    title: "",
    info: "",
  },
  {
    img: "",
    title: "",
    info: "",
  },
  {
    img: "",
    title: "",
    info: "",
  },
  {
    img: "",
    title: "",
    info: "",
  },
];

const Advantages = () => {
  return (
    <section className="sections" id="advantage">
      <div className="container">
        <h1 className="section-title">Что вы получаете обращаясь к нам</h1>
        <div className="flex flex-wrap justify-evenly">
          {data.map(({ img, title, info }, i) => (
            <AdvantageCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;

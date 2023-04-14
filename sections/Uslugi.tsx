import Image from "next/image";
import { useEffect } from "react";
import { initAos } from "../components/initAos";

const data = [
  {
    title: "Памятники",
    info: "Изготовление и установка памятников и облицовки, все виды работ по камню",
    img: "/images/pamyatniki-1.png",
  },
  {
    title: "Мазары",
    info: "Изготовление мазаров любой сложности по индивидуальным проектам",
    img: "/images/pamyatniki-2.png",
  },
  {
    title: "Сварочные работы",
    info: "Изготовление мемориальных комплексов любой сложности, все виды работ по камню",
    img: "/images/pngwing.com.png",
  },
  {
    title: "Брусчатку",
    info: "Изготовление качественной брусчатки из натурального камня",
    img: "/images/pamyatniki-7.webp",
  },
  {
    title: "Мемориальные комплексы",
    info: "Сварочные работы любого уровня сложности в сжатые сроки",
    img: "/images/pamyatniki-3.png",
  },
  {
    title: "Прочие работы",
    info: "Прочие работы любого уровня сложности в сжатые сроки",
    img: "/images/pamyatniki-6.png",
  },
];
const Uslugi = () => {
  useEffect(() => {
    initAos();
  }, []);
  return (
    <section className="sections" id="service">
      <div className="">
        <div className="mb-[3.25rem] container">
          <h1 className="section-title" data-aos="fade-up">
            Наши услуги
          </h1>
          <p className="section-subtitle" data-aos="fade-up">
            МЫ ПРОИЗВОДИМ И УСТАНАВЛИВАЕМ
          </p>
        </div>
        <div className="xl:block hidden">
          <div className="back relative p-4">
            {data.map(({ img, info, title }, i) => (
              <div
                data-aos-duration="800"
                key={i}
                className="flex container relative z-20 items-center my-36 flex-wrap justify-center"
              >
                <div className="w-1/2 pr-24" key={i} data-aos="fade-right">
                  <h1 className="text-[2rem] mb-6 font-font_extraBold leading-[1.2] text-black">
                    {title}
                  </h1>
                  <p className="mb-4 text-xl font-font_medium text-black">
                    {info}
                  </p>
                </div>
                <div className="w-1/2">
                  <div
                    className="max-w-[542px] h-[340px] ml-auto w-full"
                    data-aos="fade-left"
                  >
                    <Image
                      width={500}
                      height={500}
                      src={img}
                      alt=""
                      className="w-full object-contain h-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="xl:hidden">
          {data.map(({ img, info, title }, i) => (
            <div className="max-w-3xl mx-auto p-3" key={i} data-aos="fade-up">
              <div className="bg-white p-6 rounded-[2.5rem]">
                <div className="w-[17rem] h-[300px] mb-5">
                  <Image
                    width={500}
                    height={500}
                    src={img}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-[28px] mb-6 font-font_extraBold leading-[1.2] text-black">
                    {title}
                  </h1>
                  <p className="mb-4 text-xl font-font_medium text-black">
                    {info}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Uslugi;

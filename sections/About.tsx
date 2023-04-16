import Image from "next/image";
import { useEffect } from "react";
import { initAos } from "../components/initAos";

const About = () => {
  useEffect(() => {
    initAos();
  }, []);
  return (
    <section className="sections" id="about">
      <div className="about-container">
        <div className="bg-white rounded-[3.5rem] sm:py-24 sm:px-9 px-5 py-14 overflow-hidden">
          <h1 className="section-title mb-20" data-aos="fade-up">
            О КОМПАНИИ
          </h1>
          <div className="flex xl:flex-row flex-col items-center justify-between">
            <div className="xl:w-1/2">
              <h1
                className="sm:text-2xl text-xl font-font_extraBold leading-[1.2] mb-6"
                data-aos="fade-up"
              >
                Более 20 лет мы занимаемся изготовлением памятников, мазаров,
                мемориальных комплексов.
              </h1>
              <p
                className="text-[#303030] sm:text-xl text-[18px] font-font_medium"
                data-aos="fade-up"
              >
                Постоянно внедряя новые технологии, совершенствуя оборудование и
                повышая качество работ. От простой оградки, до строительства
                внушительных объектов по индивидуальным дизайнам.
              </p>
            </div>
            <div className="xl:w-1/2">
              <div className="xl:max-w-[500px] w-full" data-aos="zoom-in">
                <Image
                  width={500}
                  height={500}
                  src="/images/about2.png"
                  className="w-full xl:translate-x-32 xl:mt-0 mt-5 rounded-2xl"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

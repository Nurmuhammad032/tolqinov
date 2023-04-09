import React from "react";

const About = () => {
  return (
    <section className="sections" id="about">
      <div className="container bg-white rounded-[3.5rem] py-24 px-9 overflow-hidden">
        <h1 className="section-title mb-20">О КОМПАНИИ</h1>
        <div className="flex items-center justify-between">
          <div className="xl:w-1/2">
            <h1 className="text-2xl font-font_extraBold leading-[1.2] mb-6">
              Более 20 лет мы занимаемся изготовлением памятников, мазаров,
              мемориальных комплексов.
            </h1>
            <p className="text-[#303030] text-xl font-font_medium">
              Постоянно внедряя новые технологии, совершенствуя оборудование и
              повышая качество работ. От простой оградки, до строительства
              внушительных объектов по индивидуальным дизайнам.
            </p>
          </div>
          <div className="xl:w-1/2">
            <div className="max-w-[500px] w-full">
              <img
                src="https://pamyatniki.vercel.app/images/162.png"
                className="w-full translate-x-32"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

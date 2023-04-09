import React from "react";
import { Stepper } from "../components";

const Hero = () => {
  return (
    <section className="xl:pt-[210px] lg:pt-40 md:pt-32 pt-24 pb-20 bg-blue">
      <div className="container">
        <div className="flex items-center xl:flex-row flex-col">
          <div className="xl:w-1/2 w-full">
            <h1 className="text-white xl:text-[35px] xl:w-full md:w-5/6 text-2xl xl:font-font_extraBold font-bold leading-[1.2]">
              Изготовление памятников и мемориальных комплексов с гарантией до
              10 лет и сроками готовности от 2-х дней
            </h1>
            <p className="xl:text-[20px] text-base text-white font-font_medium leading-[1.7] my-4">
              Ответьте всего на 4 вопроса и узнайте приблизительную стоимость
              будущего памятника
            </p>
          </div>
          <div className="xl:w-1/2 w-full xl:mt-0 mt-5">
            <div className="">
              <Stepper />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

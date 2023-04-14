import { useEffect, useState } from "react";
import { Stepper } from "../components";
import { initAos } from "../components/initAos";
import Image from "next/image";

const Hero = () => {
  useEffect(() => {
    initAos();
  }, []);
  const [showStepper, setShowStepper] = useState(false);

  const handleClick = () => {
    setShowStepper(true);
  };
  useEffect(() => {
    handleClick();
  }, []);
  return (
    <section className="xl:pt-[210px] lg:pt-40 md:pt-32 pt-24 pb-20 bg-blue overflow-hidden">
      <div className="xl:max-w-[1320px] max-w-[720px] mx-auto px-3">
        <div
          className="flex items-center xl:flex-row flex-col relative"
          style={{
            perspective: "400rem",
          }}
        >
          <div className="xl:w-1/2 w-full">
            <h1
              className="text-white xl:text-[35px] xl:w-full md:w-5/6 text-2xl xl:font-font_extraBold font-bold leading-[1.2]"
              data-aos="fade-up"
            >
              Изготовление памятников и мемориальных комплексов с гарантией до
              10 лет и сроками готовности от 2-х дней
            </h1>
            <p
              className="xl:text-[20px] text-base text-white font-font_medium leading-[1.7] my-4"
              data-aos="fade-up"
            >
              Ответьте всего на 4 вопроса и узнайте приблизительную стоимость
              будущего памятника
            </p>
            {/* <button
              data-aos="fade-up"
              onClick={handleClick}
              className="px-14 xl:inline-block hidden cursor-pointer py-2 bg-blue border-2 border-white text-base mt-5 hover:bg-white hover:text-black transition-all font-semibold text-white rounded-xl uppercase"
            >
              УЗНАТЬ СТОИМОСТЬ ПАМЯТНИКА
            </button> */}
            <a
              data-aos="fade-up"
              href="#stepper"
              // onClick={handleClick}
              className="px-14 xl:hidden inline-block cursor-pointer py-2 bg-blue border-2 border-white sm:text-base text-xs mt-5 hover:bg-white hover:text-black transition-all font-semibold text-white rounded-xl uppercase"
            >
              УЗНАТЬ СТОИМОСТЬ ПАМЯТНИКА
            </a>
          </div>
          <div className="xl:w-1/2 w-full xl:mt-0 mt-5 xl:block hidden relative">
            <div
              className={`${
                !showStepper ? "invisible opacity-0" : ""
              } transition-all duration-500 relative z-20 stepper`}
              style={{
                transitionDelay: `3.8s`,
              }}
            >
              <Stepper />
            </div>
          </div>

          <Image
            width={500}
            height={500}
            src="/images/macbook-screen.png"
            alt=""
            className="absolute mackbook left-[33.4rem] w-[54.8rem] h-[556px] -top-[2rem] z-0"
            style={{
              transformOrigin: "bottom",
              transform: `${
                !showStepper ? "rotateX(-86deg)" : "rotateX(0deg)"
              }`,
              transition: "all 3s 0.5s",
            }}
          />
          <Image
            width={500}
            height={500}
            src="/images/macbook-keyboard.png"
            alt=""
            className="absolute keyboard left-[33.7rem] w-[54.8rem] h-auto -bottom-[4.5rem] z-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

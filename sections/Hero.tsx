import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { Stepper } from "../components";
import { initAos } from "../components/initAos";
import { useTranslation } from "next-i18next";

interface Props {
  setShowStepper: Dispatch<SetStateAction<boolean>>;
}

const Hero = ({ setShowStepper }: Props) => {
  useEffect(() => {
    initAos();
  }, []);
  const { t } = useTranslation();

  const handleClick = () => {
    setShowStepper((prev) => !prev);
  };

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
              className="text-white xl:text-[35px] md:w-5/6 text-2xl xl:font-font_extraBold font-bold leading-[1.2]"
              data-aos="fade-up"
            >
              {t("hero.title")}
            </h1>
            <p
              className="xl:text-[20px] text-base text-white font-font_medium leading-[1.7] my-4"
              data-aos="fade-up"
            >
              {t("hero.subtitle")}
            </p>

            <a
              data-aos="fade-up"
              href="#stepper"
              onClick={handleClick}
              // onClick={handleClick}
              className="px-14 xl:hidden inline-block cursor-pointer py-2 bg-blue border-2 border-white sm:text-base text-xs mt-5 hover:bg-white hover:text-black transition-all font-semibold text-white rounded-xl uppercase"
            >
              УЗНАТЬ СТОИМОСТЬ ПАМЯТНИКА
            </a>
          </div>
          <div className="xl:w-1/2 w-full xl:mt-0 mt-5 xl:block hidden relative">
            <div
              className={`transition-all duration-500 relative z-20 stepper`}
              style={{
                transitionDelay: `3.8s`,
              }}
            >
              <Stepper />
            </div>
          </div>

          <img
            src="/images/planshet.png"
            alt=""
            className="absolute mackbook left-[29.4rem] w-[62.8rem] h-[46.4rem] -top-[10.7rem] z-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

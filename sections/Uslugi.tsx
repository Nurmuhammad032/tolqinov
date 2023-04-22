import Image from "next/image";
import { useEffect } from "react";
import { initAos } from "../components/initAos";
import { useTranslation } from "next-i18next";

const data = [
  {
    title: "uslugi.card1.info_title",
    info: "uslugi.card1.info_subtitle",
    img: "/images/pamyatniki-1.png",
  },
  {
    title: "uslugi.card2.info_title",
    info: "uslugi.card2.info_subtitle",
    img: "/images/pamyatniki-2.png",
  },
  {
    title: "uslugi.card3.info_title",
    info: "uslugi.card3.info_subtitle",
    img: "/images/pngwing.com.png",
  },
  {
    title: "uslugi.card4.info_title",
    info: "uslugi.card4.info_subtitle",
    img: "/images/pamyatniki-7.webp",
  },
  {
    title: "uslugi.card5.info_title",
    info: "uslugi.card5.info_subtitle",
    img: "/images/pamyatniki-3.png",
  },
  {
    title: "uslugi.card6.info_title",
    info: "uslugi.card6.info_subtitle",
    img: "/images/pamyatniki-6.png",
  },
];
const Uslugi = () => {
  useEffect(() => {
    initAos();
  }, []);
  const { t } = useTranslation();
  return (
    <section className="sections" id="service">
      <div className="">
        <div className="mb-[3.25rem] container">
          <h1 className="section-title" data-aos="fade-up">
            {t("uslugi.title")}
          </h1>
          <p className="section-subtitle uppercase" data-aos="fade-up">
            {t("uslugi.subtitle")}
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
                    {t(title)}
                  </h1>
                  <p className="mb-4 text-xl font-font_medium text-black">
                    {t(info)}
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
              <div className="bg-white p-6 rounded-[2.5rem] text-center">
                <div className="w-[17rem] h-[300px] mx-auto mb-5">
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
                    {t(title)}
                  </h1>
                  <p className="mb-4 text-xl font-font_medium text-black">
                    {t(info)}
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

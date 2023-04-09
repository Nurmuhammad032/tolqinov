import React from "react";

const data = [1, 2, 3];
const Uslugi = () => {
  return (
    <section className="sections" id="service">
      <div className="">
        <div className="mb-[3.25rem] container">
          <h1 className="section-title">Наши услуги</h1>
          <p className="section-subtitle">МЫ ПРОИЗВОДИМ И УСТАНАВЛИВАЕМ</p>
        </div>
        <div className="xl:block hidden">
          <div className="back relative p-4">
            {data.map((_, i) => (
              <div
                key={i}
                className="flex container relative z-20 items-center my-36 flex-wrap justify-center"
              >
                <div className="w-1/2 pr-24" key={i}>
                  <h1 className="text-[2rem] mb-6 font-font_extraBold leading-[1.2] text-black">
                    Publish your form
                  </h1>
                  <p className="mb-4 text-xl font-font_medium text-black">
                    Add your form to the site or use it in emails, social media,
                    and messengers
                  </p>
                </div>
                <div className="w-1/2">
                  <div className="max-w-[552px] ml-auto w-full">
                    <img
                      src="https://stepform.io/main/style/assets/img/components/step/en/step-1@2x-min.png"
                      alt=""
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="xl:hidden">
          {data.map((_, i) => (
            <div className="max-w-3xl mx-auto p-3" key={i}>
              <div className="bg-white p-6 rounded-[2.5rem]">
                <div className="max-w-[27rem] w-full mb-5">
                  <img
                    src="https://stepform.io/main/style/assets/img/components/step/en/step-1@2x-min.png"
                    alt=""
                    className="w-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-[28px] mb-6 font-font_extraBold leading-[1.2] text-black">
                    Publish your form
                  </h1>
                  <p className="mb-4 text-xl font-font_medium text-black">
                    Add your form to the site or use it in emails, social media,
                    and messengers
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

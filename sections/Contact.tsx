import React, { useState, useEffect } from "react";
import { CustomFormGroup } from "../components/Stepper/Steps";
import { HiOutlineHome } from "react-icons/hi";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { initAos } from "../components/initAos";
import { useTranslation } from "next-i18next";

const Contact = () => {
  useEffect(() => {
    initAos();
  }, []);
  const { t } = useTranslation();
  const [data, setData] = useState({
    name: "",
    number: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;

    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <section className="sections" id="contact">
      <div className="container">
        <div className="mb-10 max-w-4xl mx-auto">
          <h1 className="section-title" data-aos="fade-up">
            {t("contact.title")}
          </h1>
          <p className="section-subtitle" data-aos="fade-up">
            {t("contact.subtitle")}
          </p>
        </div>
        <div className="flex justify-between lg:flex-row flex-col">
          <div className="lg:w-1/2">
            <div className="lg:pt-10 lg:pr-24">
              <div
                className="w-full flex items-center pr-14 mb-7"
                data-aos="fade-up"
              >
                <span className="mr-7 flex items-center justify-center text-[30px]">
                  <MdEmail />
                </span>
                <div>
                  <p className="text-lg font-font_medium text-black">
                    {t("contact.gmail")}:
                  </p>
                  <p className="text-sm opacity-90 text-black">
                    monumentkz9@gmail.com
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center mb-7" data-aos="fade-up">
                <span className="mr-7 flex items-center justify-center text-[30px]">
                  <MdPhone />
                </span>
                <div>
                  <p className="text-lg font-font_medium capitalize text-black">
                    {t("contact.phone")}:
                  </p>
                  <p className="text-sm opacity-90 text-black">
                    +7 (777) 010-41-21
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center" data-aos="fade-up">
                <span className="mr-7 flex items-center justify-center text-[30px]">
                  <MdLocationOn />
                </span>
                <div>
                  <p className="text-lg font-font_medium text-black">
                    {t("contact.location_title")}:
                  </p>
                  <p className="text-sm opacity-90 text-black">
                    {t("contact.location_info")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="contact-inputs" className="lg:w-1/2 lg:mt-0 mt-7">
            <CustomFormGroup
              onChange={handleChange}
              value={data.name}
              label={t("input.name")}
              name="name"
            />
            <CustomFormGroup
              onChange={handleChange}
              value={data.number}
              label={t("input.phone")}
              name="number"
            />
            <textarea
              name="message"
              onChange={handleChange}
              className="w-full resize-none bg-transparent border-b text-area"
              placeholder={t("input.message")}
            ></textarea>
            <button
              type="submit"
              className="text-white ml-auto block bg-blue leading-[1.5] py-[0.87rem] px-8 rounded-xl font-font_medium transition-all hover:bg-[#403fd5]"
            >
              {t("contact.button")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

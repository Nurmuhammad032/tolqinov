import React, { useState, useEffect } from "react";
import { CustomFormGroup } from "../components/Stepper/Steps";
import { HiOutlineHome } from "react-icons/hi";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { initAos } from "../components/initAos";

const Contact = () => {
  useEffect(() => {
    initAos();
  }, []);
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
            Хотите мы бесплатно вышлем за вами машину?
          </h1>
          <p className="section-subtitle" data-aos="fade-up">
            Заполните форму ниже, чтобы мы согласовали с вами дату и время
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
                    Электронная почта:
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
                  <p className="text-lg font-font_medium text-black">
                    Электронная почта:
                  </p>
                  <p className="text-sm opacity-90 text-black">
                    monumentkz9@gmail.com
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center" data-aos="fade-up">
                <span className="mr-7 flex items-center justify-center text-[30px]">
                  <MdLocationOn />
                </span>
                <div>
                  <p className="text-lg font-font_medium text-black">Адрес:</p>
                  <p className="text-sm opacity-90 text-black">
                    Алматинская обл., Карасайский р-н, с.Коксай, ул.Наурызбай
                    батыра, 139
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="contact-inputs" className="lg:w-1/2 lg:mt-0 mt-7">
            <CustomFormGroup
              onChange={handleChange}
              value={data.name}
              label="Ваше имя"
              name="name"
            />
            <CustomFormGroup
              onChange={handleChange}
              value={data.number}
              label="Номер телефона"
              name="number"
            />
            <textarea
              name="message"
              onChange={handleChange}
              className="w-full resize-none bg-transparent border-b text-area"
              placeholder="Сообщение"
            ></textarea>
            <button
              type="submit"
              className="text-white ml-auto block bg-blue leading-[1.5] py-[0.87rem] px-8 rounded-xl font-font_medium transition-all hover:bg-[#403fd5]"
            >
              ЗАКАЗАТЬ ТРАНСФЕР
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

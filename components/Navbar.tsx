import Link from "next/link";
import { useRouter } from "next/router";
import React, { SetStateAction, useState, useEffect } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { useTranslation } from "next-i18next";

const links = [
  {
    link: "advantage",
    label: "Что вы получаете",
  },
  {
    link: "about",
    label: "О компании",
  },
  {
    link: "service",
    label: "Наши услуги",
  },
  {
    link: "contact",
    label: "Контакты",
  },
];

const language = [
  {
    value: "ru",
    label: "Русский",
  },
  {
    value: "kk",
    label: "казахский",
  },
];

interface Props {
  setSelectedLang: React.Dispatch<SetStateAction<string>>;
  selectedLang: string;
}

const Navbar = ({ selectedLang, setSelectedLang }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const { t } = useTranslation();

  const langHandler = () => {
    router.push(router.pathname, router.pathname, {
      locale: selectedLang,
    });
  };

  useEffect(() => {
    langHandler();
  }, [selectedLang]);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  const handleToggleLang = () => {
    setOpenLang((prev) => !prev);
  };

  if (typeof window !== "undefined") {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  return (
    <nav
      className={`xl:py-6 py-2 px-3 z-[2500] bg-white lg:transition-all lg:duration-700 duration-200 xl:mt-2 xl:rounded-full xl:px-8 fixed left-0 right-0 ${
        isScrolled ? "xl:!px-6 xl:!py-4 !bg-lightWhite" : ""
      }`}
      style={{
        backdropFilter: "blur(28px)",
        boxShadow: "0.25rem 0 2rem rgba(50, 50, 92, 0.075)",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <ul className="flex items-center">
            <li className="mr-4">
              <Link href={"/"} className="">
                <img
                  src="/images/black-logo2.png"
                  alt="logo"
                  className="max-w-[137px] min-w-[137px]"
                />
              </Link>
            </li>
            {links.map(({ label, link }, i) => (
              <li key={i} className="lg:block hidden">
                <a
                  href={`#${link}`}
                  className="px-6 py-[14px] hover:bg-lightBlue inline-block transition-all hover:text-blue hover:opacity-100 rounded-[13px] font-font_medium opacity-75"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="lg:block hidden">
            <li className="px-4 py-[14px] hover:bg-lightBlue rounded-[13px] opacity-75 hover:opacity-100 group cursor-pointer transition-all relative">
              <img
                src="https://stepform.io/main/style/assets/img/icons/24x24/globe-dark.svg"
                alt="global icon"
                className="max-w-[20px] min-w-[20px]"
              />
              <div className="absolute min-w-[200px] max-full py-4 xl:left-0 lg:left-auto left-1/2 lg:-translate-x-0 -translate-x-1/2 lg:right-0 top-12 px-0 group-hover:block hidden opacity-0 group-hover:opacity-100 rounded-2xl bg-white transition-all">
                {language.map(({ label, value }) => (
                  <span
                    className={`block hover:bg-blue hover:text-white capitalize text-black transition-all ease-in-out px-4 py-2 ${
                      selectedLang === value ? "bg-blue !text-white" : ""
                    }`}
                    onClick={() => setSelectedLang(value)}
                    key={value}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </li>
          </ul>
          <ul className="lg:hidden">
            <div className="cursor-pointer" onClick={handleToggle}>
              <li className="w-7 h-[2px] bg-black mb-[6px]"></li>
              <li className="w-7 h-[2px] bg-black mb-[6px]"></li>
              <li className="w-7 h-[2px] bg-black mb-[6px]"></li>
            </div>
          </ul>
        </div>
      </div>
      <div
        className={`absolute h-0 z-[1300] lg:hidden w-full left-0 top-[53px] right-0 bg-white overflow-auto ${
          open ? "h-screen" : ""
        }`}
        style={{
          transition: "height 0.5s ease-in-out",
        }}
      >
        <ul className="mb-5 mt-2">
          {links.map(({ label, link }, i) => (
            <li key={i} className="max-w-2xl mx-auto text-center mb-3">
              <a
                href={`#${link}`}
                onClick={() => setOpen(false)}
                className="px-6 py-[14px] hover:bg-lightBlue block transition-all hover:text-blue hover:opacity-100 md:rounded-[13px] font-font_medium opacity-75"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="max-w-2xl mx-auto text-center mb-3">
            <span
              className="px-6 py-[14px] mx-auto text-center w-full hover:bg-lightBlue flex justify-center transition-all hover:text-blue hover:opacity-100 md:rounded-[13px] font-font_medium opacity-75"
              onClick={handleToggleLang}
            >
              <img
                src="https://stepform.io/main/style/assets/img/icons/24x24/globe-dark.svg"
                alt="global icon"
                className="max-w-[20px] min-w-[20px]"
              />
              <RiArrowDownSFill
                className={`text-lg ${openLang ? "text-blue" : ""}`}
              />
            </span>
          </li>
          <div
            className="max-w-2xl mx-auto text-center mb-20 bg-white rounded-lg py-2"
            style={{
              boxShadow: "0 1rem 3rem rgba(50, 50, 92, 0.175)",
              display: `${openLang ? "block" : "none"}`,
            }}
          >
            {language.map(({ label, value }) => (
              <li
                className={`px-6 py-2 transition-all hover:text-blue font-font_medium ${
                  selectedLang === value ? "bg-blue !text-white" : ""
                }`}
                onClick={() => {
                  setSelectedLang(value);
                  setOpenLang(false);
                }}
                key={value}
              >
                {label}
              </li>
            ))}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

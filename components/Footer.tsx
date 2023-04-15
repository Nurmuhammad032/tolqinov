import React, { SetStateAction } from "react";
import { SiLinkedin, SiTelegram, SiFacebook } from "react-icons/si";
import { MdLanguage } from "react-icons/md";
import { AiOutlineArrowUp } from "react-icons/ai";

interface Props {
  setSelectedLang: React.Dispatch<SetStateAction<string>>;
  selectedLang: string;
}

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

const Footer = ({ selectedLang, setSelectedLang }: Props) => {
  return (
    <footer className="bg-black py-3">
      <div className="container">
        <img
          src="/images/white-logo.png"
          alt=""
          className="max-w-[140px] sm:hidden mx-auto mb-5"
        />
        <ul className="flex justify-between items-center">
          <li className="hidden sm:block">
            <img
              src="/images/white-logo.png"
              alt=""
              className="max-w-[140px]"
            />
          </li>
          <li className="text-white flex items-center text-2xl">
            <a href="">
              <SiTelegram />
            </a>
            <a href="" className="mx-4">
              <SiFacebook />
            </a>
            <a href="">
              <SiLinkedin />
            </a>
          </li>
          <li className="flex items-center">
            {language.map(
              ({ value, label }, i) =>
                selectedLang !== value && (
                  <div
                    key={i}
                    className="text-white flex items-center space-x-3 border border-white py-2 px-4 rounded-full cursor-pointer"
                    onClick={() => setSelectedLang(value)}
                  >
                    <MdLanguage className="text-white text-2xl" />
                    <p className="capitalize">{label}</p>
                  </div>
                )
            )}
          </li>
          <li className="sm:block hidden">
            <a
              href="#"
              className="w-10 h-10 hover:bg-white border border-white hover:text-black text-white transition-all justify-center flex items-center rounded-md ml-6"
            >
              <AiOutlineArrowUp className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
import { useEffect } from "react";
import { initAos } from "./initAos";

interface Props {
  img: string;
  title: string;
  info: string;
}
const AdvantageCard = ({ img, title, info }: Props) => {
  useEffect(() => {
    initAos();
  }, []);
  return (
    <div className="p-3 mb-6 lg:w-1/3 w-full" data-aos="fade-up">
      <div className="rounded-[2.5rem] bg-white h-full">
        <div className="sm:p-[3rem] p-8 h-full flex flex-col">
          <div className="card-body flex-grow">
            <div className="mb-10 w-full max-w-[320px] h-[210px] mx-auto">
              <Image
                width={500}
                height={500}
                src={img}
                className="w-full object-contain h-full"
                alt="advantages card"
              />
            </div>
            <h4 className="text-2xl mb-6 font-font_extraBold leading-[1.2]">
              {title}
            </h4>
            <p className="text-lg font-font_medium mb-4">{info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantageCard;

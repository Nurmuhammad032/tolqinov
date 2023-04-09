import React from "react";

const AdvantageCard = () => {
  return (
    <div className="p-3 mb-6 lg:w-1/3 w-full">
      <div className="rounded-[2.5rem] bg-white">
        <div className="p-[3rem]">
          <div className="card-body">
            <div className="mb-10 w-full max-w-[320px] mx-auto">
              <img
                src="https://stepform.io/main/style/assets/img/components/card/en/collect-applications@2x-min.png"
                className="w-full object-cover"
                alt="advantages card"
              />
            </div>
            <h4 className="text-2xl mb-6 font-font_extraBold leading-[1.2]">
              {" "}
              Get orders{" "}
            </h4>
            <p className="text-lg font-font_medium mb-4">
              {" "}
              Add your form to the site or use it in emails, social media, and
              messengers{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantageCard;

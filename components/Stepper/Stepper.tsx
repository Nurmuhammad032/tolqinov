import { useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useTranslation } from "next-i18next";
import {
  StepperBody,
  StepperButtons,
  StepperContainer,
  StepperHeader,
  StepperModal,
  Validation,
} from "./Stepper.styled";
import { FillForm, Install, OrderDate, Price, SelectImages } from "./Steps";
import { toast } from "react-toastify";

const Stepper = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [validation, setValidation] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [data, setData] = useState({
    images: images,
    install: "",
    price: "",
    orderDate: "",
    name: "",
    number: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleReset = () => {
    const { name, number } = data;
    const isValidNumber = number.replace(/\D/g, "");
    console.log(isValidNumber);

    if (name.length < 3 || isValidNumber.length < 11) {
      setValidation(true);
      return;
    }
    setValidation(false);
    toast.success("Вы успешно отправили заявку!");
    setCurrentStep(0);
    setImages([]);
    setData((prev) => {
      return {
        ...prev,
        install: "",
        price: "",
        orderDate: "",
        name: "",
        number: "",
      };
    });
  };

  useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        images: images,
      };
    });
  }, [images]);

  const steps = [
    {
      label: "stepper.header_label",
      content: <SelectImages setImages={setImages} images={images} />,
    },
    {
      label: "stepper.header_label",
      content: <Install onChange={handleChange} value={data.install} />,
    },
    {
      label: "stepper.header_label",
      content: <Price onChange={handleChange} value={data.price} />,
    },
    {
      label: "stepper.header_label",
      content: <OrderDate onChange={handleChange} value={data.orderDate} />,
    },
    {
      label: "stepper.header_label",
      content: (
        <FillForm
          onChange={handleChange}
          valueName={data.name}
          valueNumber={data.number}
        />
      ),
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      // this check every step value must be selected at least one item
      if (Object.values(data)[currentStep]?.length) {
        setValidation(false);
        setCurrentStep(currentStep + 1);
      } else {
        setValidation(true);
      }
    }
  };

  const handleBack = () => {
    setValidation(false);
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progress = (currentStep / (steps.length - 1)) * 100;
    setProgress(progress);
  }, [currentStep]);

  const step = steps[currentStep];

  return (
    <StepperContainer>
      <StepperModal onClick={(e) => e.stopPropagation()}>
        <StepperHeader width={progress}>
          <div className="header-content">
            <h2 className="font-font_medium">{t(step.label)}</h2>
          </div>
          <h1 className="stepper-steps text-blue">
            {currentStep + 1} / {steps.length}
          </h1>
        </StepperHeader>
        <StepperBody>{step.content} </StepperBody>
        <Validation>
          <p
            style={{
              visibility: `${validation ? "visible" : "hidden"}`,
            }}
            className={`${validation ? "anim" : ""}`}
          >
            {t("stepper.error")}
          </p>
        </Validation>
        <StepperButtons>
          <button
            className="font-font_medium"
            onClick={handleBack}
            disabled={currentStep > 0 ? false : true}
          >
            {" "}
            <span>
              <HiArrowNarrowLeft />
            </span>
            {t("stepper.prev")}{" "}
          </button>
          {currentStep < steps.length - 1 ? (
            <button onClick={handleNext} className="font-font_medium">
              <div>{t("stepper.next")}</div>
              <span>
                <HiArrowNarrowRight />
              </span>
            </button>
          ) : (
            <button
              className="font-font_medium uppercase"
              onClick={handleReset}
            >
              {t("stepper.submit")}
            </button>
          )}
        </StepperButtons>
      </StepperModal>
    </StepperContainer>
  );
};

export default Stepper;

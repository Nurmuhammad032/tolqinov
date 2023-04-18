import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
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
    // const { value, name } = e.target;
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
      label:
        "Ответьте всего на 4 вопроса и узнайте приблизительную стоимость будущего памятника",
      content: <SelectImages setImages={setImages} images={images} />,
    },
    {
      label:
        "Ответьте всего на 4 вопроса и узнайте приблизительную стоимость будущего памятника",
      content: <Install onChange={handleChange} value={data.install} />,
    },
    {
      label:
        "Ответьте всего на 4 вопроса и узнайте приблизительную стоимость будущего памятника",
      content: <Price onChange={handleChange} value={data.price} />,
    },
    {
      label:
        "Ответьте всего на 4 вопроса и узнайте приблизительную стоимость будущего памятника",
      content: <OrderDate onChange={handleChange} value={data.orderDate} />,
    },
    {
      label:
        "Ответьте всего на 4 вопроса и узнайте приблизительную стоимость будущего памятника",
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
            <h2 className="font-font_medium">{step.label}</h2>
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
            Пожалуйста, заполните все обязательные поля
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
            Назад{" "}
          </button>
          {currentStep < steps.length - 1 ? (
            <button onClick={handleNext} className="font-font_medium">
              <div>Далее</div>
              <span>
                <HiArrowNarrowRight />
              </span>
            </button>
          ) : (
            <button className="font-font_medium" onClick={handleReset}>
              УЗНАТЬ СТОИМОСТЬ ПАМЯТНИКА
            </button>
          )}
        </StepperButtons>
      </StepperModal>
    </StepperContainer>
  );
};

export default Stepper;

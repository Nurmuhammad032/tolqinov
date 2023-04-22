import { useState } from "react";
import {
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
} from "@mui/material";
import { BsCheckLg } from "react-icons/bs";
import { FormGroup, ImageWrapper, SelectImg } from "./Stepper.styled";
import styled from "styled-components";
import MaskedInput from "react-text-mask";
import { useTranslation } from "next-i18next";
const breakpoints = {
  small: "576px",
  medium: "768px",
  large: "992px",
  extraLarge: "1200px",
};

const media = {
  small: `@media (max-width: ${breakpoints.small})`,
  medium: `@media (max-width: ${breakpoints.medium})`,
  large: `@media (max-width: ${breakpoints.large})`,
  extraLarge: `@media (max-width: ${breakpoints.extraLarge})`,
};
const { small, medium, large, extraLarge } = media;

interface Props2 {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  label: string;
}

export const CustomFormGroup = ({ onChange, value, name, label }: Props2) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <div>
      <FormGroup>
        {name == "number" ? (
          <MaskedInput
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={onChange}
            value={value}
            name={name}
            id={name}
            mask={[
              "+",
              /[78]/,
              " ",
              "(",
              /[1-9]/,
              /\d/,
              /\d/,
              ")",
              " ",
              /\d/,
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
            ]}
          />
        ) : (
          <input
            type="text"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={onChange}
            value={value}
            name={name}
            id={name}
          />
        )}
        <label className={`${isFocus || value ? "active" : ""}`} htmlFor={name}>
          {label}
        </label>
        <div className="validation"></div>
      </FormGroup>
    </div>
  );
};

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const radioStyles = {
  "& .MuiSvgIcon-root": {
    fontSize: 23,
  },
  color: "#4B4AFB",
  "&.Mui-checked": {
    color: "#4B4AFB",
  },
};

const radioLabelStyles = {
  fontSize: "21px",
  fontFamily: "gilroy-medium, sans-serif",
  color: "#000",

  "&.Mui-focused": {
    color: "inherit",
  },
};

const redioControlLabel = {
  ".MuiFormControlLabel-label": {
    fontSize: "18px",
    fontFamily: "gilroy-regular, sans-serif",
  },
};

interface ImageData {
  src: string;
  value: string;
}

const imageData: ImageData[] = [
  {
    src: "https://thumb.tildacdn.com/tild3930-6433-4231-b836-386161386433/-/format/webp/image-14-07-20-03-40.jpg",
    value: "Памятник",
  },
  {
    src: "https://thumb.tildacdn.com/tild3930-6433-4231-b836-386161386433/-/format/webp/image-14-07-20-03-40.jpg",
    value: "Мазар",
  },
  {
    src: "https://thumb.tildacdn.com/tild3930-6433-4231-b836-386161386433/-/format/webp/image-14-07-20-03-40.jpg",
    value: "Мемориальный комплекс",
  },
  {
    src: "https://thumb.tildacdn.com/tild3930-6433-4231-b836-386161386433/-/format/webp/image-14-07-20-03-40.jpg",
    value: "Другое",
  },
];

interface ImgProps {
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  images: string[];
}

export const SelectImages = ({ setImages, images }: ImgProps) => {
  // const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const { t } = useTranslation();
  const handleImageClick = (value: string) => {
    if (images.includes(value)) {
      setImages(images.filter((image) => image !== value));
    } else {
      setImages([...images, value]);
    }
  };

  return (
    <SelectImg>
      <p className="title">{t("steps.select_images")}</p>
      <ImageWrapper>
        {imageData.map((image) => (
          <div key={image.value}>
            <span
              className={`icon ${
                images.includes(image.value) ? "active-icon" : ""
              }`}
            >
              <BsCheckLg />
            </span>
            <img
              src={image.src}
              alt={image.value}
              onClick={() => handleImageClick(image.value)}
            />
          </div>
        ))}
      </ImageWrapper>
    </SelectImg>
  );
};

export const Install = ({ onChange, value }: Props) => {
  const { t } = useTranslation();
  return (
    <FormControl>
      <FormLabel
        sx={{ ...radioLabelStyles }}
        id="demo-radio-buttons-group-label"
      >
        {t("steps.install")}
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="install"
        value={value}
        onChange={onChange}
      >
        <FormControlLabel
          sx={{
            ...redioControlLabel,
          }}
          value="Да"
          control={<Radio sx={{ ...radioStyles }} size="medium" />}
          label={t("utilits.yes")}
        />
        <FormControlLabel
          sx={{
            ...redioControlLabel,
          }}
          value="Нет"
          control={<Radio sx={{ ...radioStyles }} />}
          label={t("utilits.no")}
        />
      </RadioGroup>
    </FormControl>
  );
};

export const Price = ({ onChange, value }: Props) => {
  const { t } = useTranslation();
  return (
    <FormControl>
      <FormLabel
        sx={{ ...radioLabelStyles }}
        id="demo-radio-buttons-group-label"
      >
        {t("steps.price_title")}
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={value}
        onChange={onChange}
        name="price"
      >
        <FormControlLabel
          sx={{
            ...redioControlLabel,
          }}
          value="От 20 000 до 50 000 ₸"
          control={<Radio sx={{ ...radioStyles }} />}
          label={t("steps.price1")}
        />
        <FormControlLabel
          sx={{
            ...redioControlLabel,
          }}
          value="От 50 000 до 100 000 ₸"
          control={<Radio sx={{ ...radioStyles }} />}
          label={t("steps.price2")}
        />
        <FormControlLabel
          sx={{
            ...redioControlLabel,
          }}
          value="От 100 000 до 200 000 ₸"
          control={<Radio sx={{ ...radioStyles }} />}
          label={t("steps.price3")}
        />
        <FormControlLabel
          sx={{
            ...redioControlLabel,
          }}
          value="От 200 000 ₸ и более"
          control={<Radio sx={{ ...radioStyles }} />}
          label={t("steps.price4")}
        />
      </RadioGroup>
    </FormControl>
  );
};

export const OrderDate = ({ onChange, value }: Props) => {
  const { t } = useTranslation();
  return (
    <FormControl>
      <FormLabel
        sx={{ ...radioLabelStyles }}
        id="demo-radio-buttons-group-label"
      >
        {t("steps.order_title")}
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={value}
        onChange={onChange}
        name="orderDate"
      >
        <FormControlLabel
          sx={{
            ...redioControlLabel,
          }}
          value="На этой недели"
          control={<Radio sx={{ ...radioStyles }} />}
          label={t("steps.date1")}
        />
        <FormControlLabel
          sx={{
            ...redioControlLabel,
          }}
          value="В течение 2-х недель"
          control={<Radio sx={{ ...radioStyles }} />}
          label={t("steps.date2")}
        />
        <FormControlLabel
          sx={{
            ...redioControlLabel,
          }}
          value="В этом месяце"
          control={<Radio sx={{ ...radioStyles }} />}
          label={t("steps.date3")}
        />
        <FormControlLabel
          sx={{
            ...redioControlLabel,
          }}
          value="От 1 месяца и более"
          control={<Radio sx={{ ...radioStyles }} />}
          label={t("steps.date4")}
        />
      </RadioGroup>
    </FormControl>
  );
};

interface FormProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  valueName: string;
  valueNumber: string;
}

export const FillForm = ({ onChange, valueName, valueNumber }: FormProps) => {
  const { t } = useTranslation();
  return (
    <InputWrapper>
      <CustomFormGroup
        onChange={onChange}
        value={valueName}
        label={t("input.name")}
        name="name"
      />
      <CustomFormGroup
        onChange={onChange}
        value={valueNumber}
        label={t("input.phone")}
        name="number"
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: 100%;
  div,
  input {
    width: 100% !important;
  }
`;

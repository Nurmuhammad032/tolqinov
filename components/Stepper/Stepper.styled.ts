import styled, { keyframes } from "styled-components";
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
const XL_PADDINGX = "35px";
const SM_PADDINGX = "15px";

interface ProgressProps {
  width: number;
}

export const SelectImg = styled.div`
  .title {
    font-size: 21px;
    font-family: "gilroy-medium", sans-serif;
    margin-bottom: 20px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${medium} {
    flex-wrap: wrap;
  }
  ${small} {
    justify-content: space-around;
  }
  div {
    width: calc(25% - 10px);
    cursor: pointer;
    position: relative;
    ${medium} {
      width: 200px;
      margin: 0 5px 20px;
    }
    ${small} {
      width: calc(50% - 10px);
      margin: 0 5px 10px;
    }
  }
  span.icon {
    position: absolute;
    top: -10px;
    right: -10px;
    display: block;
    width: 30px;
    height: 30px;
    font-size: 22px;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    transform: scale(0.8);
    opacity: 0;
    visibility: hidden;
    background-color: #4b4afb;
    transition: all 0.2s ease;
    &.active-icon {
      transform: scale(1);
      visibility: visible;
      opacity: 1;
    }
  }
  img {
    display: block;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
export const FormGroup = styled.div`
  margin-bottom: 30px;
  position: relative;
  padding: 15px 0 0;
  margin-top: 1px;
  width: 50%;
  ${medium} {
    width: 100%;
  }
  input {
    font-size: 18px;
    line-height: 160%;
    color: #323232;
    width: 520px;
    border: 0;
    border-bottom: 0.1rem solid #e8e8e8;
    outline: 0;
    padding: 7px 0;
    background: transparent;
    -webkit-transition: border-color 0.2s;
    transition: border-color 0.2s;
    ${medium} {
      display: block;
      width: 100%;
    }
  }
  label {
    display: block;
    transition: 0.2s;
    color: #9b9b9b;
    position: absolute;
    font-size: 13px;
    cursor: text;
    top: 20px;
    font-size: 18px;
    line-height: 160%;
    &.active {
      top: 0;
      font-size: 16px;
    }
  }
`;
export const StepperContainer = styled.div`
  width: 100%;
  transition: all 0.2s ease-in;
  cursor: pointer;
`;

export const StepperModal = styled.div`
  overflow: hidden;
  background-color: white;
  @media screen and (max-width: 1400px) {
    border-radius: 20px;
  }
  max-width: 100%;
  position: relative;
  width: 100%;
  cursor: initial;
  z-index: 2111;
  overflow: auto;
  ${small} {
    min-height: 100vh;
    top: 0rem;
    left: 0;
    right: 0;
    bottom: 0;
    transform: none;
  }
`;

export const StepperHeader = styled.div<ProgressProps>`
  padding: 1.5rem ${XL_PADDINGX};
  /* background-color: rgba(255, 255, 255, 0.8); */
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  position: relative;
  ${small} {
    font-size: 1rem;
  }
  .header-content {
    width: 90%;
    ${small} {
      width: 85%;
    }
    h2 {
      color: #000;
      font-size: 1em;
      line-height: 1.5;
    }
  }
  .stepper-steps {
    font-size: 1em;
  }
  &::after,
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0.2rem;
  }
  &::before {
    width: 100%;
    background-color: #fff;
  }
  &::after {
    background-color: #4b4afb;
    transition: width 0.2s linear;
    width: ${(props) => props.width}% !important;
  }
`;

export const StepperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px ${XL_PADDINGX};
  ${medium} {
    padding: 20px ${SM_PADDINGX};
    flex-direction: column;
  }
  button {
    border-radius: 6px;
    border: none;
    padding: 10px 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    ${medium} {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 1rem;
    }
    span {
      display: flex;
      align-items: center;
      transition: all 0.2s linear;
    }
  }
  button:first-child {
    border: 2px solid #4b4afb;
    color: #000;
    span {
      margin-right: 10px;
    }
    &:hover span {
      transform: translateX(-5px);
    }
    &:hover:disabled span {
      transform: translateX(0);
    }
    &:disabled {
      /* background-color: red  ; */
      user-select: none;
      cursor: not-allowed;
    }
  }
  button:last-child {
    background-color: #4b4afb;
    color: #fff;
    span {
      margin-left: 10px;
    }
    &:hover span {
      transform: translateX(5px);
    }
  }
`;

export const StepperBody = styled.div`
  min-height: 250px;
  padding: 15px ${XL_PADDINGX};
  ${small} {
    padding: 20px ${SM_PADDINGX};
  }
`;

const error = keyframes`
0%, 100%, 50%{
  transform: translateX(0);
}
25%{
  transform: translateX(-5px);
}
75%{
  transform: translateX(5px);
}
`;

export const Validation = styled.div`
  overflow: hidden;
  p {
    color: #f95d51;
    font-size: 20px;
    text-align: center;
  }
  p.anim {
    animation: ${error} 0.2s linear both;
  }
`;

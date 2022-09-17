import styled, { keyframes } from 'styled-components';

const Ripple = keyframes`
  0% {
    opacity: 0;
    r: 0;
  }

  50% {
    opacity: .18;
    r: 120%;
  }

  100% {
    opacity: 0;
    r: 140%;
  }
`;

export const CheckBoxCircleRipple = styled.circle`
  fill: grey;
  cx: 50%;
  cy: 50%;
  will-change: opacity, r;
`;

export const CheckBoxCircleBG = styled.circle`
  fill: var(--color-check-empty);
  transition: 250ms ease-in-out fill;
  will-change: fill;
  cx: 50%;
  cy: 50%;
  r: 50%;
`;

export const CheckBoxPath = styled.path`
  fill: none;
  stroke: #fff;
  stroke-width: 2;
  transition: 300ms linear stroke-dashoffset;
`;

export const CheckBoxText = styled.span`
  // text-decoration: line-through;
`;

export const CheckBox = styled.input`
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  &:checked + & {
    ${CheckBoxCircleBG} {
      opacity: 1;
      transition: 200ms ease-in-out opacity;
    }
    ${CheckBoxPath} {
      stroke-dashoffset: 0;
    }
  }
  &:checked ~ {
    ${CheckBoxText} {
      text-decoration: line-through;
    }
  }
`;

export const CheckBoxLabel = styled.label`
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  user-select: none;
  font-size: 1.5rem;
  color: #78919d;
`;

export const CheckBoxIndicator = styled.svg`
  border-radius: 50%;
  overflow: visible !important;
  width: 22px;
  margin-right: 30px;
  ${CheckBox}:focus + & {
    ${CheckBoxCircleRipple} {
      animation: ${Ripple} 600ms;
    }
  }

  ${CheckBox}:checked + & {
    ${CheckBoxCircleBG} {
      fill: var(--color-primary);
      transition: 200ms ease-in-out opacity;
    }
    ${CheckBoxPath} {
      stroke-dashoffset: 0;
    }
  }
`;

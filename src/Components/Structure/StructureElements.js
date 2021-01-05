import styled ,{ css }from "styled-components"

export const MachineWrapper = styled.div`
  padding: 0;
  background-color: #1C2833;
  height: 100vh;
  
`

export const CompWrap = styled.div`
  background-color: #515A5A;
  border-radius: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  padding: 30px; 
  display: flex;

`

export const ControlWrapper = styled.div`
  background-color: #515A5A;
  flex:1;
  width: 400px;
  padding: 30px;
`
export const ToggleWrapper = styled.div`
  background-color: #515A5A;
  display:flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const ToggleLabel = styled.p`
  font-size: 25px;
  background-color: #515A5A;
  margin-bottom: 15px;
  color: white;
`

export const CheckBoxWrapper = styled.div`
  position: relative;
  left: -8px;
  margin-bottom: 25px;
`
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 26px;
  border-radius: 15px;
  background: /*#bebebe*/ #1C2833;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 4px;
    background: /*ffffff*/ #58D68D;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: /*#4fbe79*/ #58D68D;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 38px;
      transition: 0.2s;
      background: #1C2833;
    }
  }
`
export const Display = styled.p`
  background: #1C2833;
  width: 130px;
  padding: 20px;
  border-radius: 20px;
  margin-bottom:20px;
  text-align:center;
  color: white;
`

// Slider Section 

export const trackH = "0.4em";
export const thumbD = "1.5em";
export const trackC = "#58D68D";
export const filllC = "#58D68D";

export const track = css`
  box-sizing: border-box;
  border: none;
  height: 4px;
  background: ${trackC};
  border-radius: 8px;
`;

export const trackFill = css`
  ${track};
  height: 5px;
  background-color: transparent;
  background-image: linear-gradient(${filllC}, ${filllC}),
    linear-gradient(${trackC}, ${trackC});
  background-size: var(--sx) 6px, calc(100% - var(--sx)) 4px;
  background-position: left center, right center;
  background-repeat: no-repeat;
`;

export const fill = css`
  height: ${trackH};
  background: ${filllC};
  border-radius: 4px;
`;

export const thumb = css`
  box-sizing: border-box;
  border: none;
  width: ${thumbD};
  height: ${thumbD};
  border-radius: 50%;
  background: #1C2833;
  box-shadow: 0px 0px 5px rgba(66, 97, 255, 0.5);
`;

export const Input = styled.input`
  &,
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none;
  }

  &:focus::-webkit-slider-thumb {
    outline: -webkit-focus-ring-color auto 5px;
  }

  &:focus::-moz-range-thumb {
    outline: -webkit-focus-ring-color auto 5px;
  }

  &:focus::-ms-thumb {
    outline: -webkit-focus-ring-color auto 5px;
  }

  --range: calc(var(--max) - var(--min));
  --ratio: calc((var(--val) - var(--min)) / var(--range));
  --sx: calc(0.5 * ${thumbD} + var(--ratio) * (100% - ${thumbD}));

  margin: 0;
  padding: 0;
  height: ${thumbD};
  background: transparent;
  font: 1em/1 arial, sans-serif;

  &::-webkit-slider-runnable-track {
    ${trackFill};
  }

  &::-moz-range-track {
    ${track};
  }

  &::-ms-track {
    ${track};
  }

  &::-moz-range-progress {
    ${fill};
  }

  &::-ms-fill-lower {
    ${fill};
  }

  &::-webkit-slider-thumb {
    margin-top: calc(0.5 * (${trackH} - ${thumbD}));
    ${thumb};
  }

  &::-moz-range-thumb {
    ${thumb};
  }

  &::-ms-thumb {
    margin-top: 0;
    ${thumb};
  }

  &::-ms-tooltip {
    display: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }
`;
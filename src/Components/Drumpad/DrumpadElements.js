import styled from "styled-components"

export const PadButton = styled.button`
  background-color: #1C2833;
  color: white;
  border: 0px solid rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  padding: 25px;
  font-size: 30px;
  text-align: center;
  outline: none;

  :hover {
    box-shadow: 0px 0px 31px -11px rgba(202,207,210,1);
  }

  ::after {
    background-color: grey;
  }
`;
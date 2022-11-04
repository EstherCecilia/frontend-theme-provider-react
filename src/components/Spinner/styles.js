import styled, { keyframes } from "styled-components";

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const StyledSpinner = styled.div`
  width: 25px;
  height: 25px;
  margin: 20px auto;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left: 4px solid #000;
  border-right: 4px solid #000;
  animation: ${rotate} 1s linear infinite forwards;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -o-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
`;

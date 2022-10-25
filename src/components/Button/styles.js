import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primaryColor};
  color: white;
  font-size: 16px;
  padding: 16px 30px;
  border: none;
  border-radius: 5px;
  text-align: center;
`;

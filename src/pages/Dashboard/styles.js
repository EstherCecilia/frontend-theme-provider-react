import styled from "styled-components";

export const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  height: 5vh;
  width: 100vw;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.primaryColor};
  display: flex;
  justify-content: space-between;
  p {
    color: white;
  }
  .logout {
    cursor: pointer;
    margin-right: 30px;
  }
`;

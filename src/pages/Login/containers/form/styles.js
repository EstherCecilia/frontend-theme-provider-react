import styled from "styled-components";

export const SectionForm = styled.section`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  padding: 177px 130px 33px 95px;
  width: 18vw;
  height: 50vh;
  h1 {
    font-size: 28px;
    color: ${(props) => props.theme.colors.primaryColor};
    text-align: center;
    margin-bottom: 12vh;
  }
`;

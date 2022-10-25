import React from "react";
import { Form } from "./containers/Form";
import * as S from "./styles";

export const Login = () => {
  return (
    <S.StyledLogin className="login">
      <Form />
    </S.StyledLogin>
  );
};
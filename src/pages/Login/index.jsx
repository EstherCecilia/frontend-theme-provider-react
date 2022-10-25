import React from "react";
import { Form } from "./containers/form";
import * as S from "./styles";

export const Login = () => {
  return (
    <S.StyledLogin className="login">
      <Form />
    </S.StyledLogin>
  );
};

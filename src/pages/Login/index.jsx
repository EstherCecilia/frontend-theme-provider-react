import React from "react";
import { Form } from "./containers/Form";
import { Load } from "./containers/Load";
import { useLogin } from "./hooks/useLogin";
import * as S from "./styles";

export const Login = () => {
  const { isSynced } = useLogin();
  return (
    <S.StyledLogin className="login">
      {isSynced ? <Load /> : <Form />}
    </S.StyledLogin>
  );
};

import React from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";
import { useLogin } from "../../hooks/useLogin";
import * as S from "./styles";

export const Form = () => {
  const navigate = useNavigate();
  const { email, password, setEmail, setPassword, onLogin } = useLogin();
  return (
    <S.SectionForm className="section-form">
      <h1>Login</h1>
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        label="Entrar"
        onClick={() => onLogin(email, password, navigate)}
      />
    </S.SectionForm>
  );
};

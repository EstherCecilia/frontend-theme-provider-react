import React from "react";
import * as S from "./styles";

export const Button = ({ label, disabled, onClick }) => {
  return (
    <S.StyledButton disabled={disabled} type="button" onClick={onClick}>
      {label}
    </S.StyledButton>
  );
};

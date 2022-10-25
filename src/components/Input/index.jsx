import React from "react";
import * as S from "./styles";

export const Input = ({ id, placeholder, type = "text", value, onChange }) => {
  return (
    <S.StyledInput className="div-input">
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
      />
      <br />
      <br />
    </S.StyledInput>
  );
};

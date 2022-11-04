import React from "react";
import { Spinner } from "../../../../components/Spinner";
import * as S from "./styles";

export const Load = () => {
  return (
    <S.StyledContainer>
      <Spinner />
      <p>Sincronizando tema...</p>
    </S.StyledContainer>
  );
};

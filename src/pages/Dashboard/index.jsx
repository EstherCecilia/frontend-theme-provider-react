import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <S.StyledHeader>
        <p>Dashboard</p>

        <p className="logout" onClick={() => navigate("/")}>
          sair
        </p>
      </S.StyledHeader>
    </div>
  );
};

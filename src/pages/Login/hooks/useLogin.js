import { useState } from "react";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (emai, password, navigate) => {
    if (email && password) {
      navigate("/dash");
    } else {
      alert("Preencha os campos corretamente!");
    }
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    onLogin,
  };
};

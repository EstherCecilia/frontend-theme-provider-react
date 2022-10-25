import { useState } from "react";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

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
    loading,
    setEmail,
    setPassword,
    onLogin,
  };
};

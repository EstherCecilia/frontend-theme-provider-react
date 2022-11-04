import { useEffect, useState } from "react";
import { useTheme } from "../../../hooks/GlobalThemeProvider";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSynced, setIsSynced] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    if (!theme.default) {
      setIsSynced(false);
    }
  }, [theme]);

  const onLogin = async (emai, password, navigate) => {
    if (email && password) {
      navigate("/dash");
    } else {
      alert("Preencha os campos corretamente!");
    }
  };

  return {
    isSynced,
    email,
    password,
    setEmail,
    setPassword,
    onLogin,
  };
};

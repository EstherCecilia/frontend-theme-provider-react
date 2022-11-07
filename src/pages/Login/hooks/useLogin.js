import { useEffect, useState } from "react";
import { useTheme } from "../../../hooks/GlobalThemeProvider";
import { login } from "../../../services/api/login";

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
      const user = await login({ email, password });
      if (user?.status) {
        navigate("/dash");
      } else {
        const errorMessage = user?.error || "Ops!";

        alert(errorMessage);
      }
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

import React, { useEffect, createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../services/api/theme";

const default_style = {
  default: true,
  id: "3082492f-5d87-48c4-8152-9ba37d829cd5",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdc_pViMeba37-qxWAWLBm1Bn5XeQWZoadWA&usqp=CAU",
  colors: {
    primaryColor: "#2E331F",
    secondaryColor: "#363537",
  },
};

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(default_style);
  const [domain, setDomain] = useState("");

  const handleTheme = async (subDomain) => {
    const customerProfile = await getTheme(subDomain);
    localStorage.setItem("customerProfile", JSON.stringify(customerProfile));

    const localTheme = localStorage.getItem("customerProfile");

    if (localTheme) {
      setTheme(JSON.parse(localTheme));
    } else {
      setTheme(default_style); // É uma opção que o back trate o valor default
    }
  };

  useEffect(() => {
    const subDomain = window.location.href; //Pega subdominio

    if (domain !== subDomain) {
      setDomain(subDomain);
      handleTheme(subDomain);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

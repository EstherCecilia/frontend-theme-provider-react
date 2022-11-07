import React, { useEffect, createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { default_style } from "../../constants/defaultProfile";
import { getTheme } from "../../services/api/theme";

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
    const hostname = window.location.hostname;
    const namesHostname = hostname.split(".");
    const subDomain = namesHostname[0];

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

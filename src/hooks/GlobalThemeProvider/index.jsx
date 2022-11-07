import React, { useEffect, createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { defaultStyle } from "../../constants/defaultProfile";
import { getTheme } from "../../services/api/theme";

const ThemeContext = createContext();

const getLocalTheme = () => {
  const localTheme = localStorage.getItem("customerProfile");

  if (localTheme) {
    return JSON.parse(localTheme);
  } else {
    return defaultStyle;
  }
};
export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => getLocalTheme());
  const [domain, setDomain] = useState("");

  const handleTheme = async (subDomain) => {
    const customerProfile = await getTheme(subDomain);
    localStorage.setItem("customerProfile", JSON.stringify(customerProfile));

    const localTheme = getLocalTheme();

    setTheme(localTheme);
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

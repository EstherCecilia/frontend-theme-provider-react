import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login, Dashboard } from "../pages";
import { CustomThemeProvider } from "../hooks/GlobalThemeProvider";

export function Router() {
  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dash" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </CustomThemeProvider>
  );
}

export default Router;

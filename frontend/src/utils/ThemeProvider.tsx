"use client";
import React from "react";

import { ThemeProvider } from "next-themes";

export const Provider = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

import { createGlobalStyle, ThemeProvider } from "styled-components";
import React, { useState, useEffect } from "react";
import GlobalStyle from "../styles/GlobalStyle";
import Layout from "@/components/layout";
import { darkTheme, lightTheme } from "../styles/theme.config";

export default function App({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Layout>{isMounted && <Component {...pageProps} />}</Layout>
    </ThemeProvider>
  );
}

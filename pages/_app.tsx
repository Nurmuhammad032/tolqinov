import { useState } from "react";
import { Footer, Navbar } from "../components";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }: AppProps) {
  const [selectedLang, setSelectedLang] = useState("ru");
  return (
    <>
      <Navbar selectedLang={selectedLang} setSelectedLang={setSelectedLang} />
      <Component {...pageProps} />
      <Footer selectedLang={selectedLang} setSelectedLang={setSelectedLang} />
    </>
  );
}

export default appWithTranslation(App);

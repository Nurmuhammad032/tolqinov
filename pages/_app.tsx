import React, { useState, useEffect } from "react";
import { Footer, Loading, Navbar } from "../components";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  const [selectedLang, setSelectedLang] = useState("ru");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  useEffect(() => {
    if (loading) {
      document.querySelector("html")!.style.overflow = "hidden";
    } else {
      document.querySelector("html")!.style.overflow = "auto";
    }
  }, [loading]);
  return (
    <>
      <Head>
        <title>
          Exim | Изготовление памятников и мемориальных комплексов с гарантией
          до 10 лет
        </title>
        <link
          rel="icon"
          href="/images/favicon.png"
          type="image/png"
          sizes="128x128"
        />
      </Head>
      {loading && <Loading />}
      <Navbar selectedLang={selectedLang} setSelectedLang={setSelectedLang} />
      <Component {...pageProps} />
      <Footer selectedLang={selectedLang} setSelectedLang={setSelectedLang} />
      <ToastContainer position="top-right" />
    </>
  );
}

export default appWithTranslation(App);

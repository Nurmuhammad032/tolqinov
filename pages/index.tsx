import { About, Advantages, Contact, Hero, Uslugi } from "../sections";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <About />
      <Uslugi />
      <Contact />
    </>
  );
}

// @ts-ignore
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

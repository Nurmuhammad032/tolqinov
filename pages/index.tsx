import { Stepper } from "../components";
import { About, Advantages, Contact, Hero, Uslugi } from "../sections";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="sections xl:hidden" id="stepper">
        <div className="container">
          <Stepper />
        </div>
      </section>
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

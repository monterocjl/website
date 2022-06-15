import { createRef } from "react";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import ICantHelpYou from "../components/ICantHelpYou/ICantHelpYou";
import Layout from "../components/Layout/Layout";
import Quote from "../components/Quote/Quote";
import Services from "../components/Services/Services";
import WhyWithMe from "../components/WhyWithMe/WhyWithMe";

export default function Home() {
  const scrollDiv = createRef();

  function scrollSmoothHandler() {
    scrollDiv.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Layout
      title='Juan Montero - Desarrollador Web y Diseñador UX/UI'
      description='Desarrollador Web y Diseñador UX/UI'
      scrollSmoothHandler={scrollSmoothHandler}
    >
      <Banner />
      <ICantHelpYou />
      <Services />
      <WhyWithMe />
      <Quote />
      <Contact scrollDiv={scrollDiv} />
    </Layout>
  );
}

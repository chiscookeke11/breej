import Hero from "../../components/landing_page_components/Hero";
import OurPartners from "../../components/landing_page_components/OurPartners";
import StatsComponent from "../../components/landing_page_components/Stats";
import Testimonials from "../../components/landing_page_components/Testimonials";
import TopCompanies from "../../components/landing_page_components/TopCompanies";
import WhatMatters from "../../components/landing_page_components/WhatMatters";
import Why_Recruiters from "../../components/landing_page_components/Why_Recruiters";

export default function Home() {
  return (
    <>
      <Hero />
      <OurPartners />
      <TopCompanies />
      <StatsComponent />
      <WhatMatters />
      <Why_Recruiters />
      <Testimonials />
    </>
  );
}


import Hero from "../../components/Hero";
import OurPartners from "../../components/OurPartners";
import StatsComponent from "../../components/Stats";
import TopCompanies from "../../components/TopCompanies";
import WhatMatters from "../../components/WhatMatters";
import Why_Recruiters from "../../components/Why_Recruiters";

export default function Home() {
  return (
    <>
      <Hero />
      <OurPartners />
      <TopCompanies />
      <StatsComponent />
      <WhatMatters />
      <Why_Recruiters />
    </>
  );
}


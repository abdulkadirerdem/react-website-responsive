import React from "react";
import HeroSection from "../../heroSection";
import Pricing from "../../Pricing.js";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";

function Services() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Services;

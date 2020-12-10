import React, { useEffect } from "react";
import ExploreFeature from "../coms/ButtonDirect/ExploreFeature";
import MainMessage from "../coms/MainMessage/MainMessage";
import SampleCardLayout from "../coms/SampleCardLayout/SampleCardLayout";

const HomePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <>
      <MainMessage />
      <SampleCardLayout />
      <ExploreFeature />
    </>
  );
};

export default HomePage;

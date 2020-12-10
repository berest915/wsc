import React from "react";
import { MansoryWrapper } from "./Mansories/MansoryStyles";
import MansoriesProps from "./Mansories/MansoriesProps";
import Mansory from "./Mansories/Mansory";

const Mansories = () => {
  return (
    <>
      <MansoryWrapper>
        {MansoriesProps.map(mansory => (
          <Mansory key={mansory.mansoryIndex} mansory={mansory} />
        ))}
      </MansoryWrapper>
    </>
  );
};

export default Mansories;

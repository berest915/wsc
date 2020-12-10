import React, { useState } from "react";

import { FaqContainer } from "./Styles";

import FaqItems from "./FaqItems";
import Faq from "./Faq";

const Faqs = () => {
  const [FaqItemStates, setFaqItemStatas] = useState(FaqItems);

  const toggleOpenClose = onClickIndex => {
    setFaqItemStatas(
      FaqItemStates.map((faq, i) => {
        if (onClickIndex === i) {
          // current either open/close
          faq.isOpen = !faq.isOpen;
        } else {
          // other close
          faq.isOpen = false;
        }
        return faq;
      })
    );
  };

  return (
    <>
      <div style={{ backgroundColor: "rgb(248,249,250)" }}>
        <FaqContainer>
          <div className='accordion-about' >Frequently Asked Question</div>
          {FaqItemStates.map((faq, i) => (
            <Faq
              key={i}
              index={i}
              faq={faq}
              toggleOpenClose={toggleOpenClose}
            />
          ))}
        </FaqContainer>
      </div>
    </>
  );
};

export default Faqs;

import React from "react";
import Accordion from "./Accordion";
import { AccordionPropsChildren } from "./FaqStyles";
import ItemLinks from "./ItemLinks";

const Faq = ({ faq, index, toggleOpenClose }) => {
  return (
    <>
      <Accordion
        title={faq.title}
        isOpen={faq.isOpen}
        onClickIndex={index}
        toggleOpenClose={toggleOpenClose}
      >
        {!Array.isArray(faq.content) ? (
          <AccordionPropsChildren isLinks={false}>
            <div className="not-link-pad">{faq.content}</div>
          </AccordionPropsChildren>
        ) : (
          <>
            {faq.content.map((item, index) => (
              <ItemLinks key={index} item={item} />
            ))}
          </>
        )}
      </Accordion>
    </>
  );
};

export default Faq;

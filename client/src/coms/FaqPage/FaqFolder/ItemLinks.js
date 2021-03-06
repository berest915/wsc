import React from "react";
import { AccordionPropsChildren } from "./FaqStyles";

const ItemLinks = ({ item }) => {
  const { linkTitle, link } = item;
  return (
    <AccordionPropsChildren isLinks={true}>
      <a
        className="link link-pad"
        href={link}
        rel="noopener noreferrer"
        target="_blank"
      >
        {linkTitle}
      </a>
    </AccordionPropsChildren>
  );
};

export default ItemLinks;

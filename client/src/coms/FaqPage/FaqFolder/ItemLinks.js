import React from "react";
import { AccordionPropsChildren } from "./Styles";

const ItemLinks = ({ item }) => {
  const { linkTitle, link } = item;
  return (
    <AccordionPropsChildren isLinks={true}>
      <a
        className="link"
        href={link}
        rel="noopener noreferrer"
        target="_blank"
        style={{ padding: "18px 30px" }}
      >
        {linkTitle}
      </a>
    </AccordionPropsChildren>
  );
};

export default ItemLinks;

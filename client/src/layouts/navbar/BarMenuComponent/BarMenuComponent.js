import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { BurgerDiv, MobileSidebar } from "./BarMenuStyles";
const BarMenuComponent = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <BurgerDiv onClick={toggleSidebar}>
        <FaIcons.FaBars />
      </BurgerDiv>
      <MobileSidebar sidebar={sidebar}>
        <li className="close-bar-menu">
          <div className="logo-div">
            <i className="fab fa-whatsapp" />
            <span className="caption">clone*</span>
          </div>
          <AiIcons.AiOutlineClose
            className="close-icon"
            onClick={toggleSidebar}
          />
        </li>
        <Link to="/wsc" className="bar-menu-item" onClick={toggleSidebar}>
          HOME
        </Link>
        <a
          className="bar-menu-item"
          href="https://woocel-v0.web.app"
          rel="noopener noreferrer"
          target="_blank"
          alt="woocel personal project"
          onClick={toggleSidebar}
        >
          WSCHAT WEB
        </a>
        <Link
          to="/wsc/feature"
          className="bar-menu-item"
          onClick={toggleSidebar}
        >
          FEATURES
        </Link>
        <Link to="/wsc/faq" className="bar-menu-item" onClick={toggleSidebar}>
          FAQ
        </Link>
      </MobileSidebar>
    </>
  );
};

export default BarMenuComponent;

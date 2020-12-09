import React from "react";
import { Link } from "react-router-dom";

import { Nav, LeftContainer, RightContainer } from "./Styles";
import { useBreakpoint } from "../../IndexContextProvider/breakpoint";

import BarMenuComponent from "./BarMenuComponent/BarMenuComponent";

const Navbar = () => {
  const breakpoints = useBreakpoint();

  // media-controlled rendered-coms
  let isSm;
  Object.keys(breakpoints).map(media => {
    if (media === "sm" && breakpoints[media] === true) {
      isSm = true;
    }
    return null;
  });

  return (
    <>
      <Nav>
        <LeftContainer>
          <Link to="/wsc" className="logo-title nav-link">
            <i className="logo fab fa-whatsapp" aria-hidden="false" />
            <div className="title-wrap">
              <span className="title">WsChat</span>
              <span className="caption">clone*</span>
            </div>
          </Link>
        </LeftContainer>
        <RightContainer>
          {isSm ? (
            <BarMenuComponent />
          ) : (
            <>
              <Link to="/wsc" className="nav-link first-child">
                HOME
              </Link>
              <a
                className="nav-link"
                href="https://woocel-v0.web.app"
                rel="noopener noreferrer"
                target="_blank"
                alt="woocel personal project"
              >
                WSCHAT WEB
              </a>
              <Link to="/wsc/feature" className="nav-link">
                FEATURES
              </Link>
              <Link to="/wsc/faq" className="nav-link">
                FAQ
              </Link>
            </>
          )}
        </RightContainer>
      </Nav>
    </>
  );
};

export default Navbar;

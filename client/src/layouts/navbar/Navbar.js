import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Nav, LeftContainer, RightContainer } from "./Styles";

const Navbar = () => {
  // const breakpoints = useBreakpoint();

  // // media-controlled rendered-coms
  // let isMd;
  // Object.keys(breakpoints).map(media => {
  // 	if (media === 'md' && breakpoints[media] === true) {
  // 		isMd = true;
  // 	}
  // 	return null;
  // });

  // modal-about
  const [showAbout, setShowAbout] = useState(false);

  const handleShowAbout = () => setShowAbout(true);
  const handleCloseAbout = () => setShowAbout(false);

  return (
    <>
      <Nav>
        <LeftContainer>
          <Link to="/" className="logo-title nav-link">
            <i className="logo fab fa-whatsapp" aria-hidden="false"></i>
            <div className="title-wrap">
              <span className="title">WsChat</span>
              <span className="caption">clone*</span>
            </div>
          </Link>
        </LeftContainer>
        <RightContainer>
          <Link to="/" className="nav-link first-child">
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
          <Link to="/feature" className="nav-link">
            FEATURES
          </Link>
          <Link to="/faq" className="nav-link">
            FAQ
          </Link>

          {/* {!isMd ? (
						<Menu
							handleShowAbout={handleShowAbout}
							handleShowSupport={handleShowSupport}
							handleShowContact={handleShowContact}
						/>
					) : (
						<BurgerMenu
							handleShowAbout={handleShowAbout}
							handleShowSupport={handleShowSupport}
							handleShowContact={handleShowContact}
						/>
					)} */}
        </RightContainer>
      </Nav>
      {/* {showAbout && (
				<AboutModal show={showAbout} handleClose={handleCloseAbout} />
			)} */}
    </>
  );
};

export default Navbar;

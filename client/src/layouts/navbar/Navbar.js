import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Nav, LeftContainer, Span, RightContainer } from './Styles';
// import AboutModal from '../modal/AboutModal';
// import Menu from './Menu';
// import BurgerMenu from './BurgerMenu/BurgerMenu';

// import { useBreakpoint } from '../../IndexContextProvider/breakpoint';

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
					<Link to='/' className='logo-title nav-link'>
						<i className='logo fab fa-whatsapp' aria-hidden="false"></i>
						<div className='title-wrap'>
							<span className='title' >WsChat</span>
							<span className='caption' >clone*</span>
						</div>
					</Link>
				</LeftContainer>
				<RightContainer>
					<Link to='/feature' className='nav-link first-child'>
						WSCHAT WEB
					</Link>
					<Link to='/feature' className='nav-link'>
						FEATURES
					</Link>
					<Link to='/faq' className='nav-link'>
						FAQ
					</Link>
					<Link to='/feature' className='nav-link'>
						REFERENCE
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

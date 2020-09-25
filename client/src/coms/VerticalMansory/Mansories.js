import React from 'react';
import styled from 'styled-components';

import { MansoryWrapper, MansoryBrick, BrickContent, BrickImage, BrickCaption } from './Mansories/Styles';
import { MansoriesProps } from './Mansories/MansoriesProps';
import Mansory from './Mansories/Mansory';

const Mansories = () => {
	// let Container = styled.div`
	//  display: flex;
	// flex-flow: column wrap;
	// max-height: 300px;
	// margin-left: -8px; /* Adjustment for the gutter */
	// width: 100%;
	// `
	// let Bricks = styled.div`
	//   margin: 0 8px 8px 0; /* Some gutter */
	//   height: ${props=> props.h};
	// 	color: white;
	//   background-color: blue;
	// 	width: 50%;
	// `

	return (
		<>
			{/* <Container> */}
			{/* <div style={{height: '100px', width: '50%', backgroundColor: 'red', margin: '0 8px 8px 0'}} ></div>

			 <div style={{height: '80px', width: '50%', backgroundColor: 'gray', margin: '0 8px 8px 0'}} ></div>

			 <div style={{height: '130px', width: '50%', backgroundColor: 'blue', margin: '0 8px 8px 0'}} ></div>

			 <div style={{height: '200px', width: '50%', backgroundColor: 'black', margin: '0 8px 8px 0'}} ></div>

			 <div style={{height: '50px', width: '50%', backgroundColor: 'silver', margin: '0 8px 8px 0'}} ></div>

			 <div style={{height: '100px', width: '50%', backgroundColor: 'gray', margin: '0 8px 8px 0'}} ></div>

			 <div style={{height: '80px', width: '50%', backgroundColor: 'blue', margin: '0 8px 8px 0'}} ></div> */}

			{/* <Bricks h='60px'>1</Bricks>
      <Bricks h='100px'>2</Bricks>
      <Bricks h='80px'>3</Bricks>
      <Bricks h='23px'>4</Bricks>
      <Bricks h='36px'>5</Bricks>
      <Bricks h='63px'>6</Bricks>
      <Bricks h='93px'></Bricks> */}
			{/* </Container> */}
			<MansoryWrapper>
				{MansoriesProps.map((mansory, index) => (
					<Mansory key={index} mansory={mansory} />
				))}
				{/* <MansoryBrick yPad='58px 0 34px 0' bgColor='pink'>
				<BrickContent xPad='0 12%' enPadding flexOrder='1'>
					<div className='minor-title'>TEXTS</div>
					<div className='title'>Simple, Reliable Messaging</div>
					<div className='p'>
						Message your friends and family for free*. WhatsApp uses your
						phone's Internet connection to send messages so you can avoid SMS
						fees.
					</div>
				</BrickContent>

				<BrickImage flexOrder='2' />
				<BrickCaption>
					* Data charges may apply. Contact your provider for details.
				</BrickCaption>
			</MansoryBrick> */}
			</MansoryWrapper>
		</>
	);
};

export default Mansories;

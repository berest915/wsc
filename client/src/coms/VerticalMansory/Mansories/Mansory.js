import React from 'react';
import { MansoryBrick, BrickContent, BrickImage, BrickCaption } from './Styles';

const Mansory = ({ mansory }) => {
	const {
		mansoryIndex,
		padTop,
		padBottom,
		bgColor,
		comBrickContent,
		comBrickImage,
		comBrickCaption,
	} = mansory;

	//* bcont <=  order,  hasAnotherCap, minorTitle, title, p
	let bcont = comBrickContent;
	const { minorTitle, title, p } = bcont;

	//* bimg <=  order,  srcImage
	let bimg = comBrickImage;
	const { srcImage } = bimg;

	//* bcap <=  order,  caption
	let bcap = comBrickCaption;
	const { caption } = bcap;

	return (
		<>
			<MansoryBrick padTop={padTop} padBottom={padBottom} bgColor={bgColor}>
				<BrickContent
					flexOrder={bcont.order}
					xPad='0 12%'
					mansoryIndex={mansoryIndex}
				>
					<div className='minor-title'>{minorTitle}</div>
					<div className='title'>{title}</div>
					<div className='p'>{p}</div>
				</BrickContent>

				<BrickImage
					srcImage={srcImage}
					flexOrder={bimg.order}
					mansoryIndex={mansoryIndex}
				/>

				{bcap.order && (
					<BrickCaption flexOrder={bcap.order} mansoryIndex={mansoryIndex}>
						{caption}
					</BrickCaption>
				)}
			</MansoryBrick>
		</>
	);
};

export default Mansory;

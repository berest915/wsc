import React from 'react';
import { MansoryBrick, BrickContent, BrickImage, BrickCaption } from './Styles';

const Mansory = ({ mansory }) => {
	const {
		padTop,
		padBottom,
		bgColor,
		comBrickContent,
		comBrickImage,
    comBrickCaption,
    cls
	} = mansory;

	//* bcont <=  order,  hasAnotherCap, minorTitle, title, p
	let bcont = comBrickContent;
	const { hasAnotherCap, minorTitle, title, p } = bcont;

	//* bimg <=  order,  srcImage
	let bimg = comBrickImage;
	const { srcImage } = bimg;

	//* bcap <=  order,  caption
	let bcap = comBrickCaption;
	const { caption } = bcap;

	return (
		<>
			<MansoryBrick padTop={padTop} padBottom={padBottom} bgColor={bgColor}>
				<BrickContent flexOrder={bcont.order} xPad='0 12%' enPadding>
					<div className='minor-title'>{minorTitle}</div>
					<div className='title'>{title}</div>
					<div className='p'>{p}</div>
				</BrickContent>

				<BrickImage srcImage={srcImage} flexOrder={bimg.order} checls={cls}/>

				{bcap.order && <BrickCaption flexOrder={bcap.order} >{caption}</BrickCaption>}
			</MansoryBrick>
		</>
	);
};

export default Mansory;

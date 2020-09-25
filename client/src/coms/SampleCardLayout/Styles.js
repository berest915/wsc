import styled, { css } from 'styled-components';
import cardZero from '../../images/cards/card-zero.png';
import cardFive from '../../images/cards/card-five.png';

//! css
const headingFontSize = css`
	font-size: 1.7rem;
`;
const paragraphFontSize = css`
	font-size: 1rem;
`;
const captionFontSize = css`
	font-size: 0.7rem;
	opacity: 0.4;
`;
const cardPadding = css`
	padding: 3rem 3rem 0 3rem;
`;
const contentMarginBig = css`
	margin: 2rem 0 1.2rem 0;
`;
const contentMarginSmall = css`
	margin: 1rem 0 0.3rem 0;
`;

//! styled
export const Wrapper = styled.div`
	height: 88vh;
	text-align: center;
	display: flex;
	font-size: 1rem;
	line-height: 1.5rem;
	a {
		text-decoration: none;
	}
`;
export const FlexItem = styled.div`
	width: 49%;
	background-color: #d0e9ea;
	background-color: ${props => props.bgColor === '1' ? '#d0e9ea':'#edf8f5'};
	display: flex;
	flex-direction: column;
	${props => props.pad && cardPadding};
`;
export const MarginDiv = styled.div`
	margin-left: auto;
`;
export const FlexItemTwo = styled.div`
	width: 49%;
	background-color: #edf8f5;
	display: flex;
	flex-direction: column;
	${props => props.pad && cardPadding};
`;
export const ContentDiv = styled.div`
	width: 100%;
	${props => props.pad && cardPadding};
	display: flex;
	flex-direction: column;
	.title {
		${headingFontSize};
	}
	.p1 {
		${paragraphFontSize};
		${contentMarginBig};
	}
	.caption {
		${captionFontSize};
		${props => props.nFlexItem === '2' && contentMarginSmall};
	}
`;
export const ImageRelativeContainer = styled.div`
	flex-grow: 1;
	position: relative;
	overflow: hidden;
`;
export const FirstImage = styled.div`
	background-image: url(${cardZero});
	background-position: 50% 0%;
	background-repeat: no-repeat;
	background-size: auto 354px;
	height: 354px;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
`;
export const SecondImage = styled.div`
	background-image: url(${cardFive});
	background-position: 50% 0%;
	background-repeat: no-repeat;
	background-size: auto 254px;
	height: 254px;
	width: 100%;
`;

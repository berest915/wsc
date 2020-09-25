import styled, { css } from 'styled-components';

//! css
const smTitleFontSize = css`
	font-size: 11px;
	opacity: 0.5;
	line-height: 17px;
	letter-spacing: 0.15em;
	font-weight: 500;
	margin-bottom: 7px;
	${props => props.mansoryIndex === '5' && `margin-top: 28px`};
	${props => props.mansoryIndex === '6' && `margin-top: 44px`};
	${props => props.mansoryIndex === '7' && `margin-top: 44px;`}
`;
const headingFontSize = css`
	font-size: 24px;
	line-height: 29px;
	letter-spacing: 0.05em;
	margin-bottom: 25px;
`;
const paragraphFontSize = css`
	font-size: 14px;
	line-height: 21px;
	${props => props.mansoryIndex !== '5' && `margin-bottom: 50px`};
`;
const captionFontSize = css`
	font-size: 12px;
	opacity: 0.4;
	line-height: 18px;
	font-weight: 500;
	/* 50px + (-20) => 30px */
	${props => props.mansoryIndex === '1' && `margin-top: 30px;`}
	${props => props.mansoryIndex === '4' && `margin-top: -20px;`}
`;

//! styled
export const MansoryWrapper = styled.div`
	//! vertical mansory
	display: flex;
	flex-flow: column wrap;
	max-height: 2800px;
	margin-left: -8px;
	width: 100%;

	text-align: center;
	font-size: 1rem;
	line-height: 1.5rem;
	font-weight: 300;

	a {
		text-decoration: none;
	}
`;
export const MansoryBrick = styled.div`
	margin: 0 8px 8px 0;
	width: 50%;
	min-height: 540px;
	display: flex;
	flex-direction: column;
	background-color: ${props => props.bgColor};
	padding-top: ${props => props.padTop};
	padding-bottom: ${props => props.padBottom};
`;
export const BrickContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	order: ${props => props.flexOrder};
	padding: 0 12%;
	.title {
		${headingFontSize};
	}
	.p {
		${paragraphFontSize};
	}
	.minor-title {
		${smTitleFontSize};
	}
`;

export const BrickImage = styled.div`
	/* shared-styles */
	background-image: url(${props => props.srcImage});
	background-position: 50% 0%;
	background-repeat: no-repeat;
	width: 100%;

	/* diff-styles */
	${props => {
		switch (props.mansoryIndex) {
			case '1':
				return `
					background-size: contain;
					height: 599px;
				`;
			case '2':
				return `
					background-size: 250px 295px;
					height: 293px;
					width: 100%;
				`;
			case '3':
				return `
					background-size: auto 386px;
					height: 386px;
					background-position-x: 80px; 
				`;
			case '4':
				return `
					background-size: auto 319px;
					height: 320px;
				`;
			case '5':
				return `
					background-size: auto 300px;
					height: 300px;
					border-radius: 50%;
				`;
			case '6':
				return `
					background-size: auto 271px;
					height: 271px;
				`;
			case '7':
				return `
					background-size: contain;
					height: 253px;
					width: 100%;
				`;
			case '8':
				return `
					background-size: contain;
					height: 202px;
					width: 100%;
				`;
			default:
				return `
					background-size: contain;
					height: 599px;
					width: 318px;
			`;
		}
	}}
	order: ${props => props.flexOrder};
`;
export const BrickCaption = styled.div`
	${captionFontSize};
	padding: '0 12%';
	order: ${props => props.flexOrder};
`;

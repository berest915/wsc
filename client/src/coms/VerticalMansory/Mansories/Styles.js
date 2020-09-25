import styled, { css } from 'styled-components';

//! css
const smTitleFontSize = css`
	font-size: 11px;
	opacity: 0.5;
	line-height: 17px;
	letter-spacing: 0.15em;
	font-weight: 500;
	margin-bottom: 7px;
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
	margin-bottom: 50px;
`;
const captionFontSize = css`
	font-size: 12px;
	opacity: 0.4;
	line-height: 18px;
	font-weight: 500;
	margin-top: 30px;
`;

//! styled
export const MansoryWrapper = styled.div`
	//! vertical mansory
	display: flex;
	flex-flow: column wrap;
	max-height: 3900px;
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
	/* height: 500px; */
	min-height: 540px;
	display: flex;
	flex-direction: column;
	background-color: ${props => props.bgColor};
	padding-top: ${props => props.padTop};
	padding-bottom: ${props => props.padBottom};
`;
//
export const BrickContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	order: ${props => props.flexOrder};
	padding: '0 12%';
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
	background-image: url(${props => props.srcImage});
	background-position: 50% 0%;
	background-repeat: no-repeat;
	background-size: auto 593px;
	height: 593px;
	width: 100%;
	order: ${props => props.flexOrder};
	${props =>
		props.checls &&
		`
		height: 350px;
		background-size: auto 350px;
		border-radius: 50%;
	`}
`;
export const BrickCaption = styled.div`
	${captionFontSize};
	padding: '0 12%';
	order: ${props => props.flexOrder};
`;

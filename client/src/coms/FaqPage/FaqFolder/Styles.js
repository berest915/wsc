import styled, { css } from 'styled-components';
import { WS_GREEN } from '../../../const/css-constant';

const accordionPropsPadding = css`
	padding: 18px 30px;
`;
const accordionLinkStyle = css`
	border-bottom: 1px solid lavender;
	:hover {
		cursor: pointer;
	}
	.link {
		text-decoration: none;
		color: gray;
		${accordionPropsPadding};
		display: block;
		:hover{
			transition: color 1s ease;
			color: black;
		}
	}
`;

export const FaqContainer = styled.div`
	width: 84%;
	max-width: 768px;
	margin: 0 auto;
`;
export const AccordionSection = styled.div`
	display: flex;
	flex-direction: column;
	font-family: 'Open Sans', sans-serif;
	font-weight: bold;
`;
export const AccordionTitle = styled.div`
	background-color: white;
	color: ${WS_GREEN};
	cursor: pointer;
	padding: 18px;
	display: flex;
	/* align-items: center; */
	border: none;
	outline: none;
	transition: background-color 0.6s ease;
	font-family: 'Open Sans', sans-serif;
	font-weight: 600;
	:hover {
		background-color: lavender;
	}
	${props => props.isOpen && 'background-color: lavender'};
`;

export const AccordionPropsChildren = styled.div`
	font-family: 'Open Sans', sans-serif;
	font-weight: 600;
	font-size: 14px;
	${props => !props.isLinks && accordionPropsPadding};
	${props => props.isLinks && accordionLinkStyle}
`;
export const AccordionContent = styled.div`
	background-color: white;
	overflow: hidden;
	transition: max-height 0.6s ease;
`;

import styled from 'styled-components';
import { FOOTER_FONT_COLOR } from '../../const/css-constant';

const { FOOTER_FONT_COLOR_ONE, FOOTER_FONT_COLOR_TWO } = FOOTER_FONT_COLOR;

export const Wrapper = styled.div`
	letter-spacing: 0.08em;
	.w-25 {
		width: 25%;
	}
	.title {
		font-size: 0.7rem;
		color: ${FOOTER_FONT_COLOR_TWO};
	}

	a {
		color: ${FOOTER_FONT_COLOR_ONE};
		font-size: 0.8rem;
		text-decoration: none;
		:hover {
			text-decoration: underline;
		}
	}
	@media (max-width: 800px){
		transition: all 0.3s ease 0s;
		.title{
			font-size: 0.65rem;
		}
		a{
			font-size: 0.75rem;
		}
	}
`;
export const TopContainer = styled.div`
	padding-top: 53px;
	padding-bottom: 40px;
	display: flex;
	flex-wrap: wrap;


	.row {
		margin-bottom: 6px;
	}
	.title {
		margin-bottom: 1.4rem;
	}
	.flex-wrap-width{
		width: 25%;
	}
	@media (max-width: 670px){
		.flex-wrap-width {
			width: 50%;
			padding: 1rem 0;
			border-bottom: 1px solid rgba(255,255,255,0.3);
		}
	}
	@media (max-width: 350px){
		.flex-wrap-width {
			width: 100%;
			margin-left: 1.5rem;
		}
	}
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
	padding: 23px 0;
	
	@media (max-width: 670px){
		flex-direction: column;
		align-items: initial;
	}
`;

import styled from 'styled-components';
import { NAV_BG, NAV_Z_INDEX, WHITE_VARIANT } from '../../const/css-constant';

const { WHITE_DARK } = WHITE_VARIANT;

export const Nav = styled.div`
	box-shadow: 0 2px 5px 0 lightgray;
	position: fixed;
	z-index: ${NAV_Z_INDEX};
	top: 0;
	right: 0;
	padding: 2vh 8%;
	width: 100%;
	height: 12vh;
	max-height: 12vh;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-family: Roboto 'san-serif';
	font-weight: 500;
	color: ${WHITE_DARK};
	background-color: ${NAV_BG};
`;
export const LeftContainer = styled.div`
	.logo-title {
		display: flex;
		cursor: pointer;
		color: white;
		.logo {
			padding-right: 1rem;
			font-size: 3rem;
		}
		.title-wrap {
			display: flex;
			.title {
				font-size: 2rem;
				padding-right: 0.5rem;
			}
			.caption {
				font-size: 0.9rem;
				color: ${WHITE_DARK};
				height: 100%;
			}
		}
	}
	.nav-link {
		text-decoration: none;
	}
`;
export const RightContainer = styled.div`
	margin-left: auto;

	display: flex;

	.nav-link {
		transition: all 0.3s ease 0s;
		margin: 0px 45px;
		cursor: pointer;
		text-decoration: none;
		color: ${WHITE_DARK};
	}
	.nav-link:hover {
		transition: all 0.3s ease 0s;
		color: white;
	}
`;

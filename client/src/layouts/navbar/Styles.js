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
	@media (max-width: 1080px) {
		padding: 2vh 4%;
	}
	@media (max-width: 670px) {
		background-color: #1ebea5;
	}
`;
export const LeftContainer = styled.div`
	.logo-title {
		display: flex;
		align-items: center;
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
	@media (max-width: 1000px) {
		.logo-title {
			transition: all 0.3s ease 0s;

			.logo {
				font-size: 2.25rem;
			}
			.title-wrap {
				.title {
					font-size: 1.5rem;
				}
				.caption {
					font-size: 0.675rem;
				}
			}
		}
	}
	@media (max-width: 840px) {
		.logo-title {
			.logo {
				padding-right: 0.5rem;
			}
		}
		.title-wrap {
			display: flex;
			flex-direction: column;
			.title {
				opacity: 0;
				order: 2;
			}
			.caption {
				order: 1;
			}
		}
	}
`;
export const RightContainer = styled.div`
	margin-left: auto;

	display: flex;
	font-size: 0.75rem;
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
	@media (min-width: 1000px) {
		.nav-link {
			font-size: 1rem;
		}
	}
	
	@media (max-width: 793px){
		.nav-link{
			margin: 0 35px;
		}
		.first-child{
			margin: 0 35px 0 0;
		}
	}
`;

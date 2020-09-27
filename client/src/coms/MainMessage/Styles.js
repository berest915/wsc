import styled from 'styled-components';
import cardOne from '../../images/cards/card-one.png';
import { WS_GREEN } from '../../const/css-constant'

export const Wrapper = styled.div`
	height: 88vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
	.w-46 {
		width: 46%;
	}
	.w-40 {
		width: 40%;
	}
`;
export const ContentDiv = styled.div`
	font-family: Roboto 'san-serif';
	.title {
		font-size: 2rem;
		font-weight: 300;
		margin: 1.5rem 0;
	}
	.p {
		font-size: 1.1rem;
	}
	.minor-p {
		opacity: 0.5;
		font-size: 1rem;
		margin: 1.5rem 0;
	}
`;
export const IContainer = styled.div`
	margin: 1rem 0;
	a {
		color: ${WS_GREEN};
		text-decoration: none;
    font-weight: 500;
    span{
      padding-left: 0.5rem;
    }
	}
`;
export const MainImage = styled.div`
	background-image: url(${cardOne});
	background-position: 50% 0%;
	background-repeat: no-repeat;
	background-size: auto 519px;
	height: 519px;
	width: 100%;
`;

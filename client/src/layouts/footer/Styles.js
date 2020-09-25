import styled from 'styled-components';
import { FOOTER_FONT_COLOR } from '../../const/css-constant';

const { FOOTER_FONT_COLOR_ONE, FOOTER_FONT_COLOR_TWO } = FOOTER_FONT_COLOR;

export const Wrapper = styled.div`
	letter-spacing: 0.08em;
	.w-25 {
		width: 25%;
	}
	.title {
		font-size: 0.75rem;
		color: ${FOOTER_FONT_COLOR_TWO};
	}

	a {
		color: ${FOOTER_FONT_COLOR_ONE};
		font-size: 0.875rem;
		text-decoration: none;
		:hover {
			text-decoration: underline;
		}
	}
`;
export const TopContainer = styled.div`
	padding-top: 53px;
	padding-bottom: 40px;
	display: flex;
	.row {
		margin-bottom: 6px;
	}
	.title {
		margin-bottom: 1.4rem;
	}
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 23px 0;
`;

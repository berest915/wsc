import styled from "styled-components";
import { CARD_PAD, BG_COLOR } from "./const/css-constant";

const { PAD_MINOR, PAD_MAJOR } = CARD_PAD;
const { FOOTER } = BG_COLOR;
const { FOOTER_BG_ONE, FOOTER_BG_TWO } = FOOTER;

export const EmSpacing = styled.div`
  width: 100%;
  ${props => props.nav && `height: 12vh`};
`;

export const MainCardContainer = styled.div`
  padding: ${props => (props.pad === "minor" ? PAD_MINOR : PAD_MAJOR)};
  background-color: ${props => {
    switch (props.darker) {
      case "yes":
        return `
					${FOOTER_BG_TWO}
				`;
      case "no":
        return `
					${FOOTER_BG_ONE}
				`;
      default:
        return ``;
    }
  }};
`;

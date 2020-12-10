import styled, { css } from "styled-components";
import { WS_GREEN } from "../../../const/css-constant";

//! css
const accordionLinkStyle = css`
  border-bottom: 1px solid lavender;
  :hover {
    cursor: pointer;
  }

  .link {
    text-decoration: none;
    color: gray;
    display: block;

    :hover {
      transition: color 1s ease;
      color: black;
    }
  }
`;

export const FaqContainer = styled.div`
  width: 84%;
  max-width: 768px;
  margin: 0 auto;

  .accordion-about {
    font-family: Roboto "san-serif";
    font-weight: 500;
    color: ${WS_GREEN};
    padding: 0.5rem 0.5rem 0.5rem 1rem;

    @media (max-width: 350px) {
      font-size: 14px;
    }
  }
`;

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Open Sans", sans-serif;
`;

export const AccordionTitle = styled.div`
  background-color: white;
  color: ${WS_GREEN};
  padding: 18px;
  display: flex;
  border: none;
  outline: none;
  transition: background-color 0.6s ease;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  ${props => props.isOpen && "background-color: lavender"};

  :hover {
    cursor: pointer;
    background-color: lavender;
  }

  @media (max-width: 350px) {
    padding: 12px;
    font-size: 12px;
  }
`;

export const ChevronWrapper = styled.div`
  margin-right: 15px;
  transition: transform 0.6s ease;
  ${props => props.isOpen && `transform: rotate(90deg)`};

  @media (max-width: 350px) {
    margin-right: 10px;
  }
`;

export const AccordionContent = styled.div`
  background-color: white;
  overflow: hidden;
  transition: max-height 0.6s ease;
`;

export const AccordionPropsChildren = styled.div`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 14px;
  ${props => props.isLinks && accordionLinkStyle};

  .not-link-pad,
  .link-pad {
    padding: 18px 30px;
    text-decoration: none;
  }

  @media (max-width: 350px) {
    font-size: 12px;
    .not-link-pad,
    .link-pad {
      padding: 12px 24px;
    }
  }
`;

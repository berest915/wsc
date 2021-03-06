import styled from "styled-components";
import searchBg from "../../../images/faq/faq-search-bg.jpg";
import { WS_GREEN } from "../../../const/css-constant";

//! styled
export const Background = styled.div`
  background-image: url(${searchBg});
  background-repeat: repeat;
  background-size: auto 270px;
  background-position: 50% 50%;
  width: 100%;
  height: 270px;

  @media (max-width: 670px) {
    height: 100%;
  }
`;

export const Container = styled.div`
  padding-top: 36px;
  margin: 0 7%;
  text-align: center;

  @media (max-width: 670px) {
    padding: 20px 0;
  }

  .title,
  .text {
    color: ${WS_GREEN};

    @media (max-width: 670px) {
      display: none;
    }
  }

  .title {
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 36px;
  }

  .text {
    font-size: 16px;
  }

  .input-div {
    input {
      padding: 1rem 2.5rem;
      border: 1px solid transparent;
      border-radius: 50px;
      width: 100%;
      max-width: 700px;
      font-size: 1rem;
      outline: none;
      margin-bottom: 38px;
      opacity: 0.5;
      ::placeholder {
        opacity: 0.6;
      }

      @media (max-width: 670px) {
        margin-bottom: 0;
        padding: 0.7rem 2rem;
      }
    }
  }
`;

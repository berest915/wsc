import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 700px;
  text-align: center;
  display: flex;
  font-size: 1rem;
  line-height: 1.5rem;

  @media (max-width: 670px) {
    flex-direction: column;
  }
`;

export const FlexItem = styled.div`
  width: 50%;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  padding-top: ${props => props.padTop};
  padding-bottom: ${props => props.padBtm};

  ${props =>
    props.cardIndex === "1" &&
    `
			position: relative;
			padding-bottom: 364px;
	`};

  @media (max-width: 670px) {
    width: 100%;
  }
`;

export const ContentDiv = styled.div`
  width: 100%;
  padding: 0 7%;
  display: flex;
  flex-direction: column;
  order: ${props => props.flexOrder};
  .title {
    font-size: 1.4rem;
    font-weight: 300;
    margin-bottom: 25px;
    ${props => props.cardIndex === "2" && `order: 2`};
  }

  .p {
    font-size: 0.875rem;

    a {
      text-decoration: none;
    }
  }

  .p1 {
    ${props => props.cardIndex === "1" && `margin-bottom: 1rem;`}
    ${props => props.cardIndex === "2" && `order: 3;`}
  }

  .p2 {
    margin-bottom: 50px;
  }

  .minor-title {
    font-size: 0.7rem;
    opacity: 0.5;
    margin-top: 4px;
    margin-bottom: 6px;
    ${props => props.cardIndex === "2" && `order: 1`};
  }
`;

export const ImageDiv = styled.div`
  order: ${props => props.flexOrder};
  background-image: url(${props => props.srcImage});
  background-repeat: no-repeat;
  background-position: 50% 0%;

  ${props => {
    switch (props.cardIndex) {
      case "1":
        return `
					background-size: auto 478px;
					height: 350px;
					width: 100%;
					position: absolute;
					left: 0;
					bottom: 0;
				`;
      case "2":
        return `
					background-size: auto 354px;
					height: 354px;
					width: 100%;
				`;
      default:
        return ``;
    }
  }}
`;

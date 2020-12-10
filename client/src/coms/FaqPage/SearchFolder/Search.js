import React from "react";
import { Background, Container } from "./SearchStyles";

const Search = () => {
  return (
    <>
      <Background>
        <Container>
          <div className="title">How can we help you?</div>
          <div className="input-div">
            <input type="text" placeholder="Type keywords to find answers" />
          </div>
          <div className="text">
            You can also browse the topics below to find what you are looking
            for.
          </div>
        </Container>
      </Background>
    </>
  );
};

export default Search;

import React from "react";
import { FlexItem, ContentDiv, ImageDiv } from "./SampleCardStyles";

const CardContent = ({ content }) => {
  const {
    cardIndex,
    padTop,
    padBtm,
    bgColor,
    comContentDiv,
    comImageDiv,
  } = content;

  const { title, a1, a2, p1, p2, minorTitle } = comContentDiv;
  const { srcImage, posImage } = comImageDiv;
  let content_div = comContentDiv;
  let image_div = comImageDiv;

  return (
    <>
      <FlexItem
        cardIndex={cardIndex}
        bgColor={bgColor}
        padTop={padTop}
        padBtm={padBtm}
        posImage={posImage}
      >
        <ContentDiv flexOrder={content_div.order} cardIndex={cardIndex}>
          <div className="title">{title}</div>
          <div className="p p1">
            {a1 && (
              <a
                href="https://www.whatsapp.com/business"
                rel="noopener noreferrer"
                target="_blank"
              >
                {a1}
              </a>
            )}
            {p1}
          </div>
          {p2 && (
            <div className="p p2">
              {p2}
              <span className="prevent-space-ignorant"></span>
              {a2 && (
                <a
                  href="https://www.whatsapp.com/business/api"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {a2}
                </a>
              )}
            </div>
          )}
          {minorTitle && <div className="minor-title">{minorTitle}</div>}
        </ContentDiv>
        <ImageDiv
          flexOrder={image_div.order}
          cardIndex={cardIndex}
          srcImage={srcImage}
        />
      </FlexItem>
    </>
  );
};

export default CardContent;

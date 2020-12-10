import React from "react";
import RowContent from "./RowContent";

const ColumnContent = ({ content: { title, rows } }) => {
  return (
    <>
      <div className="flex-wrap-width">
        <div className="title">{title}</div>
        <div className="rows">
          {rows.map((row, index) => (
            <RowContent key={index} row={row} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ColumnContent;

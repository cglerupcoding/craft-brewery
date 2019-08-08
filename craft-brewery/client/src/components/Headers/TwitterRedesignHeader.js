import React from "react";

// reactstrap components

// core components

function TwitterRedesignHeader() {
  return (
    <>
      <div
        className="page-header page-header-small"
        style={{
          backgroundImage:
            "url(" + require("assets/img/cheers.jpg") + ")"
        }}
      >
        <div className="filter" />
      </div>
    </>
  );
}

export default TwitterRedesignHeader;

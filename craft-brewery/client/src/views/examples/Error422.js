import React from "react";

// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";

function Error422() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("error-422");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("error-422");
    };
  });
  return (
    <>
      <ColorNavbar />
      <div
        className="background-img"
        style={{
          backgroundImage:
            "url(" + require("assets/img/bitter.jfif") + ")"
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <h1 className="title">
             <button>&lt;</button> 21 <br />
              <p className="error-msg">Sucks to be you</p>
            </h1>
          </Row>
          <div className="container-cards">
            <Row>
              <h5 className="discover-pages text-center">Please exit immediatly as your IP address has been saved and an email has been sent to your family and friends telling them what a failure you are at faking your age</h5>
              <br />
              <br />
              <br />
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Error422;

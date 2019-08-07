import React from "react";

// reactstrap components
import { Button, Container, Row, Input, Form } from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";

function Error500() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("error-500");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("error-500");
    };
  });
  return (
    <>
      <ColorNavbar />
      <div
        className="background-img"
        style={{
          backgroundImage:
            "url(" +
            require("assets/img/bitter.jfif") +
            ")"
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <h4 className="title">
              Legal Shit <br />
              <Form className="register-form">
                    <Input placeholder="Birthday" type="date" name="birthday"/>
                    <Button block className="btn-round" color="default">
                     Verify Age
                    </Button>
                  </Form>
              <p className="error-msg">
                Due to nature of this websites content we have to due some legal shit before letting you in.
                 <br />
                Please input your real birthdate so you can see the awesome stuff we have in our site. Happy Brewing Amigos!
              </p>
            </h4>
          </Row>
          <div className="container-cards space-top">
            <Row>
              <h5 className="discover-pages text-center">
                For you underage punks check out some other sites we reccomend
              </h5>
            </Row>
            <div className="offset-md-5 social-buttons">
              <Button
                className="btn-just-icon"
                color="facebook"
                href="https://www.facebook.com/CreativeTim?ref=creativetim"
                size="lg"
                target="_blank"
              >
                <i aria-hidden={true} className="fa fa-facebook" />
              </Button>
              <Button
                className="btn-just-icon"
                color="twitter"
                href="https://twitter.com/CreativeTim?ref=creativetim"
                size="lg"
                target="_blank"
              >
                <i aria-hidden={true} className="fa fa-twitter" />
              </Button>
              <Button
                className="btn-just-icon"
                color="linkedin"
                href="https://www.instagram.com/creativetimofficial/?ref=creativetim"
                size="lg"
                target="_blank"
              >
                <i aria-hidden={true} className="fa fa-linkedin" />
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Error500;

import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardTitle,
  Form,
  Input,
  Container,
  Row,
  NavItem,
  NavLink,
  Col
} from "reactstrap";

// core components
import MultiDropdownNavbar from "components/Navbars/MultiDropdownNavbar.js";

function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    document.body.classList.add("full-screen");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("register-page");
      document.body.classList.remove("full-screen");
    };
  });
  return (
    <>
      <MultiDropdownNavbar />
      <div className="wrapper">
        <div
          className="page-header"
          style={{
            backgroundImage:
              "url(" + require("assets/img/register.jpeg") + ")"
          }}
        >
          <div className="filter" />
          <Container>
            <Row>
              <Col className="ml-auto" lg="6" md="6" sm="7" xs="12">
                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="fa fa-map-signs" />
                  </div>
                  <div className="description">
                    <h3>Your One Stop Brewery Guide </h3>
                    <p>
                    Let Craft Brewery be your one stop guide to the best brews in your neighborhood. 
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="fa fa-music" />
                  </div>
                  <div className="description">
                    <h3>Plan your next Event</h3>
                    <p>
                     Find local events at your favorite bars and let your friend no where you have been.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="fa fa-user-secret" />
                  </div>
                  <div className="description">
                    <h3>We value your privacy</h3>
                    <p>
                      Using Complex State of the Art technology, we value your privacy and your data is encrypted and never sold.
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="mr-auto" lg="6" md="6" sm="5" xs="12">
                <Card className="card-register">
                  <CardTitle className="text-center" tag="h3">
                    Create a Profile
                  </CardTitle>
                  <div className="division">
                    <div className="line l" />
                
                    <div className="line r" />
                  </div>
                  <Form className="register-form">
                    <Input placeholder="Email" type="text" name="email" />
                    <Input placeholder="Birthday" type="date" name="birthday"/>
                    <Input placeholder="City" type="text" name="city" />
                    <Input placeholder="State" type="text" name="state"/>
               
                    <Input placeholder="Password" type="password" />
                    <Input placeholder="Confirm Password" type="password" />
                    <Button block className="btn-round" color="default">
                      Submit
                    </Button>
                  </Form>
                  <div className="login">
                <NavItem>
                <NavLink href="/login-page/">Already have an account? login</NavLink>
                </NavItem>                
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
          <div className="demo-footer text-center">
            <h6>
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-beer beer" /> by Team Dysfunctional
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;

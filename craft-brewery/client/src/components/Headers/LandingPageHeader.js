import React from "react";

// reactstrap components
import { 
  Container,
  FormGroup,
  Input,
  Col,
  Button,
  Card,
  CardBody,
  Row, 
  Form

 } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header"
        ref={pageHeader}
        style={{
          backgroundImage:
            "url(" + require("assets/img/DFW.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
        <div className="header-2">

          <div
            className="page-header"
            style={{
              backgroundImage:
                "url(" + require("assets/img/tap-wall.jpg") + ")"
            }}
          >
            <div className="filter" />
            <div className="content-center">
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="8">
                    <h1 className="title">Tap It DFW</h1>
                    <h5 className="description">
                      Now is the time to get social.  Find your new favorite DFW Brewery and keep up to date with the latest events.
                      
                    </h5>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </Col>
                  <Col className="ml-auto mr-auto" md="10">
                    <h4 id="search-head"><strong>Find a brewery near you.</strong></h4>
                    <Card className="card-raised card-form-horizontal no-transition">
                      <CardBody>
                        <Form action="" method="">
                          <Row>
                            <Col md="4">
                              <FormGroup>
                                <Input
                                  defaultValue=""
                                  placeholder="City"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col md="4">
                              <FormGroup>
                                <Input
                                  defaultValue=""
                                  placeholder="State"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>

                            <Col md="3">
                              <Button block color="danger" type="button">
                                <i className="nc-icon nc-zoom-split" /> Search
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;

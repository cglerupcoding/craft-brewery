import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import MultiDropdownNavbar from "components/Navbars/MultiDropdownNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import FooterWhite from "components/Footers/FooterWhite.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <MultiDropdownNavbar />
      <LandingPageHeader />
      <div className="wrapper">
        <div className="section text-center landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">My Events</h2>
        section
        <div className="section section-blog">
          <Container>
            <Row>
              <Col md="4">
                <Card className="card-blog">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/bitter.jfif")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="card-category text-info">Enterprise</h6>
                    <CardTitle tag="h5">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        LinkedIn’s new desktop app arrives
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      LinkedIn is today launching its official desktop
                      application for Windows 10, allowing the professional
                      social networking service to... <br />
                    </p>
                    <hr />
                    <CardFooter>
                      <div className="author">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="avatar img-raised mr-2"
                            src={require("assets/img/bitter.jfif")}
                            />
                          <span>Mike John</span>
                        </a>
                      </div>
                      <div className="stats">
                        <i className="fa fa-clock-o mr-1" />5 min read
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-blog">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/bitter.jfif")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="card-category text-success">Startups</h6>
                    <CardTitle tag="h5">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        MIT’s Cheetah 3 robot is built to save lives
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      The latest version of MIT’s Cheetah robot made its stage
                      debut today at TC Sessions: Robotics in Cambridge, Mass.
                      It’s a familiar project... <br />
                    </p>
                    <hr />
                    <CardFooter>
                      <div className="author">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="avatar img-raised mr-2"
                            src={require("assets/img/bitter.jfif")}
                            />
                          <span>Nickie Kelly</span>
                        </a>
                      </div>
                      <div className="stats">
                        <i className="fa fa-clock-o mr-1" />5 min read
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-blog">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/bitter.jfif")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="card-category text-danger">
                      <i className="fa fa-free-code-camp mr-1" />
                      Enterprise
                    </h6>
                    <CardTitle tag="h5">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Lionel Richie says “Hello” to startup investors
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      Because developing a doctor-on-demand service that would
                      allow personalized medical visits, booked through an app
                      on a user’s phone is... <br />
                    </p>
                    <hr />
                    <CardFooter>
                      <div className="author">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="avatar img-raised mr-2"
                            src={require("assets/img/bitter.jfif")}
                            />
                          <span>Mike John</span>
                        </a>
                      </div>
                      <div className="stats">
                        <i className="fa fa-clock-o mr-1" />5 min read
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* section */}

                <br />
                <Button
                  className="btn-fill btn-round"
                  color="danger"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  See Details
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center landing-section">
          <Container>
            <h2 className="title">Our Favorite Local Breweries</h2>
            <Row>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="https://www.deepellumbrewing.com/" target="_blank">
                      <img
                        alt="..."
                        src={require("assets/img/deep.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h5">Deep Ellum Brewing Co.</CardTitle>
                        <h6 className="card-category text-muted">
                          Dallas, TX
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    Largest independent brewery in North Texas and proud home of Dallas Blonde, Deep Ellum IPA, and many more stellar beers.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    {/* <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button> */}
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="https://rahrbrewing.com/" target="_blank">
                      <img
                        alt="..."
                        src={require("assets/img/Rahr-Brewery.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h5">Rahr & Sons Brewery</CardTitle>
                        <h6 className="card-category text-muted">Fort Worth, TX</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    Family-run craft brewery specializing in ales & lagers with a simple tasting room & Saturday tours.
                    </p>
                    <br />
                    <br />
                  </CardBody>
                  <CardFooter className="text-center">
                    {/* <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button> */}
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="https://www.communitybeer.com/" target="_blank">
                      <img
                        alt="..."
                        src={require("assets/img/community.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h5">Community Beer Co.</CardTitle>
                        <h6 className="card-category text-muted">Dallas, TX</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    A craft brewery and brew pub in ​Dallas, TX. 
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </CardBody>
                  <CardFooter className="text-center">
                    {/* <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button> */}
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="http://pantherislandbrewing.com/" target="_blank">
                      <img
                        alt="..."
                        src={require("assets/img/panther.jpeg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="http://pantherislandbrewing.com/" target="_blank">
                      <div className="author">
                        <CardTitle tag="h5">Panther Island Brewing</CardTitle>
                        <h6 className="card-category text-muted">Fort Worth, TX</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    Panther Island Brewing is a family owned and operated micro-brewery located on the banks of the Trinity River in Fort Worth, TX. 
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </CardBody>
                  <CardFooter className="text-center">
                    {/* <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button> */}
                    {/* <Button
                      className="btn-link btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button> */}
                    {/* <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button> */}
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          {/* <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <Input placeholder="Name" />
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <Input placeholder="Email" />
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="offset-md-4" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container> */}
        </div>
      </div>
      <FooterWhite />
    </>
  );
}

export default LandingPage;

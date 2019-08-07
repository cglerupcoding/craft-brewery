import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
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
        {/* section */}
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
            <h2 className="title">Most Reccomended Breweries</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/deep.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Deep Ellum Brewing Company</CardTitle>
                        <h6 className="card-category text-muted">
                          Dallas, TX
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    LARGEST INDEPENDENT BREWERY IN NORTH TEXAS AND PROUD HOME OF DALLAS BLONDE, DEEP ELLUM IPA, AND SO MANY MORE.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
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
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/bitter.jfif")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Bitter Sisters Brewery</CardTitle>
                        <br />
                        <h6 className="card-category text-muted">Addison, TX</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    Family-run craft brewery specializing in ales & lagers with a simple tasting room & Saturday tours.
                    </p>
                    <br />
                    <br />
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
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
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/outfit.jfif")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Outfit Brewery</CardTitle>
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
                    <Button
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
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Container>
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
          </Container>
        </div>
      </div>
      <FooterWhite />
    </>
  );
}

export default LandingPage;

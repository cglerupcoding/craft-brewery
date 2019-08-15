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
  Table,
  Col
} from "reactstrap";

// core components
import MultiDropdownNavbar from "components/Navbars/MultiDropdownNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import FooterWhite from "components/Footers/FooterWhite.js";


import axios from "axios";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "name",
      description: "description",
      locality: "city",
      streetAddress: "address",
      website: "website"
    };
  }
  handlebrewery = () => {    
    axios.post('/brewery',this.state).then(res => {
      console.log(res)
    })
    .catch (err => {
      alert("ruhroh raggy");
    })
  }
  handleChange = (event) => {
    const { name, value } = event.target || event.srcElement;
    this.setState({
      [name]: value
    });
  }
  
 render(){
  return (
    <>      <MultiDropdownNavbar />
      <LandingPageHeader />
      <div className="wrapper">
        <div className="section text-center landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                {/* <h2 className="title">Local Brewery Events</h2> */}
        {/* section */}
        <div className="section section-blog">
          <Container>
      
              <h4 className="title">
                <small>Breweries Near Me</small>
              </h4>
              <Table method="GET"> 
                <thead>
                  <tr>
                    <th onChange={this.handleChange} name="breweryname">Brewery Name</th>                               
                    <th onChange={this.handleChange} name="address">Adress</th>
                    <th onChange={this.handleChange} name="city">City</th>
                    <th onChange={this.handleChange} name="description">Description</th>
                    <th onChange={this.handleChange} name="website">Website</th>
                    
                  </tr>
                </thead>
                <tbody>

                </tbody>
              </Table>

          </Container>
        </div> 
        {/* section */}

                <br />
                <Button onClick={this.handleBrewery} block className="btn-round" color="default">
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
                    <a href="https://www.deepellumbrewing.com/" target="_blank" rel="noopener noreferrer" >
                      <img
                        alt="..."
                        src={require("assets/img/deep.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="https://www.deepellumbrewing.com/" onClick={e => e.preventDefault()}>
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
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="https://rahrbrewing.com/"target="_blank" rel="noopener noreferrer">
                      <img
                        alt="..."
                        src={require("assets/img/Rahr-Brewery.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="https://rahrbrewing.com/" onClick={e => e.preventDefault()}>
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
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="https://www.communitybeer.com/"target="_blank" rel="noopener noreferrer">
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
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="http://pantherislandbrewing.com/"target="_blank" rel="noopener noreferrer">
                      <img
                        alt="..."
                        src={require("assets/img/panther.jpeg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="http://pantherislandbrewing.com/"target="_blank" rel="noopener noreferrer">
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
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
        </div>
        
      </div>
      <FooterWhite />
    </>
  );
   }
  }




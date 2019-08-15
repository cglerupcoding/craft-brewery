import React from "react";

// reactstrap components
import {
  Container,
  Input,
  Col,
  Button,
  Card,
  CardBody,
  Row,
  Form
} from "reactstrap";

// core components

import axios from "axios";
export default class LandingPageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "city",
      state: "state"
    };
  }

  handleApi = event => {
    event.preventDefault();
    axios.get('https://api.brewerydb.com/v2/locations?key=92d341b4fae6f216a0f4c979d51501cd', {
      params: {
        locality: "",
        region: ""
      }
    })
    .then(function (response) {
      console.log(response);
      // resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    };
  handleChange = (event) => {
    const { name, value } = event.target || event.srcElement;
    this.setState({
      [name]: value
    });
  }  


    render(){
      return (
        <>
          <div
            className="page-header"
            // ref={pageHeader}
            style={{
              backgroundImage: "url(" + require("assets/img/DFW.jpg") + ")"
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
                        <Col className="ml-auto mr-auto text-center" md="8" id="api-form">
                          <h1 className="title">
                            <strong>Tap It DFW</strong>
                          </h1>
                          <h5 className="description">
                            Now is the time to get social. Find your new favorite
                            DFW Brewery and keep up to date with the latest events.
                      </h5>
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </Col>
                        <Col className="ml-auto mr-auto" md="6">
                          <h4 id="search-head">
                            <strong>Find a brewery near you.</strong>
                            <br />
                            <br />
                            <br />
                          </h4>
                          <Card style={{opacity: '0.8'}} className="card-raised card-form-horizontal no-transition">
                            <CardBody>
                              
                            <Form className="api-form" method="GET" >
                                <Row>
                                  <Col md="4">
                                  <Input onChange={this.handleChange} placeholder="city" type="text" name="city" />
                                  </Col>
                                  <Col md='4'>
                                  <Input onChange={this.handleChange} placeholder="state" type="text" name='state' />
                                  </Col>

                                  <Col md="3">
                                  <Button onClick={this.handleApi} block className="btn-round" color="default">
                                    Login
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
    };
};

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

import axios from "axios";
export default class LandingPageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "city",
      state: "state"
    };
  }

  handleEvents = event => {
    event.preventDefault();
    axios.get('/searchBrewery/:city/:state', this.state).then(res => {
      console.log(res);
    });
  };
  // handleChange = (event) => {
  //   const { name, value } = event.target || event.srcElement;
  //   this.setState({
  //     [name]: value
  //   });
  // }  


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
                        <Col className="ml-auto mr-auto text-center" md="8">
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
                        <Col className="ml-auto mr-auto" md="10">
                          <h4 id="search-head">
                            <strong>Find a brewery near you.</strong>
                          </h4>
                          <Card className="card-raised card-form-horizontal no-transition">
                            <CardBody>
                              <Form action="" method="GET">
                                <Row>
                                  <Col md="4">
                                    <FormGroup>
                                      <Input
                                        onChange={this.handleCall}
                                        placeholder="city"
                                        type="text"
                                        name="city"
                                      />
                                    </FormGroup>
                                  </Col>
                                  <Col md="4">
                                    <FormGroup>
                                      <Input
                                        onChange={this.handleCall}
                                        placeholder="state"
                                        type="text"
                                        name="state"
                                      />
                                    </FormGroup>
                                  </Col>

                                  <Col md="3">
                                  <Button onClick={this.handleRegister} block className="btn-round" color="default" method = 'GET'>
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
    };
};

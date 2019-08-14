import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import MultiDropdownNavbar from "components/Navbars/MultiDropdownNavbar.js";
import SettingsHeader from "components/Headers/SettingsHeader.js";
import FooterWhite from "components/Footers/FooterWhite.js";
import axios from "axios";
export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "name",
      date: "date",
      event_type: "event_type",
      location: "location",
      event_time: "event_time",
      event_cost: "eventcost",
      event_description: "event_description"
    };
  }

  handleRegister = event => {
    event.preventDefault();
    axios.post("/beer_events", this.state).then(res => {
      console.log(res);
    });
  };
  handleChange = event => {
    const { name, value } = event.target || event.srcElement;
    this.setState({
      [name]: value
    });
  };




  render() {
    return (
    <>
        <MultiDropdownNavbar />
        <div className="wrapper">
          <SettingsHeader />
          <div className="profile-content section">
            <Container>
              <Row>
                <div className="profile-picture">
                  <div
                    className="fileinput fileinput-new"
                    data-provides="fileinput"
                  >
                    <div className="fileinput-new img-no-padding">
                      <img
                        alt="..."
                        src={require("assets/img/bitter.jfif")}
                      />
                    </div>
                    <div className="fileinput-preview fileinput-exists img-no-padding" />
                    <div>
                      <Button
                        className="btn-file btn-round"
                        color="default"
                        outline
                      >
                        <span className="fileinput-new">Change Photo</span>
                        <span className="fileinput-exists">Change</span>
                        <input name="..." type="file" />
                      </Button>
                      <br />
                      <Button
                        className="btn-link fileinput-exists"
                        color="danger"
                        data-dismiss="fileinput"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-times" />
                        Remove
                    </Button>
                    </div>
                  </div>
                </div>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                <Form action="" method="POST">
                    <Row>
                      <Col md="6" sm="6">
                        <FormGroup>
                          <label>Event Name</label>
                          <Input
                            onChange={this.handleChange}
                            placeholder="name"
                            type="text"
                            name="name"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6" sm="6">
                        <FormGroup>
                          <label>Event Date</label>
                          <Input
                            onChange={this.handleChange}
                            placeholder="date"
                            type="date"
                            name="date"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      <label>Event Type</label>
                      <Input
                        onChange={this.handleChange}
                        placeholder="event type"
                        type="text"
                        name="event_type"
                      />
                    </FormGroup>
                    <FormGroup>
                      <label>Location</label>
                      <Input
                        onChange={this.handleChange}
                        placeholder="location"
                        type="text"
                        name="location"
                      />
                      </FormGroup>
                      <FormGroup>
                        <label>Event Time</label>
                        <Input
                          onChange={this.handleChange}
                          placeholder="event_time"
                          type="text"
                          name="event_time"
                        />
                        </FormGroup>
                        <FormGroup>
                          <label>Event Cost</label>
                          <Input
                            onChange={this.handleChange}
                            placeholder="event_cost"
                            type="text"
                            name="event_cost"
                          />
                          </FormGroup>
                          <FormGroup>
                            <label>Description</label>
                            <Input
                              onChange={this.handleChange}
                              placeholder="event_description"
                              type="text"
                              name="event_descrition"
                            />
                            <h5>
                              <small>
                                <span
                                  className="pull-right"
                                  id="textarea-limited-message"
                                >
                                  150 characters left
                        </span>
                              </small>
                            </h5>
                          </FormGroup>

                          <div className="text-center">
                          <Button onClick={this.handleRegister} block className="btn-round" color="default" href="/login-page/">

                              Save
                    </Button>
                          </div>
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
        }
          
          

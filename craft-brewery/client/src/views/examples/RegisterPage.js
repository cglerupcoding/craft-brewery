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
import axios from 'axios';
export default class RegisterPage extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      beer:''
    }
  }
  handleRegister = (event) => {
    event.preventDefault();
    axios.post('/profiles',this.state).then(res => {
      console.log(res);
    })
  }
  handleChange = (event) => {
    const { name, value } = event.target || event.srcElement;
    this.setState({
      [name]: value
    });
  }
  componentDidMount() {
    document.documentElement.classList.remove("nav-open");
    document.body.classList.add("register-page");
    document.body.classList.add("full-screen");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("register-page");
      document.body.classList.remove("full-screen");
    };
  }
 render(){
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
                  {/* <div className="icon">
                    <i className="fa fa-user-secret" />
                  </div> */}
                  {/* <div className="description">
                    <h3>We value your privacy</h3>
                    <p>
                      Using Complex State of the Art technology, we value your privacy and your data is encrypted and never sold.
                    </p>
                  </div> */}
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
                  <Form className="register-form" method="POST">
                    <Input onChange={this.handleChange} placeholder="Name" type="text" name="name" />
                    <Input onChange={this.handleChange} placeholder="Email" type="text" name="email" />
                    <Input onChange={this.handleChange} placeholder="Birthday" type="date" name="birthday"/>
                    <Input onChange={this.handleChange} placeholder="City" type="text" name="city" />
                    <Input onChange={this.handleChange} placeholder="State" type="text" name="state"/>
                    <Input onChange={this.handleChange} placeholder="Favorite Beers" type="text" name="favorite beers"/>
               
                    <Input onChange={this.handleChange} placeholder="Password" type="password" />
                    <Input onChange={this.handleChange} placeholder="Confirm Password" type="password" />
                    <Button onClick={this.handleRegister} block className="btn-round" color="default"  href="/landing-page/">
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
}
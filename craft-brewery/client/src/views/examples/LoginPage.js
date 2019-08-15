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
import axios from 'axios';
export default class RegisterPage extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {

      email:'',
      confirm:''


    }
  }
  handleRegister = (event) => {
    // event.preventDefault();
    axios.get('/profiles/',this.state).then(res => {
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
      <div className="wrapper">
        <div
          className="page-header"
          style={{
            backgroundImage:
              "url(" + require("assets/img/login.jpeg") + ")"
          }}
        >
          <div className="filter" />
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="4" md="6" sm="6">
                <Card className="card-register">
                  <CardTitle tag="h3">Welcome</CardTitle>
                  <Form className="register-form" method="GET" action="landing-page">
                  <Input onChange={this.handleChange} placeholder="Email" type="text" name="email" />
                  <Input onChange={this.handleChange} placeholder="Password" type="password" name='password' />
                  <Button onClick={this.handleRegister} block className="btn-round" color="default">
                      Login
                    </Button>
                  </Form>
                  <div className="login">
                <NavItem>
                <NavLink href="/register-page/">Dont have an account? register Now</NavLink>
                </NavItem>                
                  </div>
                </Card>
              </Col>
            </Row>
            <div className="demo-footer text-center">
              <h6>
                © {new Date().getFullYear()}, made with{" "}
                <i className="fa fa-beer beer" /> by Team Dysfunctional
              </h6>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
}


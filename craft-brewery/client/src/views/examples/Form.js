import React from "react";
import axios from "axios"; // For making client request.

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: "", surname: "", email: "", message: ""};
  }
  
  handleForm = e => {
    axios.post(
      "http//localhost:3001", 
      this.state, 
      {headers: {"Accept": "authentication/json"}}
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
    e.preventDefault();
  }
 
  handleFields = e => this.setState({ [e.target.name]: e.target.value });
 
  render() {
    return (
      <form onSubmit={this.handleForm}>
        <label htmlFor="name">First Name</label>
        <input type="text" id="name" name="name" onChange={this.handleFields} />
        
        <label htmlFor="surname">Last Name</label>
        <input type="text" id="surname" name="surname" onChange={this.handleFields} />
 
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={this.handleFields} />
 
        <label htmlFor="date">Birthday</label>
        <input name="date" id="date" onChange={this.handleFields}></input>
 
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default Form;
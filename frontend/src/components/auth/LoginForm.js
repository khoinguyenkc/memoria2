import React, { Component } from 'react';


export default class Today extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "", 
            password: ""
        }
      }
    
    
    handleEmailChange = event => {
        this.setState({
            email: event.target.value
          })
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
          })
    }

    handleSubmit = event => {
        const formData = {email: this.state.email, password: this.state.password}

        const configObject = {  
	
            method: "POST",  
        
            headers: {    
                "Content-Type": "application/json",    
                "Accept": "application/json"  },  
        
            body: JSON.stringify(formData)/* Your data goes here */
        
        }

        fetch("http://localhost:3000/api/auth_user", configObject).
        then(function(response) {  console.log(response);return response.json();}).
        then(function(json) {  console.log(json);});
        //later need to setup to store token somewhere (redux central state probably)
    }



    render() {
        return (
            <div>
            <form>
      <label htmlFor="email">Email: </label>
      <br />
      <input
        name="email"
        id="email"
        type="email"
        value={this.state.email}
        onChange={this.handleEmailChange}
      />
      <br /><br />
      <label htmlFor="password">Password:</label>
      <br />
      <input
        name="password"
        id="password"
        type="password"
        value={this.state.password}
        onChange={this.handlePasswordChange}


        ></input>
        </form>
      <br />
      <button
        onClick={this.handleSubmit}
      >
          Login
      </button>
  

      </div>    
        )

    }

}



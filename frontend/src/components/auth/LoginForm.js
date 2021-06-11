import React, { Component } from 'react';


export default class LoginForm extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "", 
            password: ""
        }
      }
    
    
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
          })
    }


    handleSubmit = event => {
      event.preventDefault();
        //later need to setup to store token somewhere (redux central state probably)
        //might even send up a parent component that handles this step
        this.props.handleLogin(this.state) //handleLogin is passed down from parent component

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
        onChange={this.handleChange}
      />
      <br /><br />
      <label htmlFor="password">Password:</label>
      <br />
      <input
        name="password"
        id="password"
        type="password"
        value={this.state.password}
        onChange={this.handleChange}


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



import React, { Component } from 'react';

export default class LoginForm extends Component {
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
        this.props.login(this.state)
         //handleLogin is passed down from parent component

    }



    render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Email
              <input id="email" name="email" type="text" onChange={this.handleChange} value={this.state.email}/>
            </label>
          </div>
          <div>
            <label>
              Password
              <input id="password" name="password" type="password" onChange={this.handleChange} value={this.state.password}/>
            </label>
          </div>
          <div>
            <button type="submit">Log in</button>
          </div>
        </form>
          )

    }

};

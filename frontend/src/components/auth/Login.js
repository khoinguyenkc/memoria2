import React, { Component } from 'react';
import LoginForm from './LoginForm'

export default class Login extends React.Component {

    handleLogin = (data) => {
        const formData = {email: data.email, password: data.password}

        const configObject = {  
	
            method: "POST",  
        
            headers: {    
                "Content-Type": "application/json",    
                "Accept": "application/json"  },  
        
            body: JSON.stringify(formData)/* Your data goes here */
        
        }

        fetch("http://localhost:3000/api/auth_user", configObject).
        then(function(response) {  console.log(response);return response.json();}).
        then(function(json) {  
          console.log(json)
          //need to save it to redux central state
          ;});

    }


    render() {
        return (
          <div>
    
            <LoginForm handleLogin={this.login} />
        </div>
    }


    
}
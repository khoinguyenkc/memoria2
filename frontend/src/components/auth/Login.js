import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { addToken } from '../../actions/tokens';


 class Login extends Component {
    constructor() {
        super()
        this.state={ }
        //if u use mapstatetoprops, and u use constructor, apparently u need to initate the state object. otherwise error
    }

    handleLogin = (data) => {
        //call up dispatch and action creator to end data
        // const formData = {email: data.email, password: data.password}

        // const configObject = {  
    
        //     method: "POST",  
        
        //     headers: {    
        //         "Content-Type": "application/json",    
        //         "Accept": "application/json"  },  
        
        //     body: JSON.stringify(formData)/* Your data goes here */
        
        // }

        // fetch("http://localhost:3000/api/auth_user", configObject).
        // then(function(response) {  return response.json();}).
        // then(function(json) {  
        //   console.log(json)
    
        // })

        this.props.addToken(data)

    
    }

    testmethod = () => {
        console.log('testing with test method in Login component')
    }




    render() {
        return (
          <div>
            <h3>Login component</h3>
            <p>current user token: {this.state.userToken}</p>
            <p>test value: {this.state.test}</p>

            <LoginForm login={this.handleLogin} />

        </div>
        )
    }


    
}


const mapStateToProps = (state) => {
    return { userToken: state.userToken,
    test: state.userToken.testValue }
    
  };

  
const mapDispatchToProps = (dispatch) => {
    return { addToken: (data) => dispatch(addToken(data))  }
    
  };
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Today from './Today';
import Past from './Past';
import Userfront from "@userfront/react";
import Login from './auth/Login';

// ---------------------------------------------------------------------------------
// ------------USERFRONT STUFF HERE. ACTUAL maincontent COMPONENT BELOW-------------
// ---------------------------------------------------------------------------------

// Userfront.init("qbjrrzbx");

// const SignupForm = Userfront.build({
//   toolId: "bmombr"
// });


// const LoginForm = Userfront.build({
//     toolId: "rmkmbl"
//   });
  
//   const PasswordResetForm = Userfront.build({
//     toolId: "ldndmd"
//   });

//   function Dashboard() {
//     function renderFn({ location }) {
//       // If the user is not logged in, redirect to login
//       if (!Userfront.accessToken()) {
//         return (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location },
//             }}
//           />
//         );
//       }
  
//       // If the user is logged in, show the dashboard
//       const userData = JSON.stringify(Userfront.user, null, 2);
//       return (
//         <div>
//           <h2>Dashboard</h2>
//           <pre>{userData}</pre>
//           <button onClick={Userfront.logout}>Logout</button>
//         </div>
//       );
//     }
  
//     return <Route render={renderFn} />;
//   }
    


// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------


class MainContent extends Component {
    render() {
      return (
          <div class="container-fluid">
              <div class="row">

                <div class="col-sm-3">
                    sidebar left
                </div>

                <div class="col-sm-6">
                <h1>MainContent Component</h1>

                    <Router>
                        {/* later i want exact path / to load conditionally: today newsfeed or login, depends on login status  */}
                        <Route exact path="/" 
                        render={() =>   <Today />}

                        // render={() => Userfront.accessToken()?  <Today /> : <LoginForm />}
                        ></Route>
                        <Route path="/past" component={Past} ></Route>
                        {/* <Route path="/signup">
                            <SignupForm />
                        </Route> */}

                        <Route path="/login">
                            <Login />
                        </Route>
                        {/* <Route path="/reset">
                            <PasswordResetForm />
                        </Route> */}
                        {/* <Route path="/dashboard">
                            <Dashboard />
                        </Route> */}

                    </Router>

                </div>

                <div class="col-sm-3">
                sidebar right

                </div>
    

            </div>

          </div>
  
      )
    }
}

export default MainContent;
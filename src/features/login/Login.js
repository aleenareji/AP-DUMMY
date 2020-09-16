import React, { useState, Component } from 'react';
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { App } from '../../features/home';
// import L from './LoginStyles.scss';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      userDetails: {},
      isUserLoggedIn: false
    };
  }

  responseGoogle = response => {
    this.setState({ userDetails: response.profileObj, isUserLoggedIn: true });
    console.log(response,'res');
  };

  logout = () => {
    this.setState({ isUserLoggedIn: false })
  };

  render() {
    console.log('isUserLoggedIn -->',this.state.isUserLoggedIn);
    return (
      <React.Fragment>
        {!this.state.isUserLoggedIn && (
          <div className="google-login-btn">
            <div className="col-6 login-page" >
            {/* <img src={Appraisal}/> */}
            </div>
            <div className="col-6 login">
              <div className="login-container">
                <div className="login-header">
                <h1>Appraisal System</h1>
                </div>
                <div className="login-body">
                </div>
                <div className="login-footer">
                  <GoogleLogin
                    clientId="129401063798-c35cmt3qvb046uf4005cq423rl35mmb4.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {/* <App /> */}


         {this.state.isUserLoggedIn && (
          <div className="userDetails-wrapper">
              <GoogleLogout
                render={renderProps => (
                  <button
                    className="logout-button"
                    onClick={renderProps.onClick}
                  >
                    Logout
                  </button>
                )}
                onLogoutSuccess={this.logout}
              />

             <App 
             isUserLoggedIn={this.state.isUserLoggedIn}
             />
              </div>
       )}
      </React.Fragment>
    );
  }

}

export default Login;
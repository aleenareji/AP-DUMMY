import React, { useState, Component } from 'react';
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { App } from '../../features/home';
import history from '../../common/history';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {},
      isUserLoggedIn: false
    };
  }

  responseGoogle = response => {
    this.setState({ userDetails: response.profileObj, isUserLoggedIn: true });
    const data ='token'
    localStorage.setItem('myToken', data);
    // localStorage.clear();
    history.push('/dashboard');
  };
 
  

  logout = () => {
    this.setState({ isUserLoggedIn: false })
    localStorage.removeItem('myToken');
  };

  render() {
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
      </React.Fragment>
    );
  }

}

export default Login;
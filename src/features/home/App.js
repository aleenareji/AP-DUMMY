import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SideBar from './SideBar';
import { Redirect } from 'react-router-dom';

export default class App extends Component {
  constructor(props){
    super(props);
  }
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: '',
  };

  render() {
    const isUserLoggedIn = this.props ? this.props.isUserLoggedIn :'';
    return (
      <React.Fragment>
      <div> 
        <SideBar />
        <div className="main-content">{this.props.children}</div>
      </div>
      </React.Fragment>
    );
  }
}

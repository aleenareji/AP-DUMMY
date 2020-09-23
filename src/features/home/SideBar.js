import React from 'react';
import { NavLink } from 'react-router-dom';

const navMenu = [
  { path: '/dashboard/questions', name: 'Questions', icon: 'question-circle' },
  {path: '/dashboard/send-notification', name:' Send Notification',icon:'envelope'},
  // { path: '/dashboard/project', name: 'Project', icon: 'file' },
  // { path: '/dashboard/customers', name: 'Customers', icon: 'user' },
];
const Navigation = ({ className = null }) => {
  return (
    <ul className={className ? className : ''}>
      <NavLink to="/dashboard" exact={true} activeClassName="active">
        <li>
          <i className="la la-home"></i>
          <p>Home</p>
        </li>
      </NavLink>
      {navMenu.map((i, index) => (
        <NavLink to={`${i.path}`} activeClassName="active" key={index}>
          <li>
            <i className={`la la-${i.icon}`}></i>
            <p>{i.name}</p>
          </li>
        </NavLink>
      ))}
    </ul>
  );
};
function NavigationBar(props) {
  return (
    <aside>
      <div className="side-nav-container">
        {/* <nav>
          <div className="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <Navigation className="menu" />
          </div>
        </nav> */}

        <div className="company-logo">
          <h3>AS</h3>
        </div>
        <div className="side-navigation">
          <Navigation />
        </div>
      </div>
    </aside>
  );
}
export default NavigationBar;

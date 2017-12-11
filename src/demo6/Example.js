import React from 'react'
import {
  BrowserRouter as Router,
  NavLink
} from 'react-router-dom'
import './style.css';

const Example = () => (
  <Router>
    <div>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName='selected'>主页</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeStyle={{color: 'blue'}}>关于</NavLink>
        </li>
        <li>
          <NavLink to="/user" activeClassName='selected'>用户</NavLink>
        </li>
      </ul>
    </div>
  </Router>
)

export default Example
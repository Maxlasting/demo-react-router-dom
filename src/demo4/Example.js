import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

/**
 * <Switch/> 只会匹配其中一个符合条件的路由，不会匹配多个，和js原生的  case ... break; 是一个意思
 * <Redirect/> 可以将一个路由重定向到另外一个路由，也可以直接跳转到另外一个路由
 *
 * 如果一个 <Route/> 不写path，那么所有的路由都会被匹配
 */

const Example = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/old-match">Old Match, to be redirected</Link></li>
        <li><Link to="/will-match">Will Match</Link></li>
        <li><Link to="/will-not-match">Will Not Match</Link></li>
        <li><Link to="/also/will/not/match">Also Will Not Match</Link></li>
      </ul>
      <Switch>
        <Route path="/" exact render={Home}/>
        <Redirect from="/old-match" to="/will-match"/>
        <Route path="/will-match" render={WillMatch}/>
        <Route render={NoMatch}/>
      </Switch>
    </div>
  </Router>
)

const Home = () => (<h1>Home</h1>)

const WillMatch = () => (<h3>Matched!</h3>)

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

export default Example
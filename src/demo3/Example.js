import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

/**
 * Route 的 children 同样是用来渲染一个组件的，它的主要应用场景是，只想想看看某个路由是否匹配了，而不是一定要去渲染某个组件。例如切换路由的时候为某个元素切换不同的className。
 */

const Example = () => (
  <Router>
    <div>
      <MenuLink activeOnlyWhenExact={true} to="/" label="Home"/>
      <MenuLink to="/about" label="About"/>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)

const MenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
    return (
      <div className={match ? 'active' : ''}>
        {match ? '> ' : ''}<Link to={to}>{label}</Link>
      </div>
    )
  }}/>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

export default Example
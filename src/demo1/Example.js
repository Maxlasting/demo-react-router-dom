import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

/**
 * BrowserRouter 是路由的父容器组件，主要对history做了一层封装
 * Route 是每个路由，可以针对不同的url渲染不同的组件
 * Link 用来切换不同的路由
 *
 * exact 代表严格匹配
 */

const Example = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
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

/**
 * 每个被 Route 路由渲染的组件 都会默认传入 3个参数到组件的 props
 * 其中 match 代表路由匹配成功时候的对象，如果没有匹配成功那么就是一个 null
 *
 * match.url 代表当前匹配的路由
 *
 * /:xxx/:yyy/:zzz... 代表动态路由，会根据不同的参数，让组件产生不同的状态
 */

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = (props) => {
  console.log(props);
  return (
    <div>
      {/* 这里的topicId代表上面动态路由的参数:后面的topicId */}
      <h3>{props.match.params.topicId}</h3>
    </div>
  )
}

export default Example
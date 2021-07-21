import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import Home from './components/Home.js'
import About from './components/About.js'

export default function Root(props) {
  return <Router basename="/react-app"> {/* 要配置这个路径前缀 */}
    <div>
      <Link to="/">Home React</Link>
      <Link to="/about">About React</Link>
    </div>
    <Switch>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Redirect to="/"></Redirect>
    </Switch>
  </Router>
}
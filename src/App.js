import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/index'
import NotFound from './components/NotFound/index'
import TeamMatches from './components/TeamMatches/index'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/team-matches/:id" component={TeamMatches} />
    <Route component={NotFound} />
  </Switch>
)

export default App

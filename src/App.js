import React from 'react'
import Compu from "./Prueba"
import PSU from "./PSU"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Compu}/>
          <Route path="/PSU" component={PSU}/>
        </Switch>
      </div>
    </Router>

  )
}

export default App

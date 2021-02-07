import './App.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Resume, Projects, About } from './Pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <About />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

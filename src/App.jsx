import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

//Pages
import HomePage from "./views/Home"
import JobPage from "./views/Job"

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/job/:job" component={JobPage} />
      </Router>
    </>
  )
}

export default App

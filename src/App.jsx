import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

//Pages
import HomePage from "./views/Home"

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={HomePage} />
      </Router>
    </>
  )
}

export default App

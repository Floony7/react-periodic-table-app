import React from "react"
import Header from "./components/Header"
import MainDisplay from "./components/MainDisplay"
import "normalize.css"
import "./style.css"
import "./app.scss"

const App = (props) => {
  return (
    <div className="container">
      <Header />
      <MainDisplay />
    </div>
  )
}

export default App

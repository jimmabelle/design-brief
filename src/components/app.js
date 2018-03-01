import React from "react"
import Header from "./header"
import Hero from "./hero"
import Section from "./section"

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Section />
      </div>
    )
  }

}

export default App

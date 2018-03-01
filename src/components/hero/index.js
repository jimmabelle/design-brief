import React from "react"
import tree from "../../images/medium-image.png"
import "./index.css"

export default class Hero extends React.Component {

  render() {
    return (
      <div className="Hero">
        <div className="left">
          <h1>Interesting ideas that set your mind in motion</h1>
          <p>
            Hear directly form the people who know it best.
            From tech to politics to creativity and more - whatever ineterest,
            we&rsquo;ve got you covered.
          </p>
          <div className="bttn">
            <a href="">Get started</a>
            <a href="">Learn more</a>
          </div>
        </div>
        <div className="right">
          <img src={tree} alt="tree" />
        </div>
      </div>
    )
  }
}

import React from "react"
import "./index.css"

export default class Header extends React.Component {

  render() {
    return (
      <div className="Header">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Technology</a></li>
          <li><a href="">Creativity</a></li>
          <li><a href="">Entrepreneurship</a></li>
          <li><a href="">Self</a></li>
          <li><a href="">Culture</a></li>
          <li><a href="">Degital Design</a></li>
          <li><a href="">Popular in Medium</a></li>
          <li><a href="">Politics</a></li>
          <li><a href="">More</a></li>
          <li><a href="">Get Started</a></li>
        </ul>
      </div>
    )
  }
}

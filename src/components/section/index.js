import React from "react"

import carlMoore from "../../images/writer-1.png"
import benBlad from "../../images/writer-2.jpeg"
import henryWhismayer from "../../images/writer-3.jpeg"
import lindsaySmith from "../../images/writer-4.jpeg"

import bookmark from "../../images/bookmark.png"

import "./index.css"

export default class Section extends React.Component {

  render() {
    return (
      <div className="Section">

        <div className="top-left">
          <div className="top-left-img" />
          <div className="top-left-text">
            <h2>The Boy Who Tamed the Sea</h2>
            <p>
              At 5:30 am, on any morning I can handle it,
              I&rsquo;ll slip out of the dark mouth of my
              covers and creep through to the silver lig.
            </p>
            <figure>
              <img className="writer-1" src={carlMoore} alt="writer" />
              <span className="name-writer-1"><br />
                Carl Moore<br />
                Oct 27 8 min read
              </span>
              <img className="bookmark" src={bookmark} alt="bookmark" />
            </figure>
          </div>
        </div>

        <div className="top-right">
          <div className="top-right-img" />
          <div className="top-right-text">
            <h2>The Role of Human Emotions in the Future of Humans Transport</h2>
            <p>
              Getting from A to B is about to feel very different.
            </p>
            <figure>
              <img className="writer-2" src={benBlad} alt="writer" />
              <span className="name-writer-2"><br />
                Ben Blad<br />
                Nov 1 7 min read
              </span>
              <img className="bookmark" src={bookmark} alt="bookmark" />
            </figure>
          </div>
        </div>

        <div className="bottom-left">
          <div className="bottom-left-img" />
          <div className="bottom-left-text">
            <h2>The March of the Losers</h2>
            <p>
              Around the world,
              the victims are becoming the abusers,
              and Donald Trump is Their king.
            </p>
            <figure>
              <img className="writer-3" src={henryWhismayer} alt="writer" />
              <span className="name-writer-3"><br />
                Henry Whismayer<br />
                Nov 10 8 min read
              </span>
              <img className="bookmark" src={bookmark} alt="bookmark" />
            </figure>
          </div>
        </div>

        <div className="bottom-right">
          <div className="bottom-right-img" />
          <div className="bottom-right-text">
            <h2>The Burning Season</h2>
            <p>
              You cannot save anything
              when the fires come to Northern California.
            </p>
            <figure>
              <img className="writer-4" src={lindsaySmith} alt="writer" />
              <span className="name-writer-4"><br />
                Lindsey Smith<br />
                Nov 9 8 min read
              </span>
              <img className="bookmark" src={bookmark} alt="bookmark" />
            </figure>
          </div>
        </div>

      </div>
    )
  }
}

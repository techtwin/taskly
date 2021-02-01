import React from 'react'
import '../styles/rightnav.css'

export default function RightNav() {
  return (
    <div className="rightNav">
      Right Nav
      <div className="githubDiv">
        <h1 className="githubTitle">Checkout my Github here.</h1>
        <img className="gitman" src="./gitman.png" alt="avatar" />
        <a role="button" href="https://github.com/techtwins" target="_blank" rel="noreferrer" className="gitmanBtn">
          <img src="./github-btn.png" alt="github link" />
        </a>
      </div>
    </div>
  )
}

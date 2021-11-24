import React from "react"
import Navbar from './navbar'
import { Link } from 'react-router-dom'

const Splash = () => (
  <div className="splash">
      <Navbar />
      <div className="splashContent">
        <div className="firstRow">
          <div className="firstRowContent">
            <h2> Tame your work, organize your life </h2>
            <h5> Remember everything and tackle any project with your notes, tasks, and schedule all in one place.</h5>
          </div>
          <div className="firstRowSignUp">
            <Link to="/signup">
              <button id='bigGreenButton'>Sign up for free</button>
            </Link>
            <br/>
            <Link to="/login">
              <button id='smallButton'>Already have an account? Login</button>
            </Link>
          </div>
        </div>
        <div id="imageContainer">
          <img src={window.splashImage} alt="AlwaysNote can be used on a plethora of devices" />
          <div className="alongsideImage">
            <div className="siderow">
              <h4> WORK ANYWHERE </h4>
              <p> Keep important info handy—your notes sync automatically to all your devices.</p>
            </div>
            <div className="siderow">
              <h4> REMEMBER EVERYTHING </h4>
              <p> Make notes more useful by adding text, images, audio, scans, PDFs, and documents.</p>
            </div>
            <div className="siderow">
              <h4> TURN TO-DO INTO DONE </h4>
              <p> Bring your notes, tasks, and schedules together to get things done more easily.</p>
            </div>
            <div className="siderow">
              <h4>FIND THINGS FAST </h4>
              <p> Get what you need, when you need it with powerful, flexible search capabilities.</p>
            </div>
          </div>
        </div>   
      </div>
    </div>
)

export default Splash; 
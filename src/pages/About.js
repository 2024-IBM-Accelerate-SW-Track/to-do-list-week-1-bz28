import React, { Component } from 'react';
import "./About.css";
import profile_pic from "/Users/benzhao/Documents/IBM/to-do-list-week-1-bz28/src/assets/Zhao_Benjamin.jpg"

export default class About extends Component {
  render() {
    return (
      <div>
         <div>
          <div className="split left">
          <div className="centered">
          <img 
          className="profile_image"
          
          profile_pic//profile pic 
          
          alt="Profile Pic"
          ></img>
          </div>
          </div>
          <div className="split right">
          <div className="centered">
          <div className="name_title">Ben Zhao</div>
          <div className="brief_description">
          Rising Junior at Penn State University majoring in Computer Science.
          </div>
          </div>
          </div>
          </div>
      </div>
    )
  }
}
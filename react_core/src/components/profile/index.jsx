import React from "react";
import Bio from "./bio";
import "./profile.style.css";
import Skills from "./skill";
import SocialLinks from "./socialLink";

class Profile extends React.Component {
  render() {
    return (
      <div className='Container'>
        <Bio />
        <Skills />
        <SocialLinks />
      </div>
    );
  }
}

export default Profile;

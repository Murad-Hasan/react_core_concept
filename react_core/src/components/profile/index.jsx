import React from "react";
import Bio from "./bio";
import "./profile.style.css";
import Skills from "./skill";
import SocialLinks from "./socialLink";

class Profile extends React.Component {
  info = {
    name: "Murad Hasan",
    title: "Software Engineer",
    skillA: "Java",
    skillB: "Python",
    skillC: "JavaScript",
    skillD: "React",
    socialA: "Facebook",
    socialB: "Twitter",
    socialC: "Instagram",
    linkA: "https://www.facebook.com/",
    linkB: "https://twitter.com/",
    linkC: "https://www.instagram.com/",
  };

  render() {
    return (
      <div className='Container'>
        <Bio name={this.info.name} title={this.info.title} />
        <Skills
          heading='Skills'
          skillA={this.info.skillA}
          skillB={this.info.skillB}
          skillC={this.info.skillC}
          skillD={this.info.skillD}
        />
        <SocialLinks 
          socialA={this.info.socialA}
          socialB={this.info.socialB}
          socialC={this.info.socialC}
          linkA={this.info.linkA}
          linkB={this.info.linkB}
          linkC={this.info.linkC}
        />
      </div>
    );
  }
}

export default Profile;

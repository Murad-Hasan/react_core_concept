import { Component } from "react";
import Bio from "./profile/bio";
import Profile from "./profile/index";
import Skills from "./profile/skill";
class App extends Component {
  render() {
    return (
      <div>
        <Profile />
        <Bio name='Hasan' title='junior developer' />
        <p>Mr.X</p>
        <Skills 
          heading='Skills'
          skillA='vue'
          skillB='svelte'
          skillC='angular'
          skillD='React'
        />
        <p>Mr.Y</p>
        <Skills 
          heading='Skills'
          skillA='Kotlin'
          skillB='Java'
          skillC='Go'
          skillD='C++'
        />
      </div>
    );
  }
}

export default App;

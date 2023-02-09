import { Component } from "react";
import Bio from "./profile/bio";
import Profile from "./profile/index";
import Skills from "./profile/skill";

// class Child extends Component {
//   render() {
//     this.props.func(this);
//     return <h1>I am child</h1>;
//   }
// }

const ChildComponent = (props) => {
  return(
    <div>
    <h1>I am child</h1>
    <p>I don't know what to do</p>
    {props.children}
  </div>
  )
};

class App extends Component {
  getContext(context) {
    console.log(context);
  }
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
        {/* <Child func={this.getContext} /> */}
        <ChildComponent>
          <p>I am child from parents</p>
        </ChildComponent>
      </div>
    );
  }
}

export default App;

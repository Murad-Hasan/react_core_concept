import { Component } from "react";

// class Child extends Component {
//   render() {
//     this.props.func(this);
//     return <h1>I am child</h1>;
//   }
// }

// const ChildComponent = (props) => {
//   return(
//     <div>
//     <h1>I am child</h1>
//     <p>I don't know what to do</p>
//     {props.children}
//   </div>
//   )
// };

class App extends Component {
  getContext(context) {
    console.log(context);
  }
  state = {
    count: 0,
    lotOfProperties:{}
  }
  render() {
  
    return (
      <>
        {/* <div>
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
        <Child func={this.getContext} /> 
        <ChildComponent>
          <p>I am child from parents</p>
        </ChildComponent>
      </div> */}
<h1>Murad</h1>
      <div>
        <h1>Counter</h1>
        <p>{this.state.count}</p> 
        {/* <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button> */}
        {/* Another method async function*/}
        <button onClick={() => this.setState(
          (prevState) => ({count: prevState.count + 1}),
          () => console.log('Count',this.state.count)
        )}>
          Increment
        </button>
      </div>
      </>
    );
  }
}

export default App;

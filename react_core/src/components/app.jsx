import { Component } from 'react';
import Profile from './profile/index';
import MyProps from './props';
class App extends Component {
  render() {
    return (
      <div>
        <Profile />
        <div style={{margin: "10px auto", width: "60%"}}>
          <h3>List of Programmers</h3>
         <MyProps name='Murad'/>
         <MyProps name='Murad Hasan'/>
        </div>
      </div>
    );
  }
}

export default App;
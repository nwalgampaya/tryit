import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';
import { height } from 'window-size';
import { Z_FIXED } from 'zlib';

class App extends Component {
  render() {
    const greetings = "Nalins"
    return (
      <div className="App">
        <Greetings greet={greetings} />
        <h1>hello</h1>
        {Button()}
      </div>
    );
  }
}

var divStyle = {
  color: 'red',
  width: 300,
  height: 100,
  borderradius: '500 110 20 20',
  backgroundColor: 'lavenderblush'
  // window: Z_FIXED,
  // align-self: center,   

}

function Button() {
  return (
    <button style={divStyle}>Go</button>
  );
}
// class Greetings extends Component {
//   state = {}
//   render() {
//     return (
//       <div>
//         Good Morning ! {this.props.greetings}
//       </div>
//     );
//   }
// }

// const Greetings = props => <h1>{props.greetings}</h1>;


// const Greetings = function (props) {
//   return (<h1>{props.greetings}</h1>);
// }

export default App;

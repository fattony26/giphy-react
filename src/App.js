import './App.css';
import { getRandom } from "./services/api-calls";
import React, { Component } from 'react';

class App extends Component {
  state = {
    giphy: [
      { url: '/random?', name: 'Random Gifs' }
    ]
  }

  render() {
    return (
      <>
        <h1>Hello Tiny Planet</h1>
        {/* {this.state.giphy} */}
      </>
    )
  }

}

export default App;
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      baseURL: 'https://api.giphy.com/v1/gifs/search?',
      apikey: process.env.REACT_APP_KEY,
      query: '&t=',
      search: '',
      giphy: []
    }
  }


  
  render() {
    return (
      <>
        <h1>Giphy</h1>
        <input type=" text" placeholder="Giphy Search" name="Gif Search"></input>
          <button type="submit">Search</button>
      </>
    )
  }

}

export default App;
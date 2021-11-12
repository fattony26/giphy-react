import './App.css';
import React, { Component } from 'react';
import GifSearch from './GifSearch'

class App extends Component {
  constructor() {
    super()
    this.state = {
      baseURL: 'https://api.giphy.com/v1/gifs/search?',
      apikey: 'api_key=gtqq7kTpF3fUNjWdUQ4BfiodryMyzvt8',
      query: '&q=',
      gifTitle: '',
      limit: '&limit=6',
      searchURL: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      searchURL: this.state.baseURL + this.state.apikey + this.state.query + this.state.gifTitle + this.state.limit
    }, () => {
      fetch(this.state.searchURL)
        .then(res => res.json())
        .then(json => this.setState({
          gifs: json,
          gifTitle: ''
        }))
        .catch(err => console.log(err))
    })
  }

  render () {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="gifTitle">Gif</label>
          <br />
          <input
            id="gifTitle" 
            type="text"
            value={this.state.gifTitle}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Search"
          />
        </form>

        {(this.state.gifs) ? <GifSearch gifs={this.state.gifs.data}/> : ''}
      </>
    );
  }
}

export default App;
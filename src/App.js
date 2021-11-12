import './App.css';
import React, { Component } from 'react';
import GifSearch from './GifSearch'

class App extends Component {
  constructor() {
    super()
    this.state = {
      baseURL: 'https://api.giphy.com/v1/gifs/search?',
      apikey: 'api_key=WXkLlVr0R35TcFhQ6XfIM69T0f3OWi6u',
      query: '&q=',
      title: '',
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
      searchURL: this.state.baseURL + this.state.apikey + this.state.query + this.state.title + this.state.limit
    }, () => {
      fetch(this.state.searchURL)
        .then(res => res.json())
        .then(json => this.setState({
          gifs: json,
          title: ''
        }))
        .catch(err => console.log(err))
    })
  }

  render () {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Giphy's r' Us</label>
          <br />
          <input
            id="title" 
            type="text"
            value={this.state.title}
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
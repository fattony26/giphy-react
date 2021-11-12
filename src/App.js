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

  handleChange = (event) => {
    this.setState({ 
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      searchURL: this.state.baseURL + this.state.apikey + this.state.query + this.state.search
    }, () => {
      fetch(this.state.searchURL)
        .then(res => res.json())
        .then(json => this.setState({
          giphy: json,
          search: ''
        }))
        .catch(err => console.error(err));
    })
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
          <label htmlFor='search'>Giphy</label>
          <input
            type='text'
            value={this.state.search}
            onChange={this.handleChange}
          />
          <input
            type='submit'
            value='Search'
          />
        </form>
        <h1>Giphy</h1>
        <input type=" text" placeholder="Giphy Search" name="Gif Search"></input>
          <button type="submit">Search</button>
      </>
    )
  }
}

export default App;
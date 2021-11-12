import React, { Component } from 'react';

class GifSearch extends Component {
    render() {
        console.log('this.props.gifs is: ', this.props.gifs);
        // console.log('this.props.gif.data[0].images.original.url is: ', this.props.gif.data[0].images.original.url);
        return (
            <div>
                {this.props.gifs.map(gif => (
                    <img src={gif.images.original.url} alt=''/>
                ))}
            </div>
        );
    }
}

export default GifSearch;
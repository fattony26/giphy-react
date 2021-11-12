import React, { Component } from 'react';

class GifSearch extends Component {
    render() {

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
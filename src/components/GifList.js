import React, { Component } from "react";
class GifList extends Component {

    

    render() {
        return (
          <ul>
              {this.props.gifs.map(gif => {
                //   debugger
              return <li key={gif.id}><img src={gif.images.original.url} alt="loading..."/></li>  
              })}
          </ul>
        );
      }
}

export default GifList

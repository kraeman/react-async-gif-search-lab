import React, { Component } from "react";
import GifList from '../components/GifList'
import GifSearch from "../components/GifSearch";
class GifListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstThreeGifs: []
        }
      }


      getGifs = (query, e) => {
        e.preventDefault()
        
         fetch("https://api.giphy.com/v1/gifs/search?q="+query+"&api_key=T4LdDjaB6jLzNhn5s5qyILrVJmk8ObPX&rating=g")
            .then(response => response.json())
            .then(data => {this.setState({firstThreeGifs: data.data.slice(0, 3)})})
    }

   

    //{this.setState({firstThreeGifs: data.slice(0, 3)})}

    render() {
        
        return (
          <div>
            < GifSearch submitHandler={this.getGifs}/>  
            < GifList gifs={this.state.firstThreeGifs} />
          </div>
        );
      }
}

export default GifListContainer

import React, { Component } from "react";

class GifSearch extends Component {

    state = ({
        value: ""
    })
    

    handleSubmit = (event) => {
      this.props.submitHandler(this.state.value, event)
    }

    handleInputChange = () => {
      this.setState({
        value: document.querySelector('#searchBar').value
    })
    }

    render() {
        return (
            <form>
        <label>
          Search:
          <input type="text" id='searchBar' onChange={this.handleInputChange}/>
        </label>
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
      </form>
        );
      }
}

export default GifSearch

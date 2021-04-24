import React, { Component } from "react";

class Searcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ""
    };

  }

  onSubmit = e => {
    e.preventDefault();

    if(this.state.searchQuery){
      this.props.onSearch(this.state.searchQuery)
    }
  }

  onSearchQueryChange = e => {
    this.setState({
      searchQuery: e.target.value
    });
  }

  render(){
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="songName">
            What song are you looking for?
          </label>
          <input
            type="text"
            value={this.state.searchQuery}
            onChange={this.onSearchQueryChange}
            className="form-control"
            id="songName"
            aria-describedby="songNameHelp"
            placeholder="Song Name..."
          />
          <small id="songNameHelp" className="form-text text-muted">
            Like music? Type in your favorite song to find it on Spotify
          </small>
        </div>
        {/* <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={this.state.orderById}
              onChange={this.toggleNameOrdering}
            />
            Order results by id
          </label>
        </div> */}
        <button type="submit" className="btn btn-primary">
          Search for song
        </button>
      </form>
    );
  }
}

export default Searcher;
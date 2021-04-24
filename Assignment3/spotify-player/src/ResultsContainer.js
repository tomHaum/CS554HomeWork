import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { searchForSong } from './data'
import Results from './Results';

class ResultsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfSongs: {
        items: []
      }
    };

  }

  componentDidMount = async () => {
    const songTitle = this.props.searchQuery;
    try {
      if (songTitle) {
        const matches = await searchForSong(songTitle);
        console.log("original state");
        console.log(matches);
        this.setState({
          listOfSongs: matches
        });
      }
    } catch (err) {
      this.setState({
        error: "Coulld not access spotify"
      })
    }

  };

  componentWillReceiveProps = async newProps => {
    const currentSong = this.props.searchQuery;
    console.log("old"); console.log(this.props);
    console.log("new"); console.log(newProps);
    const newSong = newProps.searchQuery;
    
    try {
      if (newSong && newSong !== currentSong) {
        const matches = await searchForSong(newSong);
        console.log("new state");
        console.log(matches);
        this.setState({
          listOfSongs: matches
        });
      }
    } catch (err) {
      this.setState({
        error: "Coulld not access spotify"
      })
    }
  };

  render() {
    if(this.state.error && this.state.error === "Coulld not access spotify"){
      return <h1> Could not access spotify, return <Link to="/">Home</Link>  and log in</h1>
    }
    console.log("rendering");
    console.log(this.props.searchQuery);
    if (!this.props.searchQuery) {
      return <h1>Search for a song</h1>;
    }
    console.log(this.state);
    console.log(this.state.listOfSongs);
    const songs = this.state.listOfSongs;
    console.log(songs);

    return <Results queryResult={songs} />;
  }
}

export default ResultsContainer;
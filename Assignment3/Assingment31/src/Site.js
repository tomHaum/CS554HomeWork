import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Searcher from './Searcher';
import ResultsContainer from './ResultsContainer';

class Site extends Component {

  onSearch = searchQuery => {
    this.props.history.push(`/search/${searchQuery}`);
  };

  render() {
    if(!sessionStorage.getItem("spotify-access-token")){
      document.getElementById("login").style = "display:block;"
    }
    return (
      <div className="App">
        <header>
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <h5 className="my-0 mr-md-auto font-weight-normal">Terrific Tuner</h5>
            <nav className="my-2 my-md-0 mr-md-3">
              <Link className="p-2 text-dark" to="/">
                Home
              </Link>
            </nav>
          </div>
        </header>
        <div className={"AppBody " + (sessionStorage.getItem("spotify-access-token")?"":"hidden") } >
            <Route path="/" exact={true} render={() => {
              return (
                <div className="row"> 
                  <div className="col-md-6">
                    <Searcher onSearch={this.onSearch}/>
                  </div>
                </div>);
            }} />
            <Route path="/search/:searchQuery" render={(m) => {
              // return (<h1>{m.match.params.searchQuery}</h1>);
              return (
                <ResultsContainer searchQuery={m.match.params.searchQuery} />
              );
            }}/>
        </div>
      </div>
    );
    // return <h1> Hi </h1>
  }
}

export default Site;
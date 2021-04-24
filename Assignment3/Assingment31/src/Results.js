import React, { Component } from "react";
import {Link } from 'react-router-dom';
class Results  extends Component {
  render(){
    return (
      <div>
          <h1><div className="d-flex justify-content-between"><div>{this.props.queryResult.items.length} results</div><div> <Link to="/">New Seach</Link></div></div></h1>
          <div className="row">
          {this.props.queryResult.items.map(song => {
            var img = '';
            
            if(song.album.images.length > 0 && song.album.images[0].url){
              img = song.album.images[0].url;
            }else{
              img = "/defaultAlbum.png";
            }
            console.log(song['external_urls']);
            var songUrl = Object.keys(song['external_urls'])[0];
            songUrl = song['external_urls'][songUrl];

            var artistUrl = Object.keys(song.artists[0]['external_urls'])[0];
            artistUrl = song.artists[0]['external_urls'][artistUrl]

            var albumUrl = Object.keys(song.album['external_urls'])[0];
            albumUrl = song.album['external_urls'][albumUrl]

            return (
              <div className="songResult col-md-4 col-sm-6">
                <div className="card">
                  {/* <div className="card-title"></div> */}
                  <div className="card-body">
                    <figure className="figure">
                      <a href={songUrl}><img src={img} className="figure-img img-fluid rounded card-img"  alt={song.name}   title={song.name} /></a>
                    </figure>
                    <h5 className="text-truncate" title={song.name}><a className="text-truncate text-dark" href={songUrl}>{song.name}</a></h5>
                    <p className="text-truncate"><a className="text-truncate text-muted" href={artistUrl} title={song.artists[0].name}>By: {song.artists[0].name}</a></p>
                    <p className="text-truncate"><a className="text-truncate text-muted" href={albumUrl} title={song.album.name}>On: {song.album.name}</a></p>
                    <p className="text-truncate text-muted">Popularity: {song.popularity}</p>
                    <div className="spotitfy-player centered-block">
                      <iframe title={song.uri} src={"https://open.spotify.com/embed?uri="+song.uri} width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        }
        </div>
      </div>
    ); 
  } 
}

export default Results;
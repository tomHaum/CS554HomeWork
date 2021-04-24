import axios from 'axios';

function sleep(ms){
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const searchForSong = async songTitle => {
  const access_token = sessionStorage.getItem('spotify-access-token');
  if(!access_token)
    throw new Error("No access_token for spotify");
  try{
    const results = await axios.get('https://api.spotify.com/v1/search',{
      headers: {
        'Authorization': 'Bearer ' + access_token
      },
      params: {
        q: songTitle,
        type: 'track'
      }
    });

    await sleep(500);
    return results.data.tracks;
  }catch(err){
    sessionStorage.removeItem('spotify-access-token');
    throw new Error("could not access spotify");
  }

}
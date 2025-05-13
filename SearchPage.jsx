import { Player } from "../Components/Player";
import { Search } from "../Components/Search";
import { Songs } from "../Components/Songs";
import { getSongs } from "../Services/api-client";
import { useEffect, useState } from "react";

export const SearchPage = () => {
  const [allSongs, setSongs] = useState([]);
  const [flag, setFlag] = useState(false);
  const [song,setPlayerSong]=useState(null);
 

  const loadSongs = async () => {
    <br/>
    setSongs(await getSongs('Latest Songs'));
  };

  useEffect(() => {
    loadSongs();
  }, []);

  const togglePlayer = (flag,songarg) => {
    <br/>
    setPlayerSong(songarg);
    setFlag(flag);
  };

  const getArtistName = async (artistName) => {
    console.log('Rec Artist Name', artistName);
    setSongs(await getSongs(artistName));
  };
  const jsx=<> <Search fn={getArtistName} />
          <Songs fn={togglePlayer}allSongs={allSongs} /></>;
  return (
    <div className="container">
      <h1 className="alert alert-info text-center">Musicon</h1>
       
        <>
        
        {flag?<Player fn={togglePlayer} song={song}/>:jsx}
        
        </>
      
    </div>
  );
};
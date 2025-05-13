import {useRef}from "react";
export const Search=({fn})=>{
   const artist=useRef();
return(
<>
 
 <br/>
<input ref= {artist} type='text'className="form-control" placeholder="Type to search"/>
<br/>
<button className="btn btn-success" onClick={()=> {
    fn(artist.current.value);

}}>Search</button>
<br/>
 </>);
}
export const Player = ({ fn, song }) => {
  return (
    <div>
        
      <button onClickCapture={()=>{
        fn(false,null);
      }

      } className="btn btn-success mb-3" >Back
        
      </button>
      <p>
        <img src={song.artworkUrl100}/>
        <br/>
        <strong>{song?.trackName}</strong> by {song?.artistName}
      </p>
      <audio controls autoPlay>
        <source src={song?.previewUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
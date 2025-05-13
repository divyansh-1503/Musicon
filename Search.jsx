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
import { Song } from "./Song"; // Make sure this path is correct

export const Songs = ({ fn,allSongs }) => {
  return (
    <>
      {allSongs.map((currentSong, index) => <Song fn={fn} key={index} song={currentSong} />
      )}
    </>
  );
};
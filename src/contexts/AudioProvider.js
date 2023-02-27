import React, {useState, useRef, createContext} from 'react';

export const AudioContext = createContext();
const AudioProvider = ({children}) => {
  const currentPlayedMusicRef = useRef(null);
  const [songs, setSongs] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <AudioContext.Provider
      value={{songs, setSongs, currentPlayedMusicRef, isPlaying, setIsPlaying}}>
      {children}
    </AudioContext.Provider>
  );
};

export default AudioProvider;

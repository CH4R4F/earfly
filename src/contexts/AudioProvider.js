import React, {useState, useRef, createContext} from 'react';

export const AudioContext = createContext();
const AudioProvider = ({children}) => {
  const currentPlayedMusicRef = useRef(null);
  const [songs, setSongs] = useState([]);

  return (
    <AudioContext.Provider value={{songs, setSongs, currentPlayedMusicRef}}>
      {children}
    </AudioContext.Provider>
  );
};

export default AudioProvider;

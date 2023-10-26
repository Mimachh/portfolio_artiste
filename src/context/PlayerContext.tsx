import React, { createContext, useContext, ReactNode, useState } from 'react';

// Définissez le type pour les propriétés du context
export interface PlayerContextProps {
    isPlayerOpen: boolean;
    setIsPlayerOpen: (value: boolean) => void;

    idToPlay?: string;
    setIdToPlay: (value: string) => void;

    trackToPlay: TrackProps[{}];
    setTrackToPlay: (value: TrackProps[{}]) => void;
  }

  interface TrackProps {
    name: string,
    src: string,
  }
// Créez le context
export const PlayerContext = createContext<PlayerContextProps | undefined>(undefined);

// Créez un fournisseur pour le context
export function PlayerProvider({ children }: { children: ReactNode }) {
  
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [idToPlay, setIdToPlay] = useState("");
  const [trackToPlay, setTrackToPlay] = useState({})

  return (
    <PlayerContext.Provider value={{ isPlayerOpen, setIsPlayerOpen, idToPlay, setIdToPlay, trackToPlay, setTrackToPlay }}>
      {children}
    </PlayerContext.Provider>
  );
}


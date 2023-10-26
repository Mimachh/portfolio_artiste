import React, { createContext, useContext, ReactNode, useState } from 'react';

// Définissez le type pour les propriétés du context
export interface NavContextProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
  }

// Créez le context
export const NavContext = createContext<NavContextProps | undefined>(undefined);

// Créez un fournisseur pour le context
export function NavProvider({ children }: { children: ReactNode }) {
  // Définissez ici les valeurs que vous souhaitez partager
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavContext.Provider>
  );
}


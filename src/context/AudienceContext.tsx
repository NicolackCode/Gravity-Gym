import { createContext, useContext, useState, ReactNode } from 'react';

export type AudienceType = 'B2B' | 'B2C' | null;

interface AudienceContextProps {
  audience: AudienceType;
  setAudience: (val: AudienceType) => void;
}

export const AudienceContext = createContext<AudienceContextProps>({
  audience: null,
  setAudience: () => {},
});

export const AudienceProvider = ({ children }: { children: ReactNode }) => {
  const [audience, setAudience] = useState<AudienceType>(null);
  
  return (
    <AudienceContext.Provider value={{ audience, setAudience }}>
      {children}
    </AudienceContext.Provider>
  );
};

export const useAudience = () => useContext(AudienceContext);

import { createContext, useRef } from 'react';

// 1. Buat Context-nya
export const ScrollContext = createContext(null);

// 2. Buat Provider yang akan membungkus aplikasi kita
export const ScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);

  return (
    <ScrollContext.Provider value={{ scrollRef }}>
      {children}
    </ScrollContext.Provider>
  );
};
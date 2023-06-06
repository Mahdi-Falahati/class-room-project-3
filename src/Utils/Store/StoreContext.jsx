import { createContext,  } from "react";
export const StoreContext = createContext();

export function StoreProvider({ children }) {
  
  return (
    <StoreContext.Provider>
      {children}
    </StoreContext.Provider>
  );
}
import { createContext, useState } from "react";

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [data, setData] = useState([]);

  const updateData = (newData) => {
    setData(newData);
  };
  return (
    <StoreContext.Provider value={{ data, updateData }}>
      {children}
    </StoreContext.Provider>
  );
}

import { createContext, useState } from "react";

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [data, setData] = useState([]);
  const [selectClass, setSelectClass] = useState("");

  const updateSelectClass = (newClass) => {
    setSelectClass(newClass);
  };

  const updateData = (newData) => {
    setData(newData);
  };
  return (
    <StoreContext.Provider
      value={{
        data,
        selectClass,
        updateData,
        updateSelectClass,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

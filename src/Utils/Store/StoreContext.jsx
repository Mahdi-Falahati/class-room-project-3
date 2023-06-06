import { createContext, useState } from "react";

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [data, setData] = useState([]);
  const [selectInfo, setSelectInfo] = useState({
    organ: "",
    class: "",
  });

  const updateSelectInfo = (info) => {
    if (info.type === "organ") {
      setSelectInfo({ ...info, organ: info.value });
    } else {
      setSelectInfo({ ...info, class: info.value });
    }
  };

  const updateData = (newData) => {
    setData(newData);
  };
  return (
    <StoreContext.Provider
      value={{
        data,
        selectInfo,
        updateData,
        updateSelectInfo,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

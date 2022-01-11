import React, { createContext, useContext } from "react";

const BandsContext = createContext();
export const useBandsContext = () => useContext(BandsContext);

function BandsProvider({ value, children }) {
  return <BandsContext.Provider value={value}>{children}</BandsContext.Provider>;
}

export default BandsProvider;

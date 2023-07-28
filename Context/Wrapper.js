import React, { createContext, useState } from "react";

export const Store = createContext();
export const MallSeats = createContext();

export const Wrapper = ({ children }) => {
  const [data, setdata] = useState();
  const [seatsArray, setSeatsArray] = useState([]);
  return (
    <Store.Provider value={{ data, setdata }}>
      <MallSeats.Provider value={{ seatsArray, setSeatsArray }}>
        {children}
      </MallSeats.Provider>
    </Store.Provider>
  );
};

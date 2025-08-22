import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProperties } from "../assets/data";
import { useUser } from "@clerk/clerk-react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useUser();
  const currency = import.meta.env.VITE_CURRENCY;
  const [properties, setProperties] = useState([]);
  const [showAgencyReg, setShowAgencyReg] = useState(false)
  const [isOwner, setIsOwner] = useState(true)


  const getProperties = () => {
    // Simulate un feching a a mi API simulada
    setProperties(dummyProperties);
  };
  useEffect(() => {
    getProperties();
  });

  const value = {
    navigate,
    properties,
    currency,
    user,
    showAgencyReg,
    setShowAgencyReg,
    isOwner,
    setIsOwner
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

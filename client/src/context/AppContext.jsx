import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProperties } from "../assets/data";
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const currency = import.meta.env.VITE_CURRENCY;

  const [searchedCities, setSearchedCities] = useState([]);
  const [properties, setProperties] = useState([]);
  const [showAgencyReg, setShowAgencyReg] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  const [loading, setLoading] = useState(true);

  // clerk credentials
  const { user } = useUser();

  // auth
  // const token = await getToken({ template: "default" });
  const { getToken } = useAuth();

  const getProperties = () => {
    // Simulación de fetching desde API
    setProperties(dummyProperties);
  };

  

  const getUser = async () => {
    console.log("TOKEN EN APP CONTEXT", await getToken());
    try {
      const token = await getToken(); 
      const { data } = await axios.get("/api/user", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data.success) {
        setIsOwner(data.role === "agencyOwner");
        setSearchedCities(data.recentSearchedCities);
      } else {
        toast.error(data.message || "Error al obtener el usuario");
        setTimeout(() => {
          getUser();
        }, 5000);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
      }
  };

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);

  useEffect(() => {
    getProperties();
  }, []);

  const value = {
    navigate,
    properties,
    currency,
    user,
    showAgencyReg,
    setShowAgencyReg,
    isOwner,
    setIsOwner,
    searchedCities,       // 🔹 agregado
    setSearchedCities,    // 🔹 agregado
    axios,
    getToken,
    loading
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

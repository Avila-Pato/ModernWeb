import React, { useState, useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import { dummyProperties } from "../../assets/data";

const ListProperty = () => {
  const { user, currency } = useAppContext();
  const [properties, setProperties] = useState([]);

  const getProperties = async () => {
    setProperties(dummyProperties);
  };

  useEffect(() => {
    if (user) {
      getProperties();
    }
  }, [user]);

  return (
    <div className="md:px-8 py-6 xl:py-8 m-1 sm:m-3 h-[97vh] overflow-y-scroll lg:w-11/12 bg-white shadow rounded-xl">
      <div>
        {/* Encabezado */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-[0.5fr_2fr_2fr_1fr_1fr] px-6 py-3 bg-secondary border-b border-slate-900/15 rounded-t-xl">
          <h5 className="h5 hidden lg:block">Index</h5>
          <h5 className="h5">Nombre</h5>
          <h5 className="h5">Dirección</h5>
          <h5 className="h5">Precio</h5>
          <h5 className="h5">Disponible</h5>
        </div>

        {/* Filas */}
        <div className="">
          {properties.map((property, index) => (
            <div
              key={index}
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-[0.5fr_2fr_2fr_1fr_1fr] gap-2 px-6 py-3 font-semibold bg-secondary/5 border-b border-slate-900/15"
            >
              {/* Index */}
              <div className="hidden lg:block text-gray-500">{index + 1}</div>

              {/* Nombre */}
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
                />
                <p className="text-gray-800 font-medium truncate">
                  {property.title}
                </p>
              </div>

              {/* Dirección */}
              <div className="text-gray-600 truncate overflow-hidden text-ellipsis">
                {property.address}
              </div>

              {/* Precio */}
              <div className="font-medium text-gray-800">
                {currency}
                {property.price.sale}
              </div>

              {/* Disponible toggle */}
              <div className="flex items-center">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked={property.isAvailable}
                  />
                  <div className="w-10 h-6 bg-slate-300 rounded-full peer peer-checked:bg-green-400 transition-colors duration-200" />
                  <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-4" />
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListProperty;

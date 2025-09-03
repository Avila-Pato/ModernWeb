import React from "react";
import { useAppContext } from "../context/AppContext";
import Item from "../components/Item";
import { dummyProperties } from "../assets/data";

const Listing = () => {
  const { properties, currency } = useAppContext();
  const sortOptions = ["Revelantes", "Bajos y Altos", "Altos y Bajos"];

  const propertyTypes = [
    "Casa",
    "Apartamento",
    "Villa",
    "Penthouse",
    "Casa de campo",
    "Commercial",
    "Terreno Vacante",
  ];

  const priceRange = [
    "Menos de $100,000",
    "$100,000 - $200,000",
    "$200,000 - $300,000",
    "$300,000 - $400,000",
    "$400,000 - $500,000",
    "Más de $500,000",
  ];

  return (
    <div className="bg-gradient-to-r from-[#fffbee] to-white py-28">
      <div className="max-padd-container flex flex-col sm:flex-row gap-8 mb-16 ">
        {/* Filtros lado izquierdo*/}
        <div className="bg-secondary/10 ring-1 ring-slate-900/5 p-4 sm:min-w-60 sm:h-[600px] rounded-xl">
          {/* preecios sorteados */}
          <div className="py-3 mt-4">
            <h5 className="h5 mb-3 "> Ordenar por precio</h5>
            <select
              className="bg-secondary/10 border border-slate-900/10  outline-none text-gray-30 medium-14
          h-8 w-full rounded px-2"
            >
              {sortOptions.map((sort, index) => (
                <option key={index} value={sort} className="capitalize">
                  {sort}
                </option>
              ))}
            </select>
          </div>
          {/* Tipos de propiedades */}
          <div className="py-3 mt-4">
            <h5 className="h5 mb-4"> Tipos de propiedades</h5>
            {propertyTypes.map((type) => (
              <label key={type} className="flex gap-2 medium-14">
                <input type="checkbox" value={type} />
                {type}
              </label>
            ))}
          </div>
          {/* ranggp de precios */}
          <div className="py-3 mt-2 ">
            <h5 className="h5 mb-4">Rango de precios</h5>
            {priceRange.map((price) => (
              <label key={price} className="flex mt-2  gap-2 medium-14">
                <input type="checkbox" />
                {currency}
                {price}
              </label>
            ))}
          </div>
        </div>
        {/* Propiedades lado derecho */}
        <div className="min-h-[97vh] overflow-scroll rounded-xl">
          {(properties.length > 0 ? properties : dummyProperties).length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
              {(properties.length > 0 ? properties : dummyProperties).map(
                (property) => (
                  <Item key={property._id} property={property} />
                )
              )}
            </div>
          ) : (
            <div className="text-center text-gray-500 mt-20">
              No hay propiedades
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Listing;

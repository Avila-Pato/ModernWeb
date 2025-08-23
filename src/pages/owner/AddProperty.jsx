import React from "react";
import { useState } from "react";
import { assets } from "../../assets/data";

const AddProperty = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    city: "",
    country: "",
    address: "",
    area: "",
    propertyType: "",
    priceRent: "",
    priceSale: "",
    bedrooms: "",
    bathrooms: "",
    garages: "",
    amenities: {
      Estacionamiento: false,
      Wifi: false,
      Jardin: false,
      Terraza: false,
    },
  });

  const [loading, setLoading] = useState(false);

  return (
    <div className="md:px-8 py-6 xl:py-8 m-1.5 sm:m-3 h-[97vh] overflow-y-scroll lg:w-11/12 bg-white shadow rounded-xl">
      <form className="flex flex-col gap-y-3.5 px-2 text-sm xl:max-w-3xl">
        <div className="w-full">
          <h5 className="h5">Nombre de las propiedades</h5>
          <input
            onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
            value={inputs.title}
            type="text"
            placeholder="Escribe aqui"
            className="px-3 py-1.5 ring-1 ring-sky-900/10 rounded-lg bg-secondary/5 mt-1 w-full"
          />
        </div>

        <div className="w-full">
          <h5 className="h5">Descripcion de las propiedades</h5>
          <textarea
            onChange={(e) =>
              setInputs({ ...inputs, description: e.target.value })
            }
            value={inputs.description}
            type="text"
            rows={5}
            placeholder="Escribe aqui"
            className="px-3 py-1.5 ring-1 ring-sky-900/10 rounded-lg bg-secondary/5 mt-1 w-full"
          />
        </div>

        <div className="flex gap-4">
          <div className="w-full">
            <h5 className="h5">Ciudad</h5>
            <input
              onChange={(e) => setInputs({ ...inputs, city: e.target.value })}
              value={inputs.city}
              type="text"
              placeholder="Escribe aqui"
              className="px-3 py-1.5 ring-1 ring-sky-900/10 rounded-lg bg-secondary/5 mt-1 w-full"
            />
          </div>

          <div className="w-full">
            <h5 className="h5">Pais</h5>
            <input
              onChange={(e) =>
                setInputs({ ...inputs, country: e.target.value })
              }
              value={inputs.country}
              type="text"
              placeholder="Escribe aqui"
              className="px-3 py-1.5 ring-1 ring-sky-900/10 rounded-lg bg-secondary/5 mt-1 w-full"
            />
          </div>

          <div className="">
            <h5 className="h5">Tipo de Propiedad</h5>
            <select
              onChange={(e) =>
                setInputs({ ...inputs, propertyType: e.target.value })
              }
              value={inputs.propertyType}
              placeholder="Escribe aqui"
              className="px-3 py-1.5 ring-1 ring-sky-900/10 rounded-lg bg-secondary/5 mt-1 w-46"
            >
              <option value="">Seleccionar Tipo</option>
              <option value="House">Casas</option>
              <option value="Apartment">Apartamentos</option>
              <option value="Villa">Villas</option>
              <option value="PentHouse">PentHouses</option>
              <option value="Townhouse">Casas de Villas</option>
              <option value="Commercial">Comerciales</option>
              <option value="Land Plot">Terrenos</option>
            </select>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap w-full">
          <div className="flex-1">
            <h5 className="h5">Dirección</h5>
            <input
              onChange={(e) =>
                setInputs({ ...inputs, address: e.target.value })
              }
              value={inputs.address}
              type="text"
              placeholder="Escribe aqui"
              className="px-3 py-1.5 ring-1 ring-sky-900/10 rounded-lg bg-secondary/5 mt-1 w-full"
            />
          </div>

          <div className="w-32">
            <h5 className="h5">Area</h5>
            <input
              onChange={(e) => setInputs({ ...inputs, area: e.target.value })}
              value={inputs.area}
              type="number"
              placeholder="Escribe aqui"
              className="px-3 py-1.5 ring-1 ring-sky-900/10 rounded-lg bg-secondary/5 mt-1 w-full"
            />
          </div>
        </div>
        <div className="flex gap-4 flex-wrap">
          <div>
            <h5 className="h5">
              Precio de renta <span className="text-xs">/Por Noche</span>{" "}
            </h5>
            <input
              onChange={(e) =>
                setInputs({ ...inputs, priceRent: e.target.value })
              }
              value={inputs.priceRent}
              type="number"
              min={99}
              placeholder="Escribe aqui"
              className="px-3 py-1.5 ring-1 ring-sky-900/10 rounded-lg bg-secondary/5 mt-1 w-38"
            />
          </div>

          <div>
            <h5 className="h5">Precio de venta </h5>
            <input
              onChange={(e) =>
                setInputs({ ...inputs, priceSale: e.target.value })
              }
              value={inputs.priceSale}
              type="number"
              min={9999}
              placeholder="Escribe aqui"
              className="px-3 py-1.5 ring-1 ring-sky-900/10 rounded-lg bg-secondary/5 mt-1 w-38"
            />
          </div>

          <div>
            <h5 className="h5">Habitaciones</h5>
            <input
              onChange={(e) =>
                setInputs({ ...inputs, bedrooms: e.target.value })
              }
              value={inputs.bedrooms}
              type="number"
              min={1}
              placeholder="1"
              className="px-3 py-1.5 ring-1 ring-sky-900/10 rounded-lg bg-secondary/5 mt-1 w-20"
            />
          </div>

          <div>
            <h5 className="h5">baños</h5>
            <input
              onChange={(e) =>
                setInputs({ ...inputs, bathrooms: e.target.value })
              }
              value={inputs.bathrooms}
              type="number"
              min={1}
              placeholder="1"
              className="px-3 py-1.5 ring-1 ring-sky-900/10 rounded-lg bg-secondary/5 mt-1 w-20"
            />
          </div>

          <div>
            <h5 className="h5">Garages</h5>
            <input
              onChange={(e) =>
                setInputs({ ...inputs, garages: e.target.value })
              }
              value={inputs.garages}
              type="number"
              min={1}
              placeholder="1"
              className="px-3 py-1.5 ring-1 ring-sky-900/10 rounded-lg bg-secondary/5 mt-1 w-20"
            />
          </div>
        </div>
        {/* AMENIDADES */}
        <div>
          <h5 className="h5">Amenidades</h5>
          <div className="flex gap-3 flex-wrap mt-1">
            {Object.keys(inputs.amenities).map((amenity, index) => (
              <div key={index} className="flex gap-1">
                <input
                  id={`amenities[index + 1]`}
                  onChange={() =>
                    setInputs({
                      ...inputs,
                      amenities: {
                        ...inputs.amenities,
                        [amenity]: !inputs.amenities[amenity],
                      },
                    })
                  }
                  checked={inputs.amenities[amenity]}
                  type="checkbox"
                  className="px-3 py-1.5 ring-1 ring-sky-900/10 rounded-lg bg-secondary/5 mt-1 w-20"
                />
                <label htmlFor={`amenities${index + 1}`}>{amenity}</label>
              </div>
            ))}
          </div>
        </div>
        {/* imagenes */}
        <h5 className="h5">Imagenes de  referencias </h5>
        <div className="flex gap-2 mt-2">
          {Object.keys(images).map((key) => (
            <label
              key={key}
              htmlFor={`propertyImages${key}`}
              className="ring-1 ring-slate-900/10 overflow-hidden rounded-lg"
            >
              <input
                onChange={(e) =>
                  setImages({ ...images, [key]: e.target.files[0] })
                }
                type="file"
                accept="image/*"
                id={`propertyImages${key}`}
                hidden
              />
              <div className="h-12 w-24 bg-secondary/5 flexCenter">
                <img
                  src={
                    images[key]
                      ? URL.createObjectURL(images[key])
                      : assets.uploadIcon
                  }
                  alt="iamges uplaod"
                  className="overflow-hidden object-contain cursor-pointer"
                />
              </div>
            </label>
          ))}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="btn-secondary text-black font-semibold mt-3 p-2 max-w-32 sm:w-full rounded-xl"
        >
          {loading ? "Agregando.." : "Agregar Propiedad"}
        </button>
      </form>
    </div>
  );
};

export default AddProperty;

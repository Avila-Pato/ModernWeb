import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import PropertyImages from "../components/PropertyImages";
import { assets } from "../assets/data";

const PropertyDetails = () => {
  const { properties, currency } = useAppContext();
  const [ property, setProperty] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const selected = properties.find((p) => p._id === id);
    selected && setProperty(selected);
  }, [id, properties]);

  if (!property) return null;

  return (
    <div className="bg-gradient-to-r from-[#fffbee] to-white py-28">
      <div className="max-padd-container">
        {/* Imagenes de la propiedad */}
        <PropertyImages property={property} />

        {/* Contenedor principal */}
        <div className="flex flex-col md:flex-row gap-8 mt-6">
          {/* Lado izquierdo */}
          <div className="p-4 flex-[2] rounded-xl border border-slate-900/10 space-y-6">
            {/* Ubicación */}
            <div className="flex items-center gap-2">
              <img src={assets.pin} alt="Ubicación" width={19} />
              <span>{property.address}</span>
            </div>

            {/* Título y precio */}
            <div className="flex justify-between flex-col sm:flex-row sm:items-end mt-3">
              <h3 className="text-xl font-bold">{property.title}</h3>
              <div className="text-lg font-semibold">
                 {currency}{property.price.sale} |  {currency}{property.price.rent}.00 / noche
              </div>
            </div>

            {/* Tipo de propiedad y rating */}
            <div className="flex justify-between items-start my-1">
              <h4 className="text-lg text-secondary">{property.propertyType}</h4>
              <div className="flex items-center gap-1 text-secondary">
                <span className="font-bold text-black">5.0</span>
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={assets.star} alt="star" width={18} />
                ))}
              </div>
            </div>

            {/* Facilidades */}
            <div className="flex gap-x-4 mt-3">
              <p className="flex items-center gap-x-2 border-r border-slate-900/50 pr-4 font-medium">
                <img src={assets.bed} alt="Habitaciones" width={19} />
                {property.facilities.bedrooms}
              </p>
              <p className="flex items-center gap-x-2 border-r border-slate-900/50 pr-4 font-medium">
                <img src={assets.bath} alt="Baños" width={19} />
                {property.facilities.bathrooms}
              </p>
              <p className="flex items-center gap-x-2 border-r border-slate-900/50 pr-4 font-medium">
                <img src={assets.car} alt="Garaje" width={19} />
                {property.facilities.garages}
              </p>
              <p className="flex items-center gap-x-2 font-medium">
                <img src={assets.ruler} alt="Área" width={19} />
                400 m²
              </p>
            </div>

            {/* Descripción */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Detalles de la propiedad</h4>
              <p className="text-gray-600">{property.description}</p>
            </div>

            {/* Amenidades */}
            <h4 className="text-lg font-semibold mt-6 mb-2">Amenidades</h4>
            <div className="flex flex-wrap gap-3">
              {property.amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="px-3 py-2 rounded-lg bg-secondary/10 ring-1 ring-slate-900/10 text-sm"
                >
                  {amenity}
                </div>
              ))}
            </div>

            {/* Formulario de disponibilidad */}
            <form className="text-gray-600 rounded-lg px-6 py-4 flex flex-col lg:flex-row gap-4 max-w-full lg:max-w-full ring-1 ring-slate-900/5 mt-10 ">
              {/* Check in */}
              <div className="flex flex-col w-full">
                <label htmlFor="checkInDate" className="flex items-center gap-2 text-sm font-medium">
                  <img src={assets.calendar} alt="CheckIn" width={20} />
                  Check in
                </label>
                <input
                  type="date"
                  id="checkInDate"
                  className="rounded-lg bg-secondary/10 border border-gray-300 px-3 py-1.5 mt-1 text-sm outline-none"
                />
              </div>

              {/* Check out */}
              <div className="flex flex-col w-full">
                <label htmlFor="checkOutDate" className="flex items-center gap-2 text-sm font-medium">
                  <img src={assets.calendar} alt="CheckOut" width={20} />
                  Check out
                </label>
                <input
                  type="date"
                  id="checkOutDate"
                  className="rounded-lg bg-secondary/10 border border-gray-300 px-3 py-1.5 mt-1 text-sm outline-none"
                />
              </div>

              {/* Personas */}
              <div className="flex flex-col w-full">
                <label htmlFor="guests" className="flex items-center gap-2 text-sm font-medium">
                  <img src={assets.user} alt="Guests" width={20} />
                  Personas
                </label>
                <input
                  type="number"
                  id="guests"
                  min={1}
                  max={5}
                  className="rounded-lg bg-secondary/10 border border-gray-300 px-3 py-1.5 mt-1 text-sm outline-none"
                />
              </div>

              {/* Botón */}
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-md bg-black text-white px-6 py-2 hover:bg-gray-800 transition min-w-[11rem]"
              >
                <img src={assets.search} alt="Buscar" width={20} className="invert" />
                <span>Buscar</span>
              </button>
            </form>
          </div>

          {/* Lado derecho (sidebar) */}
          <div className="flex-1 md:max-w-sm max-w-full  ">
            <div className="p-6 rounded-xl border border-slate-900/10 bg-white sticky top-28 space-y-6">
              {/* Formulario de contacto */}
              <h4 className="text-lg font-semibold">Agenda de Contacto</h4>
              <form className="flex flex-col gap-3 ">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-black/60"
                  required
                />
                <input
                  type="email"
                  placeholder="Tu correo"
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-black/60"
                  required
                />
                <textarea
                  rows={4}
                  placeholder="Mensaje"
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-black/60"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-black text-white rounded-lg py-2 hover:bg-gray-800 transition"
                >
                  Enviar Mensaje
                </button>
              </form>

              {/* Contacto de la agencia */}
              <h4 className="text-lg font-semibold mt-6">Contacto de la agencia</h4>
              <div className="border border-slate-900/10 rounded-lg p-4 space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-medium">{property.agency.name}</h5>
                    <p className="text-gray-500 text-xs">Agencia</p>
                  </div>
                  <p className="bg-green-100 text-green-600 border border-green-200 px-2 py-0.5 rounded-full text-xs">
                    Oficial
                  </p>
                </div>
                <div className="flex justify-center">
                  <img
                    src={property.agency.owner.image}
                    alt="logo agencia"
                    className="w-20 h-20 object-cover rounded-full border"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 p-2 rounded-full border border-green-200">
                    <img src={assets.phone} alt="teléfono" width={14} />
                  </div>
                  <p>{property.agency.contact}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-blue-100 p-2 rounded-full border border-blue-200">
                    <img src={assets.mail} alt="correo" width={14} />
                  </div>
                  <p>{property.agency.email}</p>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition">
                  <img src={assets.mail} alt="correo" width={18} />
                  Enviar correo
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition">
                  <img src={assets.phone} alt="llamar" width={18} />
                  Llamar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { assets, cities } from "../assets/data";
import toast from "react-hot-toast";

const AgencyReg = () => {
  const { setShowAgencyReg, axios, getToken, setIsOwner } = useAppContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      const { data } = await axios.post(
        "/api/agencies",
        { name, email, contact, address, city },
        { headers: { Authorization: `Bearer ${await getToken()}` } }
      );
      if (data.success) {
        toast.success(data.message);
        setIsOwner(true);
        setShowAgencyReg(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      onClick={() => setShowAgencyReg(true)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
    >
      {/* Modal con animación */}
      <form
        onSubmit={onSubmitHandler}
        onClick={(e) => e.stopPropagation()}
        className="flexCenter bg-white rounded-xl max-w-4xl w-full max-md:mx-2 relative overflow-hidden 
        animate-[fadeIn_0.3s_ease-out] shadow-xl"
      >
        {/* Imagen lateral */}
        <img
          src={assets.createPrp}
          alt="img"
          className="w-1/2 rounded-l-xl hidden md:block object-cover"
        />

        {/* Contenedor del formulario */}
        <div className="flex flex-col md:w-1/2 p-8 md:p-10">
          {/* Botón cerrar */}
          <img
            src={assets.close}
            alt="cerrar"
            onClick={() => setShowAgencyReg(false)}
            className="absolute top-4 right-4 h-6 w-6 p-1 cursor-pointer bg-secondary/50 hover:bg-secondary/70 rounded-full shadow-md transition"
          />

          {/* Título */}
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Registrar Agencia
          </h3>

          {/* Inputs en grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre de Agencia
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                id="name"
                placeholder="Nombre..."
                className="mt-1 w-full rounded-lg border border-slate-300 bg-secondary/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-700"
              >
                Contacto
              </label>
              <input
                onChange={(e) => setContact(e.target.value)}
                value={contact}
                type="text"
                id="contact"
                placeholder="Contacto..."
                className="mt-1 w-full rounded-lg border border-slate-300 bg-secondary/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                id="email"
                placeholder="Correo..."
                className="mt-1 w-full rounded-lg border border-slate-300 bg-secondary/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Dirección
              </label>
              <input
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                type="text"
                id="address"
                placeholder="Dirección..."
                className="mt-1 w-full rounded-lg border border-slate-300 bg-secondary/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                Ciudad
              </label>
              <select
                onChange={(e) => setCity(e.target.value)}
                value={city}
                id="city"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-secondary/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
                <option value="">Seleccionar ciudad</option>
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-indigo-600 py-2 text-white font-medium hover:bg-indigo-700 transition cursor-pointer"
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AgencyReg;

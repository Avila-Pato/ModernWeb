import React from "react";
import { assets, cities } from "../assets/data";

const Hero = () => {
  return (
    <div className="h-screen w-screen bg-[url('/src/assets/bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="max-padd-container h-screen w-screen">
        {/* Overlay */}
        <div className="absolute inset-0  bg-black/30 z-0">
          {/* Container */}
          <div className="relative flex justify-end mx-auto flex-col gap-4 h-full py-6 sm:pt-18 z-10">
            {/* Center */}
            <div className="flex flex-col mt-12  text-white ">
              <div className="mx-12 lg:mx-12 ">

              <button className="p-1 flex items-center space-x-4 border border-white medium-13 rounded-full px-4 pr-0.5 cursor-pointer">
                <span >Explora Como te simplificamos las vistas y espacios</span>
                <span className="flexCenter size-6 p-1 rounded-full bg-white">
                  <img src={assets.right} alt="RightIcobn" width={20} className=" transition-transform duration-300 hover:translate-x-0.5"  />
                </span>
              </button>
              <h2 className="h2 capitalize mx-2 md:mx-0">
                Explora{" "}
                <span
                  className="bg-gradient-to-r from-secondary to-white
            bg-clip-text text-transparent"
                >
                  {" "}
                  Excepcionales Propiedades{" "}
                </span>{" "}
                Rodeadas de Naturaleza
              </h2>
              </div>

              {/* Busqieda de reservas en el formulario */}
              <form className="bg-white  text-gray-600 rounded-xl px-6 py-6 flex flex-col  lg:flex-row lg:items-end gap-6 lg:gap-8 max-w-6xl mx-12 shadow-sm ring-1 ring-slate-900/5">
                {/* Destinos */}
                <div className="flex flex-col w-full ">
                  <label
                    htmlFor="destinationInput"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"
                  >
                    <img src={assets.pin} alt="LocationIcon" width={20} />
                    Destinos
                  </label>
                  <input
                    list="destinations"
                    id="destinationInput"
                    type="text"
                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                    placeholder="¿A dónde quieres ir?"
                  />
                  <datalist id="destinations">
                    {cities.map((city, index) => (
                      <option key={index} value={city} />
                    ))}
                  </datalist>
                </div>

                {/* Check in */}
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="checkIn"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"
                  >
                    <img src={assets.calendar} alt="CheckIn" width={20} />
                    Check in
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                  />
                </div>

                {/* Check out */}
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="checkOut"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"
                  >
                    <img src={assets.calendar} alt="CheckOut" width={20} />
                    Check out
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                  />
                </div>

                {/* Personas */}
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="guests"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"
                  >
                    <img src={assets.user} alt="Guests" width={20} />
                    Personas
                  </label>
                  <input
                    type="number"
                    id="guests"
                    min={1}
                    max={5}
                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                  />
                </div>

                {/* Botón */}
                <button
                  type="submit"
                  className="flex items-center justify-center gap-1 bg-black rounded-md  py-3 px-6 text-white mx-auto  cursor-pointer max-lg:w-full max-md:py-1"
                >
                  <img src={assets.search} alt="SearchIcon" width={20} className="invert" />
                  <span>Buscar</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

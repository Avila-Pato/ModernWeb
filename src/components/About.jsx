import React from "react";
import Title from "./Title";
import { assets } from "../assets/data";

const About = () => {
  return (
    <section className="max-padd-container py-16 xl:py-28 !pt-36">
      {/* contenedor */}
      <div className="flex items-center flex-col lg:flex-row gap-12">
        {/* info y lado izquierdo */}
        <div className="flex-1">
          <Title
            title1={"Tu verdadera confianza en tu lugar de descanso"}
            title2={"Te ayudamos, en cada paso de tu viaje"}
            para={
              "Experiencias modernas a tu alcance. Precencia nuestras propiedades, disfruta de la comodidad y estilo de espacios diseñados para ti."
            }
            titleStyles={"mb-10"}
          />
          <div className="flex flex-col gap-6 mt-5">
            <div className="flex gap-3">
              <img src={assets.calendarSecondary} alt="calendar" width={20} />
              <p>Tu horario de llegada y salida</p>
            </div>

            <div className="flex gap-3">
              <img src={assets.graph} alt="calendar" width={20} />
              <p>Tiempo real, precios y disponibilidad</p>
            </div>
            <div className="flex gap-3">
              <img src={assets.map} alt="calendar" width={20} />
              <p>Amigable interface de busqueda</p>
            </div>

            <div className="flex gap-3">
              <img src={assets.pound} alt="calendar" width={20} />
              <p>Acceco gratis a todas nuestras propiedades</p>
            </div>
          </div>
          {/* rating */}
          <div className="flex items-center divide-x divide-gray-300 mt-3">
            <div className="flex -space-x-3 pr-3">
              <img
                src={assets.user1}
                alt="image"
                className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-1"
              />
              <img
                src={assets.user2}                alt="image"
                className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-[2]"
              />
              <img
                src={assets.user3}
                alt="image"
                className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-[3]"
              />
              <img
                src={assets.user4}
                alt="image"
                className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-[4]"
              />
            </div>
            <div className="pl-3">
              <div className="flex items-center">
                <img src={assets.star} alt="star" width={17} />
                <img src={assets.star} alt="star" width={17} />
                <img src={assets.star} alt="star" width={17} />
                <img src={assets.star} alt="star" width={17} />
                <img src={assets.star} alt="star" width={17} />

              
                <p className="text-gray-600 font-medium ml-2">5.0</p>
              </div>
              <p className="text-sm text-gray-500">
                Confian{" "}
                <span className="font-medium text-gray-800">100,000+</span>{" "}
                Usuarios
              </p>
            </div>
          </div>
        </div>
        {/* Imagen del lado derecho */}
        <div className="flex-1">
          <div className="relative flex justify-end">
            <img src={assets.about} alt="about" className="rounded-3xl"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

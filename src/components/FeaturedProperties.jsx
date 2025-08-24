import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";
import { assets } from "../assets/data";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';
import { useAppContext } from "../context/AppContext";

const FeaturedProperties = () => {
  const  { properties } = useAppContext()

  return (
    <section className="max-padd-container py-16 xl:py-22 ">
        <span className="medium-18">La propiedad que  desees </span>
        <h2 className="h2">Descubre el  lugar perfecto</h2>
        <div className="flexBetween mt-8 mb-6">
          <h5>
            {" "}
            <span className="font-bold">Mostrando 1-9</span> desde 3k listings{" "}
          </h5>
          <Link to={"/listing"} onClick={() => scrollTo(0, 0)} className="bg-secondary/10 ring-1 ring-slate-900/15 text-white text-2xl rounded-md p-2 flexCenter">
            <img src={assets.sliders} />
          </Link>
        </div>
        {/* Contenedor  */}
        <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          600: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1124: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 30,
          }
        }}
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Autoplay]}
        className="h-[488px] md:h-[533px] xl:h-[422px] mt-5"
      >
        {properties.map((property) => (
             <SwiperSlide key={property._id} className="flex justify-center">
                  <Item property={property}/>
             </SwiperSlide>
        ))}   
      </Swiper>
    </section>
  );
};

export default FeaturedProperties;

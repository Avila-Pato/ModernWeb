import React from 'react'
import { useState } from 'react';

const PropertyImages = ({property}) => {
    const [hoveredIndex, setHoveredIndex] = useState(null); // Estado para expandir la imagen
    
    const imageCaptions = [
    {
        heading: "Vista frontal",
        desc: "Una vista frontal de la propiedad que muestra su fachada y entrada principal.",
    },
    {
        heading: "Vista interior",
        desc: "Un vistazo al interior de la propiedad, destacando el diseño y distribución de los espacios.",
    },
    {
        heading: "Vista aérea",
        desc: "Fotografía tomada desde arriba que permite apreciar la propiedad en su totalidad y sus alrededores.",
    },
    {
        heading: "Vista trasera",
        desc: "Imagen de la parte posterior de la propiedad, incluyendo patio, jardín o áreas adicionales.",
    },
];


  return (
    <div className='flex max-sm:gap-1 max-md:gap-3 gap-5 h-[400px] w-full'>
        {property.images.map((pImg, index) => {
            const caption = imageCaptions[index];
            const isHoveered = hoveredIndex === index;

            return (
                <div key={index} 
                className={`relative group transition-all duration-500 h-[400px] overflow-hidden rounded-2xl ${isHoveered ? "flex-grow w-full": "max-sm:w-10 max-md:w-20 w-56"
                }`}
                onMouseEnter={() => setHoveredIndex(index)} 
                onMouseLeave={() => setHoveredIndex(0)}
                >
                <img src={pImg} alt={property.title} className='h-full w-full o object-cover object-center rounded-2xl'/>
                <div className='absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/40 opacity-0
                group-hover:opacity-100 transition-all duration-300 roudend-2xl'>
                    <h3 className='h3'>
                        {caption.heading}
                    </h3>
                    <p className='text-white/90'>
                    {caption.desc}
                    </p>
                </div>
                </div>
            )
        })

        }

    </div>
   
  )
}

export default PropertyImages

import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/data'

const Item = ({ property }) => {
  return (
    <Link to={`/listing/${property._id}`} 
    className="bg-white block rounded-lg ring-1 ring-slate-900 ">
      {/* Imagen */}
      <div className='relative'>
        <img  src={property.images[0]} alt={property.title} 
        className='h-[13rem] w-full aspect-square object-cover rounded-t-xl'/>
      </div>
      {/* Informacion */}
      <div className='p-3'>
        <div className='flexBetween  '>
          <h5 className='bold-16 mt-1'>{property.propertyType}</h5>
          <div className='bold-15 text-secondary'>${property.price.sale} | ${property.price.rent}.00 
            <span className='text-xs'>/noches</span></div>
        </div>
        <h4 className='h4 line-clamp-1'>{property.title}</h4>
        <div className='flex gap-2 py-2'>

          <p className='flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]'>
            <img src={assets.bed} alt='facilitiesIcon' width={21} />
            {property.facilities.bedrooms} 
          </p>

           <p className='flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]'>
            <img src={assets.bath} alt='facilitiesIcon' width={21} />
            {property.facilities.bathrooms} 
          </p>

           <p className='flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]'>
            <img src={assets.car} alt='facilitiesIcon' width={21} />
            {property.facilities.garages} 
          </p>

           <p className='flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]'>
            <img src={assets.ruler} alt='facilitiesIcon' width={21} />
            {property.facilities.area} m²
          </p>
        </div>
        <p className='pt-2 mb-4 line-clamp-2'>{property.description}</p>
      </div>
    </Link>
  )
}

export default Item
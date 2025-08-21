import React from 'react'
import { assets } from '../assets/data'

const Cta = () => {
  return (
    <section className="bg-[#fffbee] pt-16 xl:pt-22">
     <div className="max-padd-container mx-2 md:mx-auto p-px ">
            <div className="flex flex-col items-center justify-center text-center py-12 md:py-16 rounded-[15px] ">  
                <div className="flexCenter bg-black/80 text-white px-3 py-1.5 ring-1 ring-slate-900/10 gap-1
                rounded-full text-xs">
                    <img src={assets.rocket} alt='' width={17} className='invert' />
                    <span>Trusted by Experts</span>
                </div>
                <h2 className="h2 mt-2">
                    Vende y renta rapido con <span className='text-secondary' > Expertos en el mercado,</span>
                    <br /> Y Aumenta tus ventas 
                </h2>
                <p className="text-slate-500 mt-2 max-w-lg max-md:text-sm">Logra una mayor visibilidad y aumenta tus ventas con nuestra plataforma de arriendo de propiedades.</p>
                <button type="button" className="btn-secondary mt-4"> 
                    Empezar ahora
                </button>
            </div>
        </div>
        </section>
  )
}

export default Cta
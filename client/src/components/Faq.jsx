import React from 'react'
import { assets } from '../assets/data';
import Title from "./Title";
import { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

    const faqsData = [
    {
        question: '¿Cómo puedo arrendar una propiedad?',
        answer: 'Solo debes registrarte, buscar la propiedad de tu interés y contactar directamente al propietario o corredor.'
    },
    {
        question: '¿Qué documentos necesito para arrendar?',
        answer: 'Generalmente se solicita cédula de identidad, comprobante de ingresos y un aval o codeudor solidario.'
    },
    {
        question: '¿Las propiedades están disponibles de inmediato?',
        answer: 'Sí, muchas propiedades están listas para ser arrendadas de forma inmediata, dependiendo del acuerdo con el propietario.'
    },
    {
        question: '¿Puedo agendar visitas a las propiedades?',
        answer: 'Claro, puedes coordinar visitas directamente desde la plataforma para conocer la propiedad antes de arrendar.'
    },
    {
        question: '¿El arriendo incluye gastos comunes?',
        answer: 'Depende de la propiedad. Algunos arriendos incluyen gastos comunes, mientras que en otros se pagan por separado.'
    }
];




  return (
    <section className='max-padd-container py-16 xl:py-22 '>
      {/* Contenedor */}
      <div className='flex flex-col  gap-y-12 lg:flex-row '>
        {/* Imafen del lado izquiedo */}
        <div className='flex-1'>
          <div className='relative rounded-3xl overflow-hidden inline-block'>
            <img src={assets.faq} alt="imagenFAQ"  className='block w-full '  />
            <div className='absolute top-5 left-5 right-5 bg-white p-3 rounded-xl flex items-center gap-4 z-10'>
              <img src={assets.signature} alt='signature' width={55}/>
            <div>
              <h5 className='bold-16'>Tiempo Real Precios y Disponibilidad</h5>
              <p>Claridad, y simplicidad cubrimos tu estadia para hacer tu viaje y estadia mas facil</p>
            </div>
            </div>
          </div>
        </div>
      {/* FAQS LADO DERECHO */}
      <div className='flex-1 flex flex-col justify-center'>
         <Title
            title1={"Casas hechas para vivir"}
            title2={"Simplicidad para buscar las propiedades en cada paso de tu viaje"}
            para={
              "Experiencias modernas a tu alcance. Precencia nuestras propiedades, disfruta de la comodidad y estilo de espacios diseñados para ti."
            }
            titleStyles={"mb-10"}
          />
                <div className='max-w-xl w-full  flex flex-col gap-4 items-start text-left'>
                    {faqsData.map((faq, index) => (
                        <div key={index} className='flex flex-col items-start w-full'>
                            <div className='flex items-center justify-between w-full cursor-pointer bg-secondary/10 border border-slate-900/10 p-2 px-4 rounded' onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                                <h2 className='text-sm'>{faq.question}</h2>
                                <img src={assets.down}/>
                            </div>
                            <p className={`text-sm text-slate-500 px-4 transition-all duration-500 ease-in-out ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
      </div>

    </section>
  )
}

export default Faq
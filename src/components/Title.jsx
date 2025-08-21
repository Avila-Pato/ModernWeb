import React from 'react'

const Title = ({ title1, title2, titleStyles, title25Styles, paraStyles, para }) => {
  return (
    <div className={`${titleStyles} `} >
      <h1 className="h4 text-secondary ">
        {title1}
      </h1>
      <h4 className={`${title25Styles} h1 capitalize`}>
        {title2}
      </h4>
      <p className={`${paraStyles} max-w-lg mt-2`}>
        {para ? para : 'Experiencias modernas a tu alcance. Precencia nuestras propiedades, disfruta de la comodidad y estilo de espacios diseñados para ti.'}
      </p>
    </div>
  )
}


export default Title
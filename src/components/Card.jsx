import React from 'react'

export default function Card({guitar}) {
  
  console.log(guitar.id);    
  console.log(guitar.price);
  
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="row align-items-center">
        <div className="col-4">
          <img
            className="img-fluid"
            src={`/img/${guitar.image}.jpg`}
            alt="imagen guitarra"
          />
        </div>

        <div className="col-8">
          <h3 className="text-black fs-4 fw-bold text-uppercase">{guitar.name}</h3>
          <p>{guitar.description}</p>
          <p className="fw-black text-primary fs-3">${guitar.price}</p>
          <button type="button" className="btn btn-dark w-100">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  )
}


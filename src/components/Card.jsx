import React from 'react'

export default function Card({guitar,cart,setCart}) {
  
  //console.log(guitar.id);    
  //console.log(guitar.price);

  // Funcion para manejar el clic
  /*const handleClick = (item) => {
    const existeEnCarrito = cart.find(g => g.id === item.id)
    if(existeEnCarrito){
      const carritoActualizado = cart.map(g => {
        if(g.id === item.id){
          return {...g, cantidad: g.cantidad + 1}
        }
        return g;
  })
      setCart(carritoActualizado)
    } else {
      setCart([...cart, {...item, cantidad: 1}])
    }
  }*/
  /*const handleClick = (item) => {
    const existeEnCarrito = cart.find(g => g.id === item.id)

    if (existeEnCarrito) {
      const carritoActualizado = cart.map(g => {
        if (g.id === item.id) {
          return { ...g, cantidad: g.cantidad + 1 }
        }
        return g
      })
      setCart(carritoActualizado)
    } else {
      setCart([
        ...cart,
        {
          ...item,
          cantidad: 1
        }
      ])
    }
  }*/
  
  const addToCart = (item) => {
    console.log('Agregando al carrito:', item)
    const itemExist = cart.findIndex(guitar => guitar.id === item.id)
    if (itemExist >= 0) {
      //aumentar el valor de cantidad
      const updatedCart = [...cart]
      updatedCart[itemExist].quantity += 1;
      setCart(updatedCart);

    }else {
      //creando quantity
      item.quantity= 1;
      setCart([...cart, item])
    }
  }
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
          <button type="button" className="btn btn-dark w-100"
          onClick={() => addToCart(guitar)}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  )
}


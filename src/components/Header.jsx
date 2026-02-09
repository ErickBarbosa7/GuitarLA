import React from "react";
import Item from "./Item";

export default function Header({ cart, setCart }) {
  // crear componente item
  // agregar los parametros {cart} = img, nombre y precio
  const isEmpty = () => cart.length === 0;
  const totalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  const increaseQuantity = (id) => {
  const updatedCart = cart.map(item =>
    item.id === id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  )
  setCart(updatedCart)
}

const decreaseQuantity = (id) => {
  const updatedCart = cart
    .map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 }
      }
      return item
    }).filter(item => item.quantity > 0)

  setCart(updatedCart)
}

const removeItem = (id) => {
  const updatedCart = cart.filter(item => item.id !== id)
  setCart(updatedCart);
}
  
  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img
                className="img-fluid"
                src="/img/logo.svg"
                alt="imagen logo"
              />
            </a>
          </div>

          <nav className="col-md-6 mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img
                className="img-fluid"
                src="/img/carrito.png"
                alt="imagen carrito"
              />

              <div id="carrito" className="bg-white p-3">
                {isEmpty() ? (
                  <p className="text-center">El carrito esta vacio</p>) : (
                  <div>
                    <table className="w-100 table">
                      <thead>
                        <tr>
                          <th>Imagen</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                          <th></th>
                        </tr>
                      </thead>

                      <tbody>
                        {cart.map((item) => (
                          <Item
                           key={item.id}
                           item={item}
                           increaseQuantity={increaseQuantity}
                           decreaseQuantity={decreaseQuantity}
                           removeItem={removeItem}
                            />
                        ))}
                      </tbody>
                    </table>

                    <p className="text-end">
                      Total pagar:{" "}
                      <span className="fw-bold"> ${totalPrice()} </span>
                    </p>


                    <button className="btn btn-dark w-100 mt-3 p-2">
                      Vaciar Carrito
                    </button>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

import React from 'react'

export default function Item({item, increaseQuantity, decreaseQuantity, removeItem}) {
  return (
    <tr>
      <td>
        <img
            className="img-fluid"
            src={`/img/${item.image}.jpg`}
            alt="imagen guitarra"
          />
      </td>
      <td>{item.name}</td>
      <td className='bold'>${item.price}</td>

      <td className="bold d-flex align-items-center gap-2">
        <button className="btn btn-dark btn-sm" onClick={() => decreaseQuantity(item.id)}>
          −
        </button>
        {item.quantity}
        <button className="btn btn-dark btn-sm" onClick={() => increaseQuantity(item.id)}>
          +
        </button>
      </td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.id)}>
          X
        </button>
      </td>
    </tr>
  )
}

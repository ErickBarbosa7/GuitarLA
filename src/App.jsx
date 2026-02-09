import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Card from './components/Card';
import { useState, useEffect } from 'react';
import { db } from './db/db.js';

function App() {
  //crear estado para el carrito
  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
  }
  
  const [data] = useState(db);
  // usar el localStorage para guardar en el carrito
  const [cart, setCart] = useState(initialCart);
  //sin usar localStorage
  //const [cart, setCart] = useState([]);

  // console.log(cart)
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])


 // const [customer, setCustomer] = useState({});
 // const [total, setTotal] = useState(0);
 // const [products, setProducts] = useState([]);
  //const [modal, setModal] = useState(false);

  //console.log(total);
  //()=>setTotal(100);
  //if(auth){
   // const (modal, setModal)=useState(false);
 // }


 //useEffect(() => {
  //setData(db);
  //}, []);
//console.log(data);


  return (
    <div>
      <Header cart = {cart} setCart={setCart} />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">

          {data.map((guitar) => (
              <Card
              key={guitar.id}
              guitar={guitar}
              cart= {cart}
              setCart={setCart}
              
              />
            ))}
          
         
        </div>
      </main>


      <Footer></Footer>

    </div>

  )
}

export default App
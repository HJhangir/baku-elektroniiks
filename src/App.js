import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import './NotFound.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './components/Navbar'
import Navbar from './components/Navbar';
import Header from './components/Header'
import Product from './components/Product'
import Balans from './components/Balans'
import Basket from './components/Basket'
import BasketItem from './components/BasketItem'
import Magazalar from './components/Magazalar';
import NotFound from './components/NotFound';

import { useEffect, useState } from 'react';
import products from './products.json'

function App() {

  //HOOK lardan istifade olunur veziyet deyishmesi ucun
  //HOK Higher Order Component
  const [money, setMoney] = useState(6000)
  const [sebet, setSebet] = useState([])
  const [total, setTotal] = useState(0)

  const resetBasket = () => {
    setSebet([])

  }

  useEffect(() => {
    setTotal(
      sebet.reduce((acc, item) => {
        return acc + (item.amount * (products.find(product => product.id === item.id).price))
      }, 0)
    )
  }, [sebet])










  return (

    <div className="App">
      <BrowserRouter>
      <Navbar total={total} money={money} />

      <Routes>
        <Route path='/' element={App}/>
        <Route path='/kampaniyalar' element={<Header/>}/>
        <Route path='/magazalar' element={<Magazalar/>}/>
        <Route path='/*' element={<NotFound/>}/>


      </Routes>
      </BrowserRouter>

      <div className="mehsullar">

        {
          products.map((p, index) => (
            <Product key={index} total={total} money={money} basket={sebet} setBasket={setSebet} product={p} />
          ))
        }
      </div>
      {
        total > 0 && (
          <Basket resetBasket={resetBasket} products={products} total={total} basket={sebet} />
        )
      }
      </div>






  );
}

export default App;

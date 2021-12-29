import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import CartContextProvider from './components/CartContext';
import Cart from './components/Cart';



const App =() => {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>} />
              <Route path='/detail/:paramId' element={<ItemDetailContainer />} />
              <Route path='count' element={<ItemCount/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path = "*" element={<h2>Not found</h2>}/>
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
      
    </div>
  );
}

export default App;

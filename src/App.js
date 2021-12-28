import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';



const App =() => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route exact path='/' element={<ItemListContainer/>}/>
            <Route exact path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/detail/:paramId' element={<ItemDetailContainer />} />
            <Route path='count' element={<ItemCount/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './assets/css/styles.css';
import NavBar from "./components/NavBar/NavBar";
import { lazy, Suspense, useContext, createContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from './views/Home/Home';
import Hombre from './components/Categories/components/pages/Hombre';
import Mujer from './components/Categories/components/pages/Mujer';
import Otros from './components/Categories/components/pages/Otros';
import Product from './views/Product/Product';
import styled from 'styled-components';

export const AppContext = createContext(null) 
function App() {
  const [cart, setCart] = useState({empty: true, items: []})

  const value = { cart, setCart }
  console.log("🚀 ~ file: App.js:17 ~ App ~ cart", cart)

  return (
    <Root>
      <BrowserRouter>
        <AppContext.Provider value={value} >
          <NavBar />
          <Suspense fallback={<p>Cargando.....</p>}>
            <Routes >
              <Route path='/' element={<Home />} />
              <Route path='/hombre' element={<Hombre />} />
              <Route path='/mujer' element={<Mujer />} />
              <Route path='/otros' element={<Otros />} />
              <Route path='/product/:id' element={<Product />} />
              <Route path='/cart' element={<Product />} />
            </Routes>
          </Suspense>

        </AppContext.Provider>
      </BrowserRouter>
    </Root>
  );
}

export default App;

const Root = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`

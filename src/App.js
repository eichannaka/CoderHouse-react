import './assets/css/styles.css';
import NavBar from "./components/NavBar/NavBar";
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { createContext } from 'react';
import Home from './views/Home/Home';
import Hombre from './components/Categories/components/pages/Hombre';
import Mujer from './components/Categories/components/pages/Mujer';
import Otros from './components/Categories/components/pages/Otros';
import Product from './views/Product/Product';
import styled from 'styled-components';


// Lazy loader

function App() {
  return (
    <Root>

    <BrowserRouter >
      <NavBar />
      <Suspense fallback={<p>Cargando.....</p>}>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/hombre' element={<Hombre />} />
          <Route path='/mujer' element={<Mujer />} />
          <Route path='/otros' element={<Otros />} />
          <Route path='/product/:id' element={<Product/>} />
        </Routes>
      </Suspense>
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

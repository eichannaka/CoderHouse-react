import './assets/css/styles.css';
import NavBar from "./components/NavBar/NavBar";
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

// import Home from './views/Home/Home';
// import Photo from './views/Photo/Photo';


// Lazy loader
const Photo = lazy(()=> import('./views/Photo/Photo'))
const Home = lazy(()=> import('./views/Home/Home'))

function App() {
  return (
    <BrowserRouter >
      <NavBar />
      <Suspense fallback={<p>Cargando.....</p>}>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/photo/:id' element={<Photo/>} />
        </Routes>

      </Suspense>
    </BrowserRouter>

  );
}

export default App;

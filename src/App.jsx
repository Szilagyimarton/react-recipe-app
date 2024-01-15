import {  Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './App.css'
import Home from './components/Home';
import Categories from './Categories';
import Area from './Area';


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/categories' element={<Categories />}/>
      <Route path='/area' element={<Area />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App

import logo from './logo.svg';
import './App.css';
import { Cart } from './components/Cart';
import {BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { Products } from './components/Products';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Cart></Cart>}></Route>
      <Route path="/product" element={<Products></Products>}></Route>
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;

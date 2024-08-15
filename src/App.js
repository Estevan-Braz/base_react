import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Categorias from './paginas/Categorias';
import Produtos from './paginas/Produtos';

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/"           element={<Inicio />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/produtos"   element={<Produtos />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

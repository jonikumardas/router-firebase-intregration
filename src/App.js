import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LogIn from './components/Login/LogIn';
import Products from './components/products/Products';
import Registation from './components/Registation/Registation';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/registation' element={<Registation></Registation>}> </Route>
        </Routes>
    </div>
  );
}

export default App;

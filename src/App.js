import './App.css';
import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Home from './Components/Pages/Home'; 
import Products from './Components/Pages/Products'; 
import AddProducts from './Components/Pages/AddProducts';
import ProductDetails from './Components/Pages/ProductDetails';
import ProductEdit from './Components/Pages/ProductEdit';

function App() {
  return (
    <>
    <Navbar />
    <div className='row'>
      <div className='col-2 sidebar'>
        <Sidebar/>
      </div>
      <div className='col-10'>
        
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='Products' element={<Outlet />}>
            <Route path='' element={<Products/>}></Route>
            <Route path='add' element={<AddProducts />}></Route>
            <Route path='edit/:Productid' element={<ProductEdit />}></Route>
            <Route path=':ProductID' element={<ProductDetails />}></Route>
          </Route>
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;

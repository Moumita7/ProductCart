
import {             Route,  Routes } from 'react-router-dom';
import CataloguePage from '../Components/CataloguePage';
import CartPage from '../Components/CartPage';


function AllRoutes() {
  return (
    <Routes>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Catalogue</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav> */}
      <Route path='/' element={<CataloguePage/>}/>
      <Route path='/cart' element={<CartPage/>}/>

   
    </Routes>
  );
}

export default AllRoutes;

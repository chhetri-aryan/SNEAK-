import './App.css';
import HomePage from './customer/pages/HomePage/HomePage';
import { Routes, Route} from 'react-router-dom';
import ProductFinal from './customer/pages/HomePage/ProductPage';
import Login from './customer/components/login_register/Login';
import Register from './customer/components/login_register/Register';
import Nav from './customer/components/Nav/Nav';
import ScrollToTop from './ScrollToTop';
import ProdDet from './customer/pages/HomePage/ProdDet';
import Cart from './customer/components/Cart/Cart';
import Error from './customer/pages/HomePage/Error';
import { Logout } from './customer/components/login_register/Logout';
import UserDetail from './customer/components/login_register/UserDetail';

function App() {

  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product">
          <Route index element={<ProductFinal />} />
          <Route path=":id" element={<ProdDet />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path='/userinfo' element={<UserDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;

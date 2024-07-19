

import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Orders from './Pages/Oreders/Orders';
import Payment from './Pages/Payment/Payment';
import Cart from './Pages/Cart/Cart';
import SignUp from "./Pages/Auth/SignUp"
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';

function Routing() {
  return (
    <Router>
      <Routes>
          <Route path="/" element= {<Landing/>}/>
          <Route path="/auth" element= {<SignUp/>}/>
          <Route path="/Payment" element= {<Payment/>}/>
          <Route path="/Orders" element= {<Orders/>}/>
          <Route path="/category/:categoryName" element= {<Results/>}/>
          <Route path="/products/:productId" element= {<ProductDetail/>}/>
          <Route path="/Cart" element= {<Cart/>}/>
      </Routes>
    </Router>
  );
}

export default Routing;
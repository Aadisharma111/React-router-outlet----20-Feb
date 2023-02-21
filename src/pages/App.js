import React from 'react' ;
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import Register from './Register';
import Login from './Login';
import Home from './Home';
import Layout from './Layout';
import Notfound from './Notfound';

export default function App() {
  return (
 <BrowserRouter>
    <Routes>
     <Route path="/" element={ <Layout />}>
          <Route index element={ <Home />}></Route>
          <Route path="Login" element={ <Login />}></Route>
          <Route path="Register" element={ <Register />}></Route>
          <Route path="*" element={ <Notfound />}></Route>
  </Route>
   
    </Routes>
 </BrowserRouter>
  )
}

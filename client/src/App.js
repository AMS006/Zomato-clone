import React,{useEffect} from 'react';
import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom'
import HomePage from './pages/Home.page';
import RestrauntPage from './pages/Restraunt.page';
import Checkout from './pages/Checkout.page';

//components
import Overview from './components/Restraunt/Overview';
import Order from './components/Restraunt/Order';
import Menu from './components/Restraunt/Menu';
import Review from './components/Restraunt/Review';
import Photos from './components/Restraunt/Photos';
import {useDispatch} from 'react-redux';
import { getMySelf } from './redux/reducers/user/user.action';

function App() {
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getMySelf());
  },[localStorage])
  
  return (
    <Routes>
      <Route path='/' element={<Navigate to="/delivery" />}></Route>
      <Route path='/:type' element={<HomePage />}></Route>
      <Route path='/restraunt/:id' element={<RestrauntPage />}>
        <Route path ='overview' element={<Overview />}></Route>
        <Route path='order' element={<Order />}></Route>
        <Route path='menu' element={<Menu />}></Route>
        <Route path='photos' element={<Photos />}></Route>
        <Route path='reviews' element={<Review></Review>}></Route>
      </Route>
      <Route path='/checkout/orders' element={<Checkout></Checkout>}></Route>
    </Routes>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register';
import Detail from './pages/Detail/Detail'
import { Provider } from "react-redux";
import { store } from "./redux/configStore";

//css+scss  
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";
import './assets/scss/styles.scss'
//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='' element={<App/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='*' element={<Navigate to={<Home/>}/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='detail'>
          <Route path=':id' element={<Detail/>}></Route>
        </Route>
        {/* <Route path='profile' element={<Login/>}></Route>
        <Route path='search' element={<Login/>}></Route>
        <Route path='cart' element={<Login/>}></Route>
         */}
      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

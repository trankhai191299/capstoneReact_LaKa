import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register';
import './assets/scss/styles.scss'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<App/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='*' element={<Navigate to={<Home/>}/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        {/* <Route path='profile' element={<Login/>}></Route>
        <Route path='search' element={<Login/>}></Route>
        <Route path='cart' element={<Login/>}></Route>
        <Route path='detail' element={<Login/>}></Route> */}
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

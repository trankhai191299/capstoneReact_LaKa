import React from 'react'
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <NavLink to="/">
              <img src="/img/image 3.png" alt="..." />
            </NavLink>
          </div>
          <div className="user-section">
            <NavLink to="/" className="cart d-inline-block">
              <img src="/img/image 8.png" alt="..." />
              <span className="amount-item">(1)</span>
            </NavLink>
            <span className="button-area">
              <NavLink to="/login" className="btn ms-2 me-3">
                Login
              </NavLink>
              <NavLink to="/register" className="btn">
                Register
              </NavLink>
            </span>
          </div>
        </div>
      </div>
      <div className="navbarShop">
        <div className="container">
          <div className="nav">
            <NavLink className="nav-link active" to="/">
              Home
            </NavLink>
            <a className="nav-link" href="#">
              Men
            </a>
            <a className="nav-link" href="#">
              Women
            </a>
            <a className="nav-link" href="#">
              Kid
            </a>
            <a className="nav-link" href="#">
              Sport
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

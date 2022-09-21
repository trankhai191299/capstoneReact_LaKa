import React from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { loginApi } from '../../redux/reducers/userReducer'
import { NavLink } from 'react-router-dom'

export default function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="title mt-5">
          <h3>Login</h3>
          <hr />
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <form>
              <div className="form-group">
                <p>Email</p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group mt-4">
                <p>Password</p>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="row mt-4">
                <div className="col-4"></div>
                <div className="col-4">
                  <NavLink
                    to={"/register"}
                    style={{ color: "#152AEB", display: "inline-block" }}
                    className="mt-2"
                  >
                    Register now
                  </NavLink>
                </div>
                <div className="col-4">
                  <button className="btn rounded-pill">Login</button>
                </div>
              </div>
              <NavLink className='btn'>
                <i></i>
              </NavLink>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
}

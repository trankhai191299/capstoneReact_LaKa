import React from 'react'

export default function Register() {
  return (
    <div>
      <div className="register">
        <div className="container">
          <h3 className="text-center">Register</h3>
          <form className="mt-4" id="registerFrm">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="form-items me-5 mb-3 mt-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="email"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-items me-5 mb-3 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="name"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-items me-5 mb-3 mt-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="password"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-items me-5 mb-3 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="phone"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-items me-5 mb-3 mt-3">
                  <input
                    type="password"
                    className="form-control"
                    id="passwordConfirm"
                    placeholder="password confirm"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-items d-flex justify-content-between align-items-center me-5 mb-3 mt-4">
                  <div className="gender-choice-title">
                    <p>Gender</p>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input mt-3"
                      id="male"
                      type="radio"
                      name="gender"
                      defaultValue="true"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="male">
                      {" "}
                      Male{" "}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input mt-3"
                      id="female"
                      type="radio"
                      name="gender"
                      defaultValue="false"
                    />
                    <label className="form-check-label" htmlFor="female">
                      {" "}
                      Female{" "}
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btnSubmit col-md-12 col-lg-3"
                id="btnSubmit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

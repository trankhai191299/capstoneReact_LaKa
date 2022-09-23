import React from 'react'

export default function Profile() {
  return (
    <div className="profile">
      <div className="container">
        <h3>Profile</h3>
        <div className="profile-update mt-4">
          <div className="row">
            <div className="col-3">
              <img
                src="https://i.pravatar.cc/"
                alt=""
                width={225}
                height={225}
                className="rounded-circle"
              />
            </div>
            <div className="col-9">
              <form className="row">
                <div className="col-6">
                  <div className="form-group form-items">
                    <p>Email</p>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="form-control mb-3"
                    />
                  </div>
                  <div className="form-group form-items">
                    <p>Phone</p>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group form-items">
                    <p>Name</p>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      className="form-control mb-3"
                    />
                  </div>
                  <div className="form-group form-items">
                    <p>Password</p>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                  <div className="row">
                    <div className="col-6">
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
                          <p>
                            Male
                          </p>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input mt-3"
                            id="female"
                            type="radio"
                            name="gender"
                            defaultValue="false"
                          />
                          <p>
                            Female
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 position-relative">
                      <button className='btn btn-update rounded-pill mt-4 position-absolute end-0'>Update</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

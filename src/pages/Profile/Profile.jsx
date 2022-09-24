import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ACCESS_TOKEN, getStore } from '../../util/setting';
import { updateApi,getProfileApi } from '../../redux/reducers/userReducer';

export default function Profile() {
  const {userLogin} = useSelector(state => state.userReducer)
  const dispatch = useDispatch()
  const frm = useFormik({
    initialValues:{
      email:userLogin.email ,
      name:userLogin.name ,
      phone:userLogin.phone ,
      password:userLogin.password ,
      gender:true,
    },
    validationSchema:Yup.object().shape({
      email:Yup.string().email('email không đúng định dạng'),
      password:Yup.string().min(6,'Password có độ dài từ 6 đến 32 ký tự').max(32,'Password có độ dài từ 6 đến 32 ký tự').nullable(true),
      name:Yup.string().matches(/^[AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+ [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+(?: [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]*)*/,'Tên không đúng định dạng'),
      phone:Yup.string().matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,'Số điện thoại không đúng định dạng(09...)').max(10,'Số điện thoại tối đa 10 số'),
    }),
    onSubmit:(values)=>{
      console.log(values);
      dispatch(updateApi(values))
    }
  })
  return (
    <div className="profile">
      <div className="container">
        <h3 className='mt-3'>Profile</h3>
        <div className="profile-update mt-5">
          <div className="row">
            <div className="col-3">
              <img
                src={userLogin?.avatar}
                alt='...'
                width={225}
                height={225}
                className="rounded-circle"
              />
            </div>
            <div className="col-9 update-section">
              <form className="row" onSubmit={frm.handleSubmit}>
                <div className="col-6">
                  <div className="form-group form-items">
                    <p>Email</p>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder={userLogin?.email}
                      className="form-control mb-3"
                      onChange={frm.handleChange} onBlur={frm.handleBlur}
                    />
                    {frm.errors.email?<span className='text-danger text-uppercase'>{frm.errors.email}</span>:""}
                  </div>
                  <div className="form-group form-items">
                    <p>Phone</p>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder={userLogin?.phone}
                      className="form-control"
                      onChange={frm.handleChange} onBlur={frm.handleBlur}
                    />
                    {frm.errors.phone?<span className='text-danger text-uppercase'>{frm.errors.phone}</span>:""}
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group form-items">
                    <p>Name</p>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder={userLogin?.name}
                      className="form-control mb-3"
                      onChange={frm.handleChange} onBlur={frm.handleBlur}
                    />
                    {frm.errors.name?<span className='text-danger text-uppercase'>{frm.errors.name}</span>:""}
                  </div>
                  <div className="form-group form-items">
                    <p>Password</p>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="form-control"
                      onChange={frm.handleChange} onBlur={frm.handleBlur}
                    />
                    {frm.errors.password?<span className='text-danger text-uppercase'>{frm.errors.password}</span>:""}
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-items d-flex justify-content-between align-items-center me-5 mb-3 mt-4">
                        <div className="gender-choice-title">
                          <p>Gender</p>
                        </div>
                        <div className="form-check d-flex flex-column align-items-center">
                          <input
                            className="form-check-input mt-3"
                            id="male"
                            type="radio"
                            name="gender"
                            defaultValue="true"
                            defaultChecked
                          />
                          <p className='form-check-label'>
                            Male
                          </p>
                        </div>
                        <div className="form-check d-flex flex-column align-items-center">
                          <input
                            className="form-check-input mt-3"
                            id="female"
                            type="radio"
                            name="gender"
                            defaultValue="false"
                          />
                          <p className='form-check-label'>
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

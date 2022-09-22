import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { registerApi } from '../../redux/reducers/userReducer'
export default function Register() {
  const dispatch = useDispatch()

  const frm = useFormik({
    initialValues:{
      email: "",
      password: "",
      name: "",
      gender: true,
      phone: ""
    },
    validationSchema: Yup.object().shape({
      email:Yup.string().required('Email không được để trống').email('email không đúng định dạng'),
      password:Yup.string().required('Password không được để trống').min(6,'Password có độ dài từ 6 đến 32 ký tự').max(32,'Password có độ dài từ 6 đến 32 ký tự'),
      name:Yup.string().required('Tên không được bỏ trống').matches(/^[AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+ [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+(?: [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]*)*/,'Tên không đúng định dạng'),
      phone:Yup.string().required('Số điện thoại được để trống').matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,'Số điện thoại không đúng định dạng(09...)').max(10,'Số điện thoại tối đa 10 số'),
      passwordConfirm:Yup.string().required('Password không được để trống').min(6,'Password có độ dài từ 6 đến 32 ký tự').max(32,'Password có độ dài từ 6 đến 32 ký tự'),
    }),
    onSubmit : (values) =>{
      dispatch(registerApi(values))
    }
  })
  return (
    <div>
      <div className="register">
        <div className="container">
          <h3 className="text-center">Register</h3>
          <form className="mt-4" id="registerFrm" onSubmit={frm.handleSubmit}>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="form-items me-5 mb-3 mt-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name='email'
                    placeholder="email"
                    onChange={frm.handleChange} onBlur={frm.handleBlur}
                  />
                  {frm.errors.email?<span className='text-danger text-uppercase'>{frm.errors.email}</span>:""}
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-items me-5 mb-3 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name='name'
                    placeholder="name"
                    onChange={frm.handleChange} onBlur={frm.handleBlur}
                  />
                  {frm.errors.name?<span className='text-danger text-uppercase'>{frm.errors.name}</span>:""}
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-items me-5 mb-3 mt-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name='password'
                    placeholder="password"
                    onChange={frm.handleChange} onBlur={frm.handleBlur}
                  />
                  {frm.errors.password?<span className='text-danger text-uppercase'>{frm.errors.password}</span>:""}
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-items me-5 mb-3 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name='phone'
                    placeholder="phone"
                    onChange={frm.handleChange} onBlur={frm.handleBlur}
                  />
                  {frm.errors.phone?<span className='text-danger text-uppercase'>{frm.errors.phone}</span>:""}
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-items me-5 mb-3 mt-3">
                  <input
                    type="password"
                    className="form-control"
                    id="passwordConfirm"
                    name='passwordConfirm'
                    placeholder="password confirm"
                    onChange={frm.handleChange} onBlur={frm.handleBlur}
                  />
                  {frm.errors.passwordConfirm?<span className='text-danger text-uppercase'>{frm.errors.passwordConfirm}</span>:""}
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
                      Male
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
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <button
                className="btnSubmit col-md-12 col-lg-3 rounded-pill"
                id="btnSubmit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

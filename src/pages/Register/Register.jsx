import React, { useState } from 'react'
import {Link} from "react-router-dom"
const Register = () => {
  const [formData, setFormData] = useState({name:'', photoUrl:'', email:'', password:'', confirmPassword:''})

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const handleRegister = (e)=>{
    e.preventDefault();
    console.log(formData)
  }
  
  return (
  <div className="hero bg-[#f5941d27] py-3 mb-20">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <img className='w-full' src="https://i.ibb.co/gSpQNq2/singup-illustration.png" alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body border-[1px] border-solid border-[#f5941d8e] rounded-lg">
      <h3 className='text-3xl font-bold text-center'>Register</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input onChange={handleChange} type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input onChange={handleChange} type="text" name="photoUrl" placeholder="Photo Url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onChange={handleChange} type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input onChange={handleChange} type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input onChange={handleChange} type="password" name="confirmPassword" placeholder="confirm password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button onClick={handleRegister} className="hover:bg-[#F5921D] px-5 py-2 rounded-lg font-bold hover:text-white border-[1px] border-solid border-[#F5921D] text-[#F5921D] text-[20px]">Register</button>
        </div>
        <p>Already have an account? <Link className='hover:underline text-[#F5921D] font-bold' to="/login">Login</Link> </p>
      </form>
    </div>
  </div>
</div>
  )
}

export default Register
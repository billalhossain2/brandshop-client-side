import { useState } from "react"
import {Link} from "react-router-dom"
const Login = () => {
  const [formData, setFormData] = useState({email:'', password:''})

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const handleLogin = (e)=>{
    e.preventDefault()
    console.log(formData)
  }
  const handleLoginWithGoogle = (e)=>{
    e.preventDefault()
    alert('Login with google')
  }
  return (
    <div className="hero min-h-screen bg-[#f5941d27]">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <img className='w-full' src="https://i.ibb.co/PcQJfK1/login-illustration.png" alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body border-[1px] border-solid border-[#f5941d8e] rounded-lg">
      <h3 className='text-3xl font-bold text-center'>Login</h3>
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
        <div className="flex md:flex-row flex-col justify-between items-center my-3">
        <button onClick={handleLogin} className="hover:bg-[#F5921D] px-5 py-2 rounded-lg font-bold hover:text-white border-[1px] border-solid border-[#F5921D] text-[#F5921D]">Login</button>
        <p className="font-bold text-center">Or</p>
          <button onClick={handleLoginWithGoogle} className="hover:bg-[#F5921D] px-5 py-2 rounded-lg font-bold hover:text-white border-[1px] border-solid border-[#F5921D] text-[#F5921D]">Login with Google</button>
        </div>
        <p>Don't  have an account? <Link className='hover:underline text-[#F5921D] font-bold' to="/register">Register</Link> </p>
      </form>
    </div>
  </div>
</div>
  )
}

export default Login
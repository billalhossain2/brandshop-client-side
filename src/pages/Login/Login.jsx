import { useContext, useState } from "react"
import {Link, useLocation, useNavigate} from "react-router-dom"
import useTitle from "../../hooks/useTitle"
import { UserContext } from "../../contexts/AuthContext"
import { toast } from "react-toastify"
import Swal from "sweetalert2"
const Login = () => {
  useTitle("Login - Tech Store")
  const navigate = useNavigate();
  const from = useLocation()?.state?.from || "/";

  const {user, loginWithGoogle, signInWithEmailPassword} = useContext(UserContext);

  const [formData, setFormData] = useState({email:'', password:''})
  const [success, setSuccess] = useState();
  const [error, setError] = useState("")

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const handleLogin = (e)=>{
    e.preventDefault()
    const {email, password} = formData;

    //Validate empty field
    if(!email || !password){
      return Swal.fire('Both email and password are mandatory!')
    }

    signInWithEmailPassword(email, password)
    .then(result => {
      toast("Login was successful", {autoClose:1000})
      navigate(from)
    })
    .catch(error => setError(error.message))
  }

  const handleLoginWithGoogle = (e)=>{
    e.preventDefault()
    loginWithGoogle()
    .then(result => {
      toast("Login was successful!", {autoClose:1000, position:'top-left'})
      navigate(from)
    })
    .catch(error => console.log(error))
  }
  return (
    <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <img className='w-full' src="https://i.ibb.co/PcQJfK1/login-illustration.png" alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
      <form className="card-body border-[1px] border-solid border-[#f5941d8e] rounded-lg">
      <h3 className='text-3xl font-bold text-center'>Login</h3>
        <div className="form-control">
          <label className="label">
            <span>Email</span>
          </label>
          <input onChange={handleChange} type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span>Password</span>
          </label>
          <input onChange={handleChange} type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center my-3">
        <button onClick={handleLogin} className="hover:bg-[#F5921D] px-5 py-2 rounded-lg font-bold hover:text-white border-[1px] border-solid border-[#F5921D] text-[#F5921D]">Login</button>
        <p className="font-bold text-center">Or</p>
          <button onClick={handleLoginWithGoogle} className="hover:bg-[#F5921D] px-5 py-2 rounded-lg font-bold hover:text-white border-[1px] border-solid border-[#F5921D] text-[#F5921D]">Login with Google</button>
        </div>
        <p>Don't  have an account? <Link className='hover:underline text-[#F5921D] font-bold' to="/register">Register</Link> </p>
        <p className="text-red-500 font-bold text-center">{error}</p>
      </form>
    </div>
  </div>
  <p className="py-5">{success}</p>
</div>
  )
}

export default Login
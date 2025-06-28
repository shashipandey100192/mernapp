import axios from 'axios';
import React ,{useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

function Userloginpage() {
  const navigat = useNavigate()

const [login,setlogin]=useState({
  email:"",
  pass:"",
});


const updatefield = (e)=>{
        const {name,value} = e.target;
        setlogin((preval)=>{
          return{
            ...preval,
            [name]:value
          }
        })
      }

const myloginapi = async()=>{
    if(login.email==="" || login.pass==="")
    {
      toast.warn("username and password is mishmach",{autoClose:1000});
    }
    else
    {
       
        await axios.post("http://localhost:8700/userlogin",login).then((d)=>{
          console.log(d);
          const resdata = d.data.status;
          if(resdata===240)
          {
            //  alert("welcome");
              toast.success("Welcome to dashboard",{autoClose:2000});
              setTimeout(()=>{
                navigat("/dashboard");
              },2000)
          }
        })

    }
}



  return (
    <div className='abc'>
      <div className="login-container">
        <h2 className="text-center mb-4">User Login</h2>
        <form>
          <div className="mb-3">
            <ToastContainer/>
            <label className="form-label" >Email address</label>
            <input type="email" className="form-control" placeholder="Enter your email" name='email' value={login.email} onInput={updatefield}/>
          </div>
          <div className="mb-3">
            <label  className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter your password" name='pass' value={login.pass} onInput={updatefield}/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
          </div>
          <div className="d-grid mb-3">
            <button type="button" className="btn btn-primary" onClick={myloginapi}>Login</button>
          </div>
          <div className="text-center mt-3">
            <Link href="#">Forgot password?</Link>
          </div>
          <div className="text-center mt-2">
            <span>Don't have an account? <Link to="/userregistor">Register here</Link></span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Userloginpage
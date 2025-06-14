import React from 'react'
import { Link } from 'react-router-dom'

function Userloginpage() {
  return (
    <div className='abc'>
      <div class="login-container">
        <h2 class="text-center mb-4">User Login</h2>
        <form>
          <div class="mb-3">
            <label for="loginEmail" class="form-label" >Email address</label>
            <input type="email" class="form-control" id="loginEmail" placeholder="Enter your email" />
          </div>
          <div class="mb-3">
            <label for="loginPassword" class="form-label">Password</label>
            <input type="password" class="form-control" id="loginPassword" placeholder="Enter your password" />
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" />
            <label class="form-check-label" for="rememberMe">Remember me</label>
          </div>
          <div class="d-grid mb-3">
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
          <div class="text-center mt-3">
            <Link href="#">Forgot password?</Link>
          </div>
          <div class="text-center mt-2">
            <span>Don't have an account? <Link to="/userregistor">Register here</Link></span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Userloginpage
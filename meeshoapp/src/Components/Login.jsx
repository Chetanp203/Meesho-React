import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div id="body1">
         <div id="login">
            <img src="https://images.meesho.com/images/marketing/1661417516766.webp"/>
            <p>Sign Up To view your profile</p>
            <form id="logindetails">
                <label>Email:</label>
                <br />
                <input type="text" placeholder="Email"/>
                <br />
                <label>Password:</label>
                <br />
                <input type="password" placeholder="Password"/>
                <br />
                <span>Dont have an account?<span><b>Register here!!</b></span></span>
                <button className='login'>Continue</button>
            </form>
            
            <div id="end">
                <p>By continuing, you agree to Meesho`s</p>
                <p>Terms & Conditions and Privacy Policy</p>
            </div>
        </div>
    </div>
  )
}

export default Login
import React from 'react'
import "./Register.css"

const Register = () => {
    return (
        <div id="body1">
            <div id="login">
                <img src="https://images.meesho.com/images/marketing/1661417516766.webp" />
                <p>Sign Up To view your profile</p>
                <form id="logindetails">
                    <label>Name:</label>
                    <br />
                    <input type="text" placeholder="Name" />
                    <br />
                    <label>Email:</label>
                    <br />
                    <input type="text" placeholder="Email" />
                    <br />
                    <label>Select Role:</label>
                    <br />
                    <select style={{ width: '64%', height: '30px', border: '1px solid grey', marginTop: '5px', borderRadius: '2px' }}>
                        <option value="Buyer">Buyer</option>
                        <option value="Seller">Seller</option>
                    </select>
                    <br />
                    <label>Password:</label>
                    <br />
                    <input type="password" placeholder="Password" />
                    <br />
                    <span>Already have an account?<span><b>Login here!!</b></span></span>
                    <button className='register'>Continue</button>
                </form>
                
                <div id="end">
                    <p>By continuing, you agree to Meesho`s</p>
                    <p>Terms & Conditions and Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Register
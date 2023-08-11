import React, { useContext, useEffect, useState } from 'react'
import "./Register.css"
import { AuthContext } from '../MyContext/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    // const { state, login ,logout} = useContext(AuthContext);
    const [userData, setUserData] = useState({name:"", email:"",number:"",password:"", role:"Buyer",cart:[]});
    const router = useNavigate();  
    // const [user, setUser] = useState();
  
    // useEffect(()=> {
    //    if(state?.user){
    //     setUser(state?.user)
    //    }else{
    //     setUser({});
    //    }
    // },[state])
  
    const handleChange= (event) => {
       setUserData({...userData, [event.target.name] : event.target.value})
    }
    const handleSelectChange= (event) => {
      const value = event.target.value
      setUserData({...userData,["role"]:value})
   }
  
  //  role: event.target.value
  
    const handleSubmit = (event) => {
        event.preventDefault();
        if(userData.name && userData.email && userData.password && userData.number && userData.role && userData.cart){
            const array = JSON.parse(localStorage.getItem("Users")) || [];
  
            const userDataObj = {
                name: userData.name,
                email: userData.email,
                number: userData.number,
                password: userData.password,
                cart:[],
                role: userData.role,
            };
            array.push(userDataObj);
            localStorage.setItem("Users", JSON.stringify(array));
            alert("Registration Successfull!!!")
            setUserData({name:"", email:"",password:"",number:"",role:"",cart:""})
            // router('/login')
        } else {
            alert("All fields mandatory")
        }
    }

    return (
        <div id="body1">
            <div id="login">
                <img src="https://images.meesho.com/images/marketing/1661417516766.webp" />
                <p>Sign Up To view your profile</p>
                <form id="logindetails" onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <br />
                    <input type="text" placeholder="Name" onChange={handleChange} name='name'/>
                    <br />
                    <label>Email:</label>
                    <br />
                    <input type="text" placeholder="Email" onChange={handleChange} name='email'/>
                    <br />
                    <label>Phone Number:</label>
                    <br />
                    <input type="number" placeholder="Phone-number" onChange={handleChange} name='number'/>
                    <br />
                    <label>Select Role:</label>
                    <br />
                    <select onChange={handleSelectChange} style={{ width: '64%', height: '30px', border: '1px solid grey', marginTop: '5px', borderRadius: '2px' }}>
                        <option value="Buyer">Buyer</option>
                        <option value="Seller">Seller</option>
                    </select>
                    <br />
                    <label>Password:</label>
                    <br />
                    <input type="password" placeholder="Password" onChange={handleChange} name='password'/>
                    <br />
                    <span>Already have an account?<span onClick={()=> router("/login")}><b>Login here!!</b></span></span>
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
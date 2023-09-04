import React, {  useContext, useEffect, useState } from 'react'
import "./Register.css"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../MyContext/AuthContext';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import api from './ApiConfig'

const Register = () => {
//     const [userData, setUserData] = useState({name:"", email:"",number:"",password:"", role:"Buyer",cart:[]});
//     const router = useNavigate();  
    
  
//     const handleChange= (event) => {
//        setUserData({...userData, [event.target.name] : event.target.value})
//     }
//     const handleSelectChange= (event) => {
//       const value = event.target.value
//       setUserData({...userData,["role"]:value})
//    }
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if(userData.name && userData.email && userData.password && userData.number && userData.role && userData.cart){
//             const array = JSON.parse(localStorage.getItem("Users")) || [];
  
//             const userDataObj = {
//                 name: userData.name,
//                 email: userData.email,
//                 number: userData.number,
//                 password: userData.password,
//                 cart:[],
//                 role: userData.role,
//             };
//             array.push(userDataObj);
//             localStorage.setItem("Users", JSON.stringify(array));
//             alert("Registration Successfull!!!")
//             setUserData({name:"", email:"",password:"",number:"",role:"",cart:""})
            
//         } else {
//             alert("All fields mandatory")
//         }
//     }

const [userData,setUserData]= useState({name:"", email:"", password:"",confirmPassword:"",role:"Buyer",number:""})
    const {state,dispatch} = useContext(AuthContext);
    const router = useNavigate();

    const handleChange = (event)=>{
        setUserData({...userData,[event.target.name]:event.target.value})
    }

    const handleSelectChange =(event)=>{
        setUserData({...userData,"role": event.target.value})
    }

    // console.log(userData,"-userdata")

    const handleSubmit =async (event)=>{
        event.preventDefault();
        if(userData.name && userData.email && userData.password && userData.confirmPassword && userData.role && userData.number){
           if (userData.password === userData.confirmPassword){
              const response = await api.post("/all/register",{userData});
              if(response.data.success){
                setUserData({name:"", email:"", password:"",confirmPassword:"",role:"Buyer",number:""})
                router("/login")
                toast.success(response.data.message)
              }else{
                toast.error(response.data.message)
              }
           }else{
            toast.error("Passwords didn't match..")
           }
        }else{
            toast.error("All fields are mandatory")
        }
    }

    useEffect(()=>{
      if(state?.user?.name){
        router("/")
      }
      },[state])


    return (
        <div id="body1">
            <div id="login">
                <img src="https://images.meesho.com/images/marketing/1661417516766.webp" />
                <p>Sign Up To view your profile</p>
                <form id="logindetails" onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <br />
                    <input type="text" placeholder="Name" onChange={handleChange} name='name' value={userData.name}/>
                    <br />
                    <label>Email:</label>
                    <br />
                    <input type="text" placeholder="Email" onChange={handleChange} name='email' value={userData.email}/>
                    <br />
                    <label>Contact Number:</label><br />
            <input type="number" placeholder='Contact Number' name='number' onChange={handleChange} value={userData.number} /><br />
                    <label>Select Role:</label>
                    <br />
                    <select onChange={handleSelectChange} style={{ width: '64%', height: '30px', border: '1px solid grey', marginTop: '5px', borderRadius: '2px' }}>
                        <option value="Buyer">Buyer</option>
                        <option value="Seller">Seller</option>
                    </select>
                    <br />
                    <label>Password:</label>
                    <br />
                    <input type="password" placeholder="Password" onChange={handleChange} name='password' value={userData.password}/>
                    <br />
                    <label>Confirm Password:</label>
                    <br />
                    <input type="password" placeholder='ConfirmPassword' name='confirmPassword' onChange={handleChange} value={userData.confirmPassword}/>
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
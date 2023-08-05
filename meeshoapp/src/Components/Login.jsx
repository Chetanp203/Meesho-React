import React, { useContext, useEffect, useState } from 'react'
import "./Login.css"
import { AuthContext } from '../MyContext/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const { state, login ,logout} = useContext(AuthContext);
  console.log(state,"-state")
  const [userData, setUserData] = useState({name:"", email:"",password:"", role:"Buyer",cart:[]});
  const router = useNavigate();
  console.log(userData,"-userdata");
  const [user, setUser] = useState();

  useEffect(()=> {
     if(state?.user){
      setUser(state?.user)
     }else{
      setUser({});
     }
  },[state])

  const handleChange= (event) => {
     setUserData({...userData, [event.target.name] : event.target.value})
  }

  const handleloginSubmit = (event) => {
    event.preventDefault();
    if (userData.email && userData.password) {
        const users = JSON.parse(localStorage.getItem("Users")); // accessed localstorage
        console.log(users,"-users")
        var flag = false;
        for (var i = 0; i < users.length; i++) {
            if (users[i].email == userData.email && users[i].password == userData.password) {
                flag = true; // re-assign
                login(users[i]);

                alert("Login successfull.");
                setUserData({ email: "", password: "" })
                router('/');
                break;
            }
        }

        if (flag == false) {
            return alert("Please check credentails.")
        }

    } else {
        alert("All fields are mandatory")
    }
}

  return (
    <div id="body1">
         <div id="login">
            <img src="https://images.meesho.com/images/marketing/1661417516766.webp"/>
            <p>Sign Up To view your profile</p>
            <form id="logindetails" onSubmit={handleloginSubmit}>
                <label>Email:</label>
                <br />
                <input type="text" placeholder="Email"onChange={handleChange} name='email'/>
                <br />
                <label>Password:</label>
                <br />
                <input type="password" placeholder="Password" onChange={handleChange} name='password'/>
                <br />
                <span>Dont have an account?<span onClick={()=> router("/register")}><b>Register here!!</b></span></span>
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
import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { AuthContext } from "../MyContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

const Login = () => {
  //   const { state, login ,logout} = useContext(AuthContext);
  //   console.log(state,"-state")
  //   const [userData, setUserData] = useState({name:"", email:"",password:"", role:"Buyer",cart:[]});
  //   const router = useNavigate();
  //   console.log(userData,"-userdata");
  //   const [user, setUser] = useState();

  //   useEffect(()=> {
  //      if(state?.user){
  //       setUser(state?.user)
  //      }else{
  //       setUser({});
  //      }
  //   },[state])

  //   const handleChange= (event) => {
  //      setUserData({...userData, [event.target.name] : event.target.value})
  //   }

  //   const handleloginSubmit = (event) => {
  //     event.preventDefault();
  //     if (userData.email && userData.password) {
  //         const users = JSON.parse(localStorage.getItem("Users")); // accessed localstorage
  //         console.log(users,"-users")
  //         var flag = false;
  //         for (var i = 0; i < users.length; i++) {
  //             if (users[i].email == userData.email && users[i].password == userData.password) {
  //                 flag = true; // re-assign
  //                 login(users[i]);

  //                 alert("Login successfull.");
  //                 setUserData({ email: "", password: "" })
  //                 router('/');
  //                 break;
  //             }
  //         }

  //         if (flag == false) {
  //             return alert("Please check credentails.")
  //         }

  //     } else {
  //         alert("All fields are mandatory")
  //     }
  // }

  const [userData, setUserData] = useState({ email: "", password: "" });
  const { state, dispatch } = useContext(AuthContext);
  const router = useNavigate();

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userData.email && userData.password) {
      const response = await axios.post("/all/login", {
        userData,
      });
      if (response.data.success) {
        dispatch({
          type: "login",
          payload: response.data.user,
        });
        localStorage.setItem("token", JSON.stringify(response.data.token));
        setUserData({ email: "", password: "" });
        router("/");
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } else {
      toast.error("All fields are mandatory");
    }
  };

  useEffect(() => {
    if (state?.user?.name) {
      router("/");
    }
  }, [state]);
  return (
    <div id="body1">
      <div id="login">
        <img src="https://images.meesho.com/images/marketing/1661417516766.webp" />
        <p>Sign Up To view your profile</p>
        <form id="logindetails" onSubmit={handleSubmit}>
          <label>Email:</label>
          <br />
          <input
            type="text"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={userData.email}
          />
          <br />
          <label>Password:</label>
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={userData.password}
          />
          <br />
          <span>
            Dont have an account?
            <span onClick={() => router("/register")}>
              <b>Register here!!</b>
            </span>
          </span>
          {/* <button className='login'>Login</button> */}
          <input className="login" type="submit" value="Login" />
        </form>

        <div id="end">
          <p>By continuing, you agree to Meesho`s</p>
          <p>Terms & Conditions and Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Login;

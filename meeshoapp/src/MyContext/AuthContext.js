import { createContext ,useReducer} from "react";
import { useEffect } from "react";
import api from "../Components/ApiConfig";

export const AuthContext = createContext();

const initialState = {user: null};

function reducer(state, action){
    switch(action.type){
        case "login":
            return{...state,user: action.payload}
            case"logout":
            return{...state,user: null}
            default:
                return state;
    }
}

const AuthenticationProvider = ({children}) => {
    const [state,dispatch]=useReducer(reducer,initialState)

    // useEffect(()=>{
    //   async  function getCurrentUserData(){
    //       let token = JSON.parse(localStorage.getItem("token"));
    //       const response = await api.post("/all/get-current-user",{token});
    //       if(response.data.success){
    //         dispatch({
    //             type: "login",
    //             payload: response.data.user
    //         })
    //       }else{
    //         dispatch({
    //             type:"logout",
    //         });
    //       }
    //     }
    //     getCurrentUserData();
    // },[])


    useEffect(()=>{
        async  function getCurrentUserData(){
            let token = JSON.parse(localStorage.getItem("token"));
            if(token){
              try{
                const response = await api.post("/all/get-current-user",{token});
              if(response.data.success){
                dispatch({
                    type: "Login",
                    payload: response.data.user
                })
              }
              }catch(error){
                console.log(error);
              }
            }
            
          }
          getCurrentUserData();
      },[])


   return (
    <AuthContext.Provider value={{state,dispatch}}>
        {children}

    </AuthContext.Provider>
   )
}
export default AuthenticationProvider;
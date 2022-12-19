

import {createContext,useState} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
export const AuthContext=createContext();

const AuthContextProvider=({children})=>{
const[username,setUserName]=useState("");
const[isAuth,setIsAuth]=useState(false);
const navigate=useNavigate();
// let obj;


const SignUpData=(form)=>{
    axios.post('https://zany-cyan-angelfish-tutu.cyclic.app/users', {
        ...form
       })
       .then(function (response) {
         console.log(response);
         setIsAuth(true);
         
       })
       .catch(function (error) {
         console.log(error);
       });
   
}

const loginUser=async (Data)=>{

  try {
    const response = await axios.get('https://zany-cyan-angelfish-tutu.cyclic.app/users');
    let data = response.data;

    for(let i=0;i<data.length;i++)
    {
      if(data[i].email==Data.email && data[i].password==Data.password){
        setUserName(data[i].firstname);
        console.log("from here",data[i].firstname)

         setIsAuth(true);
         navigate("/");
         return true;
      }
      else if(i===data.length-1 && data[i].email!==Data.email && data[i].password!==Data.password){
        
        return false;
        
      }
    }
    

  } catch (error) {
    console.error(error);
  }


}


const logoutUser=()=>{
    setIsAuth(false);
}

return(
<AuthContext.Provider value={{isAuth,loginUser,logoutUser,SignUpData,username}}>

{children}


</AuthContext.Provider>

)


}

export default AuthContextProvider;
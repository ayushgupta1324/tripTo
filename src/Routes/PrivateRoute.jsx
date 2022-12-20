import React from "react"
import { AuthContext } from "../Context/AuthContext"
import { useContext } from "react"
import { Navigate } from "react-router"
 

function PrivateRoute({children }) {
 
  // const navigate = useNavigate();
  const {isAuth} = useContext(AuthContext)
  
  if(isAuth==false)
  {
    // navigate("/Login",{replace:true})
    return <Navigate to="/Login" replace={true}/>
  }
  else
  {
    return children

  }


}

export default PrivateRoute;
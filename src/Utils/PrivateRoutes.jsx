import { useState,createContext, useContext } from "react";
const AuthContext=createContext(null);
 const PrivateRoutes = ({children}) => {
  const [user,setUser]=useState(null);
  const loggedIn=(user)=>{
    setUser(user);
  }

  return(
    <AuthContext.Provider value={{user,loggedIn}}>
        {children}
    </AuthContext.Provider>
  )
};
export const useAuth=()=>{
    return useContext(AuthContext);
}

export default PrivateRoutes;

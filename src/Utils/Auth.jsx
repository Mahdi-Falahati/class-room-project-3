import { useState,createContext, useContext } from "react";
const AuthContext=createContext(null);
 export const Auth = ({children}) => {
  const [user,setUser]=useState(null);
  const loggedIn=(user)=>{
    setUser(user);
  }
  // console.log(children);

  return(
    <AuthContext.Provider value={{user,loggedIn}}>
        {children}
    </AuthContext.Provider>
  )
};
export const useAuth=()=>{
    return useContext(AuthContext);
}
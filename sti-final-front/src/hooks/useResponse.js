import { useContext } from "react";
import { UserResponse } from "../context/UserResponse";

export function useResponse () {
    const {userData, setUserData} = useContext(UserResponse)
  
    return {
       userData,
       setUserData
    }
}
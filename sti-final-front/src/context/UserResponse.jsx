import { createContext, useState } from "react";

export const UserResponse = createContext()

export function UserResponseProvider ({children}) {
    const [userData, setUserData] = useState(
        {data: [1,1,1,1]}
    )

    return (
        <UserResponse.Provider value={
            {userData, setUserData}
        }>
            {children}
        </UserResponse.Provider>
    )
}
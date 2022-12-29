import { useState, createContext, useContext } from 'react';
const AuthContext = createContext(null)
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // const [admin, setAdmin] = useState(null)
    const Login = (user) => {
        setUser(user)
    }
    const logout = () => {
        setUser(null)
    }
    // const LoginAdmin = (admin) => {
    //     setAdmin(admin)
    // }
    // const logoutAdmin = () => {
    //     setAdmin(null)
    // }
    // ,logoutAdmin,LoginAdmin, admin
    return (
        <AuthContext.Provider value={{ user, Login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    return useContext(AuthContext)
}

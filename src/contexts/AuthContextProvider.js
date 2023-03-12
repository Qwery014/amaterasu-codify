import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)
const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const API = "http://34.89.179.75/"

    const register = async (formData) => {
        try {
            const res = await axios.post(`${API}accounts/register/`,formData)
            console.log(res)
        } catch (error) {
            console.log(Object.values(error.response.data).flat(2)[0]);
            console.log(error)
            setError(Object.values(error.response.data).flat(2)[0])
        }
    }

    const login = async (formData, email) => {
        try {
            const res = await axios.post(`http://34.89.179.75/accounts/login/`, formData)
            localStorage.setItem('token', JSON.stringify(res.data))
            localStorage.setItem("email", email)
            setEmail(email)
            navigate('/')
            console.log(res.data)
        }
        catch (error) {
            console.log(error.response.data.detail)
            setError([error.response.data.detail])
        }
    }

    function logout(navigate) {
        localStorage.removeItem('token');
        localStorage.removeItem('email')
        setEmail(false);
        navigate('/')
    }

    return (

        <AuthContext.Provider
            value={{
                email,
                setEmail,
                error,
                setError,
                register,
                login,
                logout

            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
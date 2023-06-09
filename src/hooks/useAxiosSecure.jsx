import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const axiosSecure = axios.create('http://localhost:3000')
const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('access-token')
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            }
        )
        axiosSecure.interceptors.response.use(
            async (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logOut();
                    console.log('user logged out')
                    navigate('/login')
                }
                return Promise.reject(error);
            }
        )
    }, [logOut, navigate]);
    return [axiosSecure]
};

export default useAxiosSecure;
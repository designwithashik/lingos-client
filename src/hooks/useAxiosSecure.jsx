import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosSecure = axios.create({ baseURL: 'http://localhost:3000' })

const useAxiosSecure = () => {
    const { logOut } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
      console.log('paise')
   
    // Add an interceptor to check for 401 errors
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
      async(response) => response,
      async(error) => {
          if (error.response && (error.response.status === 401 || error.response && error.response.status === 403)) {
            
          // Perform logout or any other necessary actions
              await logOut();
            console.log('User logged out');
              navigate('/login')
        }
        return Promise.reject(error);
      }
    );

   
    }, [logOut, navigate]);
    return [axiosSecure]
};

export default useAxiosSecure;

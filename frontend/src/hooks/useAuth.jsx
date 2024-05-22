import { useEffect, useState } from "react"
import axios from 'axios';

export const useAuth = () => {
    const [loggedIn , setLoggedIn] = useState(false);
    const [loading , setLoading] = useState(true);
    
    const getUser = async  () => {
        const token = sessionStorage.getItem('token');
        try{
            const result = await axios.get("http://localhost:3000/api/v1/user/auth" , {
                headers : {
                    Authorization : token,
                },
            });
            setLoading(true);
        } catch (error) {
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    getUser();

    return {loggedIn , setLoggedIn , loading}
};

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const successNotify = () =>  toast.success("Logout!", {
    style: {
      background: "#000000",
      color: '#fff'
    }
  });

function Appbar() {

    const LogoutHandler = () => {
       try {
           setLoading(true);
           successNotify();
           sessionStorage.removeItem('token');
           setTimeout(() => {
               navigate('/signin');
           }, 2000)
       } catch(error) {
        setLoading(false);
        console.error("Logout error:", error);
       }
    } 

    const [firstName , setFirstName] = useState('');
    const [loading , setLoading] = useState(false);

    const token = sessionStorage.getItem('token');
    const navigate = useNavigate();

    
    useEffect( () => {
        const name = async() => {
         try {
             const response = await axios.get("http://localhost:3000/api/v1/user/info" , {
                 headers : {
                     Authorization : `Bearer ${token}`,
                 }
             });
             setFirstName(response.data.firstName);
         } catch (error) {
             console.log("Error while fetching name:", error);
         }
        };
        if(token) {
         name();
        } 
     } ,[token])
 
  return (
    <div className="shadow h-14 flex justify-between bg-black">
    <div className="flex flex-col justify-center h-full ml-4 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-700 to-blue-900">
       Wepay
    </div>
    <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
            <button 
            onClick={() => navigate("/profile")}
            className="flex flex-col justify-center h-full text-xl">
                {firstName.slice(0,1)}
            </button>
        </div>
        <div className="flex flex-col justify-center h-full mx-8">
        <button
         onClick={LogoutHandler} 
         label = {loading ? "Logging Out..." : "Logout"}
         disabled = {loading}
        className="hover:bg-gradient-to-r from-purple-700 to-blue-900 hover:text-white hover:transition-delay hover:duration-200  bg-white text-purple-700 text-sm font-bold py-2 px-4 rounded shadow">
                    Logout
        </button>
        </div>
    </div>
    <Toaster />
</div>
  )
}

export default Appbar
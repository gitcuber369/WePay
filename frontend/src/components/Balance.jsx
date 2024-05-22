import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Balance() {
    const [balance , setBalance] = useState(0);
    const [firstName , setFirstName] = useState('');
    const token = sessionStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/account/balance" , {
                    headers : {
                        Authorization : `Bearer ${token}`,
                    },
                });
                setBalance(response.data.balance);
            } catch (error) {
                console.error("Error while fetching balance:", error);
            }
        };
        if(token) {
            fetchData();
        }
    }, [token])

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


    <div className="p-5">
        <div className="font-bold text-white text-lg">
           Hi! {firstName} Your balance :
        </div>
        <div className=" font-semibold mt-5 text-white  text-4xl">
           $ {Math.round(balance)}
        </div>
    </div>
  )
}

export default Balance
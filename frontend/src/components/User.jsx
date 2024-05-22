import React, { useEffect, useState } from 'react'
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Users({}) { 
    const [filter , setFilter] = useState("");
    const [users , setUsers] = useState([]);
    const token = sessionStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('http://localhost:3000/api/v1/user/bulk?filter=' + filter , {
                    headers : {
                        Authorization : `Bearer ${token}`,
                    }
                });
                setUsers(response.data.user);
            } catch (error) {  
                console.log("Error while fetching users" , error)
            }
        };
        if(token) {
            fetchData();
        }

    }, [token , filter])


    return <>
    <div className="font-bold mt-6 text-2xl mx-5 text-white">
        Users
    </div>
    <div className="mx-5 my-5">
        <input onChange={(e) => {
            setTimeout(() => {
                setFilter(e.target.value)
            } , 1000)
        }} type="text" placeholder="Search users..." className="w-full px-2 py-1 bg-[#26262A] border rounded text-white border-[#26262A]"></input>
    </div>
    <div>
        {users.map(user => <User user={user} />)}
    </div>
</>
}

function User({user}) {
const navigate = useNavigate();

return <div className="flex justify-between mx-8 my-4">
    <div className="flex">
        <div className="rounded-full my-2 h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center h-full text-xl">
                {user.firstName[0]}
            </div>
        </div>
        <div className="flex flex-col justify-center text-white h-ful">
            <div>
                {user.firstName} {user.lastName}
            </div>
        </div>
    </div>

    <div className="flex flex-col justify-center h-ful">
        <Button onClick={(e) => {
            navigate("/send?id=" + user._id + "&name=" + user.firstName);
        }} label={"Send Money"} />
    </div>
</div>
}

export default Users;
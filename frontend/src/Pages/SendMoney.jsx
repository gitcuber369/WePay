import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import toast, {Toaster} from 'react-hot-toast';
import axios from 'axios';


const errorNotify = () => {
    toast.error("Error while Transfer!", {
        style: {
            background: "#000000",
            color: '#fff'
        }
    })
}
const successNotify = () => {
    toast.success("Transfer Successful!", {
        style: {
            background: "#000000",
            color: '#fff'
        }
    })
}




function SendMoney() {
  const [amount , setAmount] = useState(0);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const token = sessionStorage.getItem('token');
    const [isLoading , setIsLoading] = useState(false);
{/* Navigate to reach dashboard after the money transfer */}
  const navigate = useNavigate();
    const handleTransder = async () => {
        try {
            setIsLoading(true);
            const response = await axios.post('http://localhost:3000/api/v1/account/transfer' , {
                to : id, 
                amount
            }, {
                headers : {
                    Authorization : `Bearer ${token}`,
                }
            });
            setIsLoading(false);
            successNotify();
            setTimeout(() => {
                navigate("/dashboard");
            }, 2000);
        } catch (error) {
            setIsLoading(false);
            errorNotify();
            console.error("Transfer error:", error);
        }
    }




  return (
    <div className='flex justify-center bg-slate-900 w-screen h-screen'>
        <div className='h-full flex flex-col justify-center'>
          <div className='border border-black h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-black shadow-lg rounded-lg'>
                  <div className='flex flex-col space-y-1.5 p-6'>
                      <h2 className='text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-purple-700 to-blue-900'>
                          Send Money
                      </h2>
                      </div>
                <div class="">
                <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <span class="text-2xl text-transparent font-bold bg-clip-text bg-gradient-to-b from-purple-700 to-blue-900">{name[0].toUpperCase()}</span>
                    </div>
                    <h3 class="text-2xl font-semibold text-white"> {name} </h3>
                </div>
                <div class="space-y-4">
                    <div class="space-y-2">
                    <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="amount"
                    >
                        Amount (in Rs)
                    </label>
                    <input
                        type = "number"
                        class="flex h-10 w-full rounded-md border border-none text-white bg-[#26262A] px-3 py-2 text-sm"
                        id="amount"
                        onChange={
                            (e) => {setAmount(e.target.value)

                            }
                        }
                        placeholder="Enter amount"
                    />
                    </div>
                    <button onClick={handleTransder} class="w-full text-purple-700 text-sm font-bold bg-white hover:bg-gradient-to-r from-purple-700 to-blue-900 hover:text-white hover:transition-delay hover:duration-200 rounded-lg px-5 py-2.5 me-2 mb-2">
                        Initiate Transfer
                    </button>
                </div>
                </div>
        </div>
      </div>
      <Toaster />
    </div>
  )}

export default SendMoney
import React from 'react'
import Appbar from '../components/Appbar'
import Heading from '../components/Heading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
const token = sessionStorage.getItem('token');





function Profile() {
  return (
    <div className='bg-slate-900 w-screen h-screen overflow-hidden'>
        <Appbar />
        <div className='m-5'>
        <Heading 
          label={"Update Profile"}
        />
        <div className='my-5 overflow-x-auto '>
            <InputBox label={"Fist Name"} placeholder={"Arpit"}/> 
            <InputBox label={"Last Name"} placeholder={"Chaudhary"}/>
            <InputBox label={"Password"} placeholder={"Password"}/>
            <div className='flex justify-center item-center my-5'>
            <Button label={"Update"} className = "flex justify-center text-center w-[50%]" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Profile
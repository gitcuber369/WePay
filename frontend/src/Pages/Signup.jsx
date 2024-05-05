import React, { useState } from 'react'
import { Vortex } from '../components/ui/Vortex'
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import BottomWarning from '../components/BottomWarning';
import axios from 'axios';

function Signup() {

  const [firstName , setfristName] = useState("")
  const [lastName , setlastName] = useState("")
  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")

 
  return (
    <div>
      <div className='h-screen w-screen'>
      <Vortex
        backgroundColor="Black"
        rangeY={800}
        particleCount={500} 
        className="flex items-center justify-center px-2 md:px-10  py-4 w-full h-full">
        <div className='flex flex-col justify-center'>
          <div className='rounded-lg bg-transparent backdrop-blur-lg w-80 text-center p-2 h-max px-4 '>
            <Heading label={"Sign Up"} />
            <SubHeading label={"Sign up to get started"}/>
            <InputBox Onchange= {
              (e) => {
              setfristName(e.target.value)
            }} placeholder={"Arpit"} label={"First Name"} />
            <InputBox Onchange = {
              (e) => {
                setlastName(e.target.value)
              }
            } placeholder={"Chaudhary"} label={"Last Name"} />

            <InputBox  Onchange = {
              (e) => {
                setUsername(e.target.value)
              }
            } placeholder={"Email"} label={"Email"} />
            <InputBox Onchange = {
              (e) => {
              setPassword(e.target.value)
              }
            } placeholder="123456" label={"Password"} />
            <div className='pt-4'>
              <Button onClick ={() => {
                axios.post('http://localhost:3000/api/v1/user/signup', {
                  username, 
                  password, 
                  firstName, 
                  lastName
                })
              }} label={"Sign Up"}/>
            </div>
            <BottomWarning label={"Already have an account"} buttonText={"Login"} to={"/signin"} /> 
          </div>
        </div>
        </Vortex>
    </div>
    </div>
  );
}

export default Signup
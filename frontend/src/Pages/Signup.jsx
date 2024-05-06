import React, { useState } from 'react';
import { Vortex } from '../components/ui/Vortex';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import BottomWarning from '../components/BottomWarning';
import axios from 'axios';


function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='h-screen w-screen'>
      <Vortex
        backgroundColor="Black"
        rangeY={800}
        particleCount={500}
        className="flex items-center justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className='grid grid-cols-1 md:grid-cols-2 w-full ml-[100px] justify-center'>
          <div className='hidden sm:block md:text-3xl bg-transparent backdrop-blur-lg border-none rounded-lg'>
            <div className='md:text-6xl flex text-center w-full items-center justify-center h-full'>
              <p className='text-2xl sm:text-2xl px-10 font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8'>
                Empower your payments with
                <p className='animate-bounce text-6xl sm:text-8xl font-bold flex justify-center pt-8 bg-clip-text text-transparent bg-gradient-to-b from-purple-700 to-blue-900'>
                  WePaY
                </p>
              </p>
            </div>
          </div>
          <div className='rounded-lg border-gray-500 bg-black w-full md:w-80 text-center p-2 h-max px-4'>
            <Heading label={"Sign up"} />
            <SubHeading label={"Sign up to get started"} />
            <InputBox
              Onchange={(e) => { setFirstName(e.target.value); }}
              placeholder={"Arpit"}
              label={"First Name"}
            />
            <InputBox
              Onchange={(e) => { setLastName(e.target.value); }}
              placeholder={"Chaudhary"}
              label={"Last Name"}
            />
            <InputBox
              Onchange={(e) => { setUsername(e.target.value); }}
              placeholder={"Email"}
              label={"Email"}
            />
            <InputBox
              Onchange={(e) => { setPassword(e.target.value); }}
              placeholder="123456"
              label={"Password"}
            />
            <div className='pt-4'>
              <Button
                onClick={ async () => {
                 const response =  await axios.post('http://localhost:3000/api/v1/user/signup', {
                    username,
                    password,
                    firstName,
                    lastName,
                  });
                 localStorage.setItem("token", response.data.token);
                }}
                label={"Sign Up"}
              />
            </div>
            <BottomWarning
              label={"Already have an account"}
              buttonText={"Login"}
              to={"/signin"}
            />
          </div>
        </div>
      </Vortex>
    </div>
  );
}

export default Signup;

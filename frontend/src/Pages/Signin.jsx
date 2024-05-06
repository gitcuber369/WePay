import React, { useState } from 'react';
import { Vortex } from '../components/ui/Vortex';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import BottomWarning from '../components/BottomWarning';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
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
            <Heading label={"Login"} />
            <SubHeading label={"Welcome Back!"} />
            
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
                onClick={() => {
                  axios.post('http://localhost:3000/api/v1/user/signin', {
                    username,
                    password,
                  });
                navigate('/dashboard')
                }}
                label={"Login"}
              />
            </div>
            <BottomWarning
              label={"Don't have an account?"}
              buttonText={"Sign up"}
              to={"/signup"}
            />
          </div>
        </div>
      </Vortex>
    </div>
  );
}

export default Signin;

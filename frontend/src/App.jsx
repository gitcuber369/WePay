import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import SendMoney from './Pages/SendMoney';
import Dashboard from './Pages/Dashboard';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import HeroPage from './Pages/HeroPage';
import Profile from './Pages/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
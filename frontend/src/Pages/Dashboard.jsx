import React, { useEffect, useState } from 'react'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'
import User from '../components/User'

function Dashboard() {



  return (
    <div className='bg-slate-900 w-screen h-screen overflow-y-scroll no-scrollbar'>
        <div className='bg-slate-900'>
          <Appbar />
          <Balance />
          <User />
        </div>
    </div>
  )
}

export default Dashboard
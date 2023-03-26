import React from 'react'
import logo from '../assets/logo.svg'
function Pagecover() {
  return (
    <div>
        <div className='h-16 w-screen flex flex-row'>
            <div className='w-[50%] pl-4 flex items-center'>
                <img className='w-24' src={logo} alt='Logo'></img>
            </div>
        </div>
    </div>
  )
}

export default Pagecover
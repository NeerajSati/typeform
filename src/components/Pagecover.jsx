import React from 'react'
import logo from '../assets/logo.svg'
import Renderpage from './Renderpage'
function Pagecover() {
  return (
    <div>
        <div className='h-16 w-screen flex flex-row'>
            <div className='w-[50%] pl-4 flex items-center'>
                <img className='w-24' src={logo} alt='Logo'></img>
            </div>
        </div>
        <div className='w-full flex items-center justify-center' style={{minHeight: 'calc(100vh - 4.5rem)'}}>
            <div className='text-white w-[80vw] min-h-[20rem] translate-y-[-2rem] sm:w-[75vw] lg:w-[800px] flex flex-col justify-center items-start font-[Gilroy400] text-[25px] font-s'>
                <Renderpage idx={0}/>
            </div>
        </div>
    </div>
  )
}

export default Pagecover
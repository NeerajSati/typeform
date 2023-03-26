import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { BiCheck } from 'react-icons/bi';
import { AiOutlineEnter } from 'react-icons/ai';

function Renderpage({idx}){
    switch(idx){
        case 0: return(<>
            <div className='flex'><span className='text-[1rem] flex pt-[0.4rem]'>1 <BsArrowRight className='ml-1 mr-4 mt-[0.2rem]'/></span> What's your first name? *</div>
            <div className='w-full pl-10 mt-5'>
                <input className='bg-black w-full pb-2 text-[30px] shadow-[0_1px_0px_0px_rgba(255,255,255,0.3)] focus:outline-none focus:shadow-[0_2px_0px_0px_rgba(255,255,255,1)]' style={{transition:'background-color 1e+08s ease 0s, box-shadow 0.1s ease-out 0s'}}></input>
                <div className='flex items-center'>
                    <button className='bg-[#0077ff] p-4 pt-2 pb-2 flex text-[20px] font-[Gilroy700] rounded-md mt-4'>OK<BiCheck className='text-[1.8rem]'/></button>
                    <span className='text-[13px] ml-3 mt-3'>press </span>
                    <span className='text-[13px] font-[Gilroy700] pl-1 flex mt-3'>Enter <AiOutlineEnter className='mt-1 ml-1'/></span>
                </div>
            </div>
            </>);
        default: return(
            <div>Temp</div>
            );
    }
}

export default Renderpage
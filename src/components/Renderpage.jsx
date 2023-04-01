import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { BiCheck } from 'react-icons/bi';
import { AiOutlineEnter } from 'react-icons/ai';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function Renderpage({idx, setFormIndex, values}){
    switch(idx){
        case 0: return(<>
            <div className='flex pl-10 '>Up-skilling requires time commitment</div>
            <div className='flex pl-10 pt-2 text-[20px] text-[#ffffffb3]'>The GrowthX experience is designed by keeping in mind the working hours founders & full time operators typically work in.</div>
            <div className='flex pl-10 pt-10 text-[20px] text-[#ffffffb3]'>You will spend</div>
            <div className='flex pl-10 text-[20px] text-[#ffffffb3]'>- 6 hours/week for the first 5 weeks</div>
            <div className='flex pl-10 text-[20px] text-[#ffffffb3]'>- 15 hours/week for the last 3 weeks</div>
            <div className='w-full pl-10 mt-5'>
                <div className='flex items-center'>
                    <button className='bg-[#0077ff] p-4 pt-2 pb-2 flex text-[20px] font-[Gilroy700] rounded-md mt-4' onClick={()=>{setFormIndex(i => i+1)}}>OK<BiCheck className='text-[1.8rem]'/></button>
                    <span className='text-[13px] ml-3 mt-3'>press </span>
                    <span className='text-[13px] font-[Gilroy700] pl-1 flex mt-3'>Enter <AiOutlineEnter className='mt-1 ml-1'/></span>
                </div>
            </div>
            </>);
        case 1: return(<>
            <div className='flex'><span className='text-[1rem] flex pt-[0.4rem]'>1 <BsArrowRight className='ml-1 mr-4 mt-[0.2rem]'/></span> What's your first name? *</div>
            <div className='w-full pl-10 mt-5'>
                <Field type="firstName" name="firstName" className='bg-black w-full pb-2 text-[30px] shadow-[0_1px_0px_0px_rgba(255,255,255,0.3)] focus:outline-none focus:shadow-[0_2px_0px_0px_rgba(255,255,255,1)]' style={{transition:'background-color 1e+08s ease 0s, box-shadow 0.1s ease-out 0s'}}></Field>
                <div className='flex items-center'>
                    <button className='bg-[#0077ff] p-4 pt-2 pb-2 flex text-[20px] font-[Gilroy700] rounded-md mt-4' onClick={()=>{setFormIndex(i => i+1)}}>OK<BiCheck className='text-[1.8rem]'/></button>
                    <span className='text-[13px] ml-3 mt-3'>press </span>
                    <span className='text-[13px] font-[Gilroy700] pl-1 flex mt-3'>Enter <AiOutlineEnter className='mt-1 ml-1'/></span>
                </div>
            </div>
            </>);
        case 2: return(<>
            <div className='flex'><span className='text-[1rem] flex pt-[0.4rem]'>2 <BsArrowRight className='ml-1 mr-4 mt-[0.2rem]'/></span> and your last name, {values.firstName}? *</div>
            <div className='w-full pl-10 mt-5'>
                <Field type="lastName" name="lastName" className='bg-black w-full pb-2 text-[30px] shadow-[0_1px_0px_0px_rgba(255,255,255,0.3)] focus:outline-none focus:shadow-[0_2px_0px_0px_rgba(255,255,255,1)]' style={{transition:'background-color 1e+08s ease 0s, box-shadow 0.1s ease-out 0s'}}></Field>
                <div className='flex items-center'>
                    <button className='bg-[#0077ff] p-4 pt-2 pb-2 flex text-[20px] font-[Gilroy700] rounded-md mt-4' onClick={()=>{setFormIndex(i => i+1)}}>OK<BiCheck className='text-[1.8rem]'/></button>
                    <span className='text-[13px] ml-3 mt-3'>press </span>
                    <span className='text-[13px] font-[Gilroy700] pl-1 flex mt-3'>Enter <AiOutlineEnter className='mt-1 ml-1'/></span>
                </div>
            </div>
            </>);
        default: return(
            <div>
                Form ended.
            </div>
            );
    }
}

export default Renderpage
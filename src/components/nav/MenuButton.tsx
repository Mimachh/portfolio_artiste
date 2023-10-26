import { NavContext, NavContextProps } from '@/context/NavContext';
import React, { useContext } from 'react'

export default function MenuButton() {
    const {isOpen, setIsOpen} = useContext(NavContext) as NavContextProps;
  return (
    <div 
    onClick={() => setIsOpen(true)}
    className='group flex flex-col gap-y-2 cursor-pointer xl:hidden group
    items-end 
    '>
        <div className='w-7 h-[2px] bg-white transition-all'></div>
        <div className='w-5 h-[2px] bg-white group-hover:w-7 transition-all'></div>
        <div className='w-7 h-[2px] bg-white transition-all'></div>
    </div>
  )
}

import { NavContext, NavContextProps } from '@/context/NavContext';
import { cn } from '@/lib/utils';
import React, { useContext } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import NavDesktop from './NavDesktop';

export default function NavMobile() {

    const {isOpen, setIsOpen} = useContext(NavContext) as NavContextProps;

  return (
    <nav className={cn('xl:hidden fixed bg-secondary w-full top-0 z-50 bottom-0 transition-all duration-500', isOpen ? 'right-0' : '-right-full')}>
        <div 
        onClick={() => setIsOpen(false)}
        className='absolute right-4 top-5 cursor-pointer'>
            <RiCloseLine className='text-5xl'/>
        </div>
        <NavDesktop 
        containerStyles='flex flex-col text-[30px] uppercase font-bold h-full items-center justify-center gap-y-8'
        />
    </nav>
  )
}

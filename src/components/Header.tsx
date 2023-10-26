import { useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/variants'
import { cn } from '@/lib/utils'
import NavMobile from './nav/NavMobile'
import NavDesktop from './nav/NavDesktop'
import MenuButton from './nav/MenuButton'
import Socials from './nav/Socials'



export default function Header() {
    const [active, setActive] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setActive(window.scrollY > 100);
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

  return (
    <header className={cn("fixed w-full z-50 transition-all", active ? 'bg-background py-6' : 'bg-transparent py-8')}>
        <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between">
            {/* LOGO */}
            <Link href={'#'} className='w-[226px] h-[37.64px] relative flex
            transition-all mb-4 xl:mb-0
            '>
                <Image 
                src={'/assets/header/logo.svg'}
                fill
                className='object-contain'
                priority
                alt=''
                />
            </Link>

            <NavDesktop 
            containerStyles='hidden xl:flex items-center gap-x-8'
            linkStyles=''
            />


                <NavMobile />


            <div className='absolute right-7 top-9 z-10 xl:hidden'>
                <MenuButton />
            </div>

            <Socials 
            containerStyles='flex text-[24px] gap-x-4'
            iconStyles='hover:text-primary/80 transition-all'
            />
        </div>
    </header>
  )
}

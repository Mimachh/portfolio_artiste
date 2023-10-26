import { Link } from 'react-scroll'
import React, { useContext } from 'react'
import { cn } from '@/lib/utils'
import  { useMediaQuery } from "react-responsive"
import { NavContext, NavContextProps } from '@/context/NavContext'

interface NavDesktopProps {
    containerStyles?: string,
    linkStyles?: string
}

const links = [
    {
        path: 'home',
        name: 'Home'
    },
    {
        path: 'tours',
        name: 'Tours'
    },
    {
        path: 'discography',
        name: 'Discography'
    },
    {
        path: 'blog',
        name: 'Blog'
    },
    {
        path: 'contact',
        name: 'Contact'
    }
]

export default function NavDesktop({ containerStyles, linkStyles }: NavDesktopProps) {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1310px)'
    })

    const {setIsOpen} = useContext(NavContext) as NavContextProps;

  return (
    <nav className={cn('', containerStyles)}>
        {links.map((link, index) => {
            return <Link 
            key={index} 
            to={link.path}
            className={cn('cursor-pointer border-b-2 border-transparent', linkStyles)}
            smooth={!isDesktop ? false : true}
            spy
            offset={-50}
            activeClass='active'
            onClick={() => {
                if(!isDesktop) {
                    setIsOpen(false)
                }
            }}
            >
                {link.name}
            </Link>
        })}
    </nav>
  )
}

import { cn } from "@/lib/utils"
import Link from "next/link"
import {
    RiYoutubeFill,
    RiInstagramFill,
    RiSpotifyFill,
    RiSoundcloudFill
} from 'react-icons/ri'


const socials = [
    {
        path: "#",
        icon: <RiYoutubeFill />
    },
    {
        path: "#",
        icon: <RiInstagramFill />
    },
    {
        path: "#",
        icon: <RiSpotifyFill />
    },
    {
        path: "#",
        icon: <RiSoundcloudFill />
    },
]

interface SocialsProps {
    containerStyles?: string,
    iconStyles?: string
}

export default function Socials({containerStyles, iconStyles}: SocialsProps) {
  return (
    <div className={cn('', containerStyles)}>
        {socials.map((item, index) => {
            return <Link 
            href={item.path} 
            key={index}
            >
                <div className={cn('', iconStyles)}>{item.icon}</div>
            </Link>
        })}
    </div>
  )
}

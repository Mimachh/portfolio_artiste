"use client"
import Image from 'next/image';

import { motion } from "framer-motion"
import { fadeIn } from '@/utils/variants';
import { useContext, useEffect } from 'react';
import { PlayerContext, PlayerContextProps } from '@/context/PlayerContext';
import { AudioPlayer } from './PlayerCustom';

export default function PlayerGlobal() {
    const {isPlayerOpen, setIsPlayerOpen, trackToPlay} = useContext(PlayerContext) as PlayerContextProps;

    // useEffect(() => {
    //     const PlayButton = document.getElementById("buttonToClick");
    //     if (trackToPlay) {
    //         playIt(PlayButton);
    //     }
    // },[])
 
    //     const  playIt = (PlayButton: any) => {
    //         if(PlayButton) {
    //             PlayButton.click();
    //         }
    //     } 

  return (
    <>
    {isPlayerOpen && (
        <motion.div
        variants={fadeIn('up', 0.1)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.1}}
        className='fixed bottom-0 inset-x-0 z-40'
        >
        <div 

        className='bg-gradient-to-l from-secondary to-primary/2
        backdrop-blur-[15px] h-[112px] flex items-center relative
        '>
            <div className="container mx-auto flex flex-col justify-between items-center xl:flex-row">
                {/* Text et avatar */}
                <div className='hidden w-[300px] xl:flex items-center gap-x-4'>
                    <div className='relative h-16 w-16'>
                    <Image 
                    src={'/assets/hero/hero-singer.jpg'}
                    fill
                    priority
                    alt=''
                    className='object-cover rounded-full'
                    />
                    </div>
                    {/* Text */}
                    <div className='leading-none text-white'>
                        <div className='text-lg font-medium'>Mia Reynolds</div>
                        <div className='text-sm font-light'>{trackToPlay.name}</div>
                    </div>
                </div>
                
                {/* Player */}
                <div className='w-full max-w-4xl' id='toPlay'>
                    {/* <AudioPlayer 
                    loop 
                    preload='none' 
                    color='#fff' 
                    volume={40}
                    volumePlacement='top'
                    src={trackToPlay.src}
                    style={{
                        background: 'transparent',
                        boxShadow: "none",
                        width: '100%',
                        minWidth: '100%'
                    }}
                    /> */}
                </div>

                <AudioPlayer 
                                    loop 
                                    preload='auto' 
                                    color='#fff' 
                                    volume={40}
                                    volumePlacement='top'
                                    src={trackToPlay.src}
                                    style={{
                                        background: 'transparent',
                                        boxShadow: "none",
                                        width: '100%',
                                        minWidth: '100%'
                                    }}
                                    doIPlay={(trackToPlay && trackToPlay.src) ? true : false}
                />
            </div> 
        </div>
        </motion.div>
        )}
    </>
  )
}

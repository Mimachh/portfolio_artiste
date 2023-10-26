import Image from 'next/image';
import { AudioPlayer } from "react-audio-play"
import { motion } from "framer-motion"
import { fadeIn } from '@/utils/variants';

export default function Player() {
    
  return (
    <>
        <motion.div 
        variants={fadeIn('up', 0.1)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.1}}
        className='bg-gradient-to-l from-secondary to-primary/2
        backdrop-blur-[15px] h-[112px] flex items-center relative z-40
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
                        <div className='text-sm font-light'>Freedom</div>
                    </div>
                </div>
                
                {/* Player */}
                <div className='w-full max-w-4xl'>
                    <AudioPlayer 
                    loop 
                    preload='none' 
                    color='#fff' 
                    volume={40}
                    volumePlacement='top'
                    src='/assets/freedom.mp3'
                    style={{
                        background: 'transparent',
                        boxShadow: "none",
                        width: '100%',
                        minWidth: '100%'
                    }}
                    />
                </div>
            </div> 
        </motion.div>
    </>
  )
}

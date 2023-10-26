import {motion} from 'framer-motion'


import SectionHeader from "./SectionHeader"
import { fadeIn } from '@/utils/variants'

export default function Newsletter() {

  return (
    <section className='bg-singerOverlay bg-fixed bg-no-repeat bg-cover bg-center h-[480px] w-full' id='contact'>
        <div className='bg-secondary/70 w-full h-full section'>
            <div className="container mx-auto h-full">
                <div className='flex flex-col h-full items-center justify-center'>
                    <SectionHeader 
                    pretitle='Get in touch'
                    title='Sign up to our newsletter'
                    />
                    <motion.div 
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.4}}  
                    className='relative flex items-center w-full max-w-xl'>
                        <input type="text" placeholder='Email address'  className='w-full h-[64px] outline-none rounded-full bg-secondary/70
                        backdrop-blur-[15px] px-8
                        '/>
                        <button type='button' className='bg-primary/80 absolute right-2 h-[46px] rounded-full text-[15px]
                        hover:bg-primary/60 transition-all duration-150 px-6
                        '>Subscribe</button>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

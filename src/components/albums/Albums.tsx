import {motion} from 'framer-motion'

import AlbumSlider from '@/components/albums/AlbumSlider'
import { fadeIn } from '@/utils/variants'
import SectionHeader from '../SectionHeader'

export default function Albums() {
  return (
    <section id='discography'>
        <div className="container mx-auto">
            <SectionHeader 
            pretitle='Discography'
            title='Popular Albums'
            />
            <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            >
              {/* Album slider */}
              <AlbumSlider />
            </motion.div>

        </div>
    </section>
  )
}

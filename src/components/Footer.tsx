import Link from "next/link"
import Image from "next/image"
import {motion} from "framer-motion"

import Socials from "./nav/Socials"
import NavDesktop from "./nav/NavDesktop"
import { fadeIn } from "@/utils/variants"


export default function Footer() {

  return (
    <footer className="bg-gradient-to-r from-secondary/10 to-secondary section h-[500px] xl:h-auto">
      <div className="container mx-auto h-full flex flex-col items-center gap-y-8">
        <motion.div
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}  
        >
          <NavDesktop 
          containerStyles="flex flex-col xl:flex-row justify-center items-center gap-y-4 xl:gap-x-8 text-sm uppercase font-semibold"
          linkStyles="hover:text-primary/80 transition-all"
          />
        </motion.div>
        {/* Socials */}
        <motion.div
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}  
        >
          <Socials 
          containerStyles="flex text-[24px] gap-x-8"
          iconStyles="hover:text-primary/80 transition-all justify-center"
          />
        </motion.div>
        {/* logo */}
        <motion.div
        variants={fadeIn('up', 0.6)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.1}}  
        >
          <Link href={"#"} className="relative w-[250px] h-[50px] flex transition-all">
            <Image 
            src={'/assets/header/logo.svg'}
            fill 
            className="object-contain"
            alt="Logo"
            />
          </Link>
        </motion.div>
        <motion.div
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}  
        >
          <p>Si ce template vous plait contactez moi par mail :</p>
          <Link href={"#"}>
            <h2 className="font-semibold leading-tight">mimach.dev@gmail.com</h2>
          </Link>
          <p>Ou réservez un <Link className="underline text-blue-600" href={"https://reservation.mimach.cloud/"}>créneau.</Link> </p>
        </motion.div>
      </div>
    </footer>
  )
}

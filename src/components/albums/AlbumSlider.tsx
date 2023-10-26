import { useContext, useState } from 'react'
import useSWR from 'swr'
import Image from 'next/image'

import { AudioPlayer } from 'react-audio-play'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination'
import { albums } from '@/utils/constants'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface TracksProps {
  name: string,
  src: string
}

interface AlbumProps {
  id: number,
  img: string,
  name: string,
  tracks: TracksProps[]
}

export default function AlbumSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
    
    // const  {data, error} = useSWR('http://localhost:4000/albums', fetcher);
    // if(error) return 'Failed to fetch albums';
    // if(!data) return 'Loading...';

 const data = albums;

  return (
    <>
      {/* Top slider */}
      <Swiper 
      effect={'coverflow'}
      speed={1000}
      spaceBetween={80}
      allowTouchMove={false}
      thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
      modules={[FreeMode, Navigation, Thumbs, EffectCoverflow]}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true 
      }}
      className='album-slider'>
        {data.map((album: AlbumProps) => {
          return <SwiperSlide key={album.id} className='mb-12'>
            <div className='w-full bg-secondary/80 rounded-[10px] flex flex-col xl:flex-row items-center p-6 xl:p-12 gap-x-12'>
              {/* Img */}
              <div className='hidden xl:flex w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] relative cursor-pointer rounded-[10px] overflow-hidden'>
                <Image 
                // src={album.img}
                src={"/assets/hero/hero-singer.jpg"}
                fill priority
                alt=''
                className='object-contain' 
                />
              </div>
              {/* track container */}
              <div className='flex flex-1 w-full h-[500px]'>
                {/* Tracks */}
                <div className='flex-1 flex flex-col xl:px-12'>
                  {album.tracks?.map((track, index) => {
                    return <div key={index}
                    className='flex flex-1 w-full h-[500px] items-center'
                    >
                      <div className='flex flex-1 items-center gap-x-2 capitalize font-semibold xl:font-extrabold'>
                        <div className='text-primary/80 text-sm xl:text-lg'>0{index + 1}.</div>
                        <div className='text-sm xl:text-base'>{track.name}</div>
                      </div>
                      {/* Track player */}
                      <div>
                        <AudioPlayer 
                        style={{background: 'transparent', boxShadow: 'none'}}
                        loop 
                        preload='none' 
                        color='#fff' 
                        volume={40}
                        volumePlacement='bottom'
                        src={track.src}
                        className='album-player'
                        />
                      </div>
                    </div>
                  })}
                </div>
              </div>
            </div>
          </SwiperSlide>;
        })}
      </Swiper>
      {/* Thumb slider */}
      <Swiper 
      onSwiper={setThumbsSwiper}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        425: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        1310: {
          slidesPerView: 5,
          spaceBetween: 30
        },
      }}
      modules={[FreeMode, Navigation, Thumbs]}
      spaceBetween={20}
      slidesPerView={5}
      freeMode={true}
      watchSlidesProgress={true}
      className='thumb-slider'
      >
        {data?.map((thumb: any, index: number) => {
          return <SwiperSlide key={index} className='relative group overflow-hidden border-2 border-transparent w-[254px] rounded-[10px]'>
            <div className='relative w-[195px] h-[195px] sm:w-[360px] sm:h-[360px] md:w-[240px] md:max-h-[240px]
            cursor-pointer
            '>
              <Image fill priority alt=''
              // src={thumb.img}
              src={"/assets/hero/hero-singer.jpg"}
              className='object-contain group-hover:scale-105 transition-all duration-300'
              />
            </div>
          </SwiperSlide>
        })}
      </Swiper>
    </>
  )
}

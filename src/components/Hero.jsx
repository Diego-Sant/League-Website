import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { useEffect, useState } from 'react';

import { heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
  
  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', {
      opacity: 1,
      delay: 2
    })

    gsap.to('#cta', {
      opacity: 1,
      y: -50,
      delay: 2
    })
  }, [])

  return (
    <section className="w-full nav-height bg-[#1f1f1f] relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">LEAGUE OF LEGENDS</p>
        <div className='md:w-10/12 w-9/12'>
          <video autoPlay muted playsInline={true} loop key={videoSrc} className='pointer-events-none rounded-md border border-gray-200/60 shadow-lg shadow-gray-950/60'>
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
      </div>

      <div id="cta" className='flex flex-col items-center opacity-0 translate-y-20'>
        <a href='https://signup.leagueoflegends.com/pt-br/signup/redownload' target='_blank' className='btn font-semibold'>JOGUE DE GRAÇA</a>
        <a href="#highlights" className='font-normal text-xl hover:underline hover:decoration-[#29d5d8]'>Conheça os campeões!</a>
      </div>
    </section>
  )
}

export default Hero

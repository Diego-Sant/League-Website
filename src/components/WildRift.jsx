import React, { useRef } from 'react'
import { frameImg, frameVideo, logoImg } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { animateWithGsap } from '../utils/animations'

const WildRift = () => {
    const videoRef = useRef();

    useGSAP(() => {
        animateWithGsap('#wildrift_title', {
            y: 0,
            opacity: 1
        }),
        gsap.from('#logo', {
            scrollTrigger: {
                trigger: '#logo',
                start: '20% bottom'
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut'
        })
    }, [])

  return (
    <section className='common-padding'>
      <div className='screen-max-width'>
        <div id='logo' className='flex-center w-full my-20'>
            <img src={logoImg} alt='Logo League of Legends' width={480} height={480} />
        </div>

        <div className='flex flex-col items-center'>
            <h2 id='wildrift_title' className='section-heading'>JOGUE DO SEU CELULAR</h2>
        </div>

        <div className='md:mt-8 mb-24'>
            <div className='relative h-full flex-center'>
                <div className='overflow-hidden'>
                    <img src={frameImg} alt="Celular" className='bg-transparent relative z-10' />
                </div>
                <div className='hiw-video'>
                    <video className='pointer-event-none' playsInline loop preload='none' muted autoPlay ref={videoRef} src={frameVideo} type="video/mp4"></video>
                </div>
            </div>
        </div>

      </div>
    </section>
  )
}

export default WildRift

import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react'
import { animateWithGsap } from '../utils/animations'
import { horizontal, vertical1, vertical2 } from '../utils'

const Features = () => {
    const videoRef = useRef();
    const videoRef2 = useRef();
    const videoRef3 = useRef();
    const [isHoveredHorizontal, setIsHoveredHorizontal] = useState(false);
    const [isHoveredVertical1, setIsHoveredVertical1] = useState(false);
    const [isHoveredVertical2, setIsHoveredVertical2] = useState(false);

    useGSAP(() => {
        animateWithGsap('#features_title', {
            y: 0,
            opacity: 1
        }),
        animateWithGsap('#text-description', {
            x: -32,
            opacity: 1
        })
    }, [])

  return (
    <section className='h-full common-padding bg-zinc relative overflow-hidden'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full'>
            <h1 id='features_title' className='section-heading'>VÁRIAS MANEIRAS DE JOGAR</h1>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center overflow-hidden'>
        <div className='mt-24 mb-8 pl-32'>
            <h2 id='text-description' className='text-xl lg:text-3xl opacity-0'>ARAM, Arena, TeamFight Tactics e mais!</h2>
        </div>

        <div className='flex-center flex-col sm:px-10 gap-y-4'>
            <div className='relative h-[50vh] w-full flex items-center' 
                onMouseEnter={() => setIsHoveredHorizontal(true)}
                onMouseLeave={() => setIsHoveredHorizontal(false)}
            >
                <video playsInline loop 
                    id='exploreVideo' 
                    className='w-full h-full object-cover object-center ' 
                    preload='none' muted autoPlay ref={videoRef}
                >
                    <source src={horizontal} type='video/mp4'/>
                </video>
                {isHoveredHorizontal && (
                    <>
                        <div className='absolute inset-0 bg-black opacity-40'></div>
                        <div className="absolute inset-0 flex justify-center items-center video-title">ARAM(Howling Abyss)</div>
                    </>
                )}
            </div>

            <div className='flex flex-col md:flex-row md:gap-x-4 mr-4 sm:mr-0'>

                <div className='relative h-[65vh] w-full flex' 
                    onMouseEnter={() => setIsHoveredVertical1(true)}
                    onMouseLeave={() => setIsHoveredVertical1(false)}
                >
                    <video playsInline loop
                        className='w-full h-full object-cover object-center' 
                        preload='none' muted autoPlay ref={videoRef}
                    >
                        <source src={vertical1} type='video/mp4'/>
                    </video>
                    {isHoveredVertical1 && (
                        <>
                            <div className='absolute inset-0 bg-black opacity-40'></div>
                            <div className="absolute inset-0 flex justify-center items-center video-title">Arena</div>
                        </>
                    )}
                </div>

                <div className='relative h-[65vh] w-full flex' 
                    onMouseEnter={() => setIsHoveredVertical2(true)}
                    onMouseLeave={() => setIsHoveredVertical2(false)}
                >
                    <video playsInline loop
                        className='w-full h-full object-cover object-center' 
                        preload='none' muted autoPlay ref={videoRef}
                    >
                        <source src={vertical2} type='video/mp4'/>
                    </video>
                    {isHoveredVertical2 && (
                        <>
                            <div className='absolute inset-0 bg-black opacity-40'></div>
                            <div className="absolute inset-0 flex justify-center items-center video-title">TeamFight Tactics(TFT)</div>
                        </>
                    )}
                </div>
                            
            </div>
        </div>
      </div>
    </section>
  )
}

export default Features

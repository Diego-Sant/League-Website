import React from 'react'
import { footerLinks, footerLinks2 } from '../constants'
import { pg12Rating, riotLogo } from '../utils'

const Footer = () => {
  return (
    <>
        <footer className='py-8 sm:px-10 px-5 bg-[#1f1f1f]'>
            <div className='screen-max-width flex-col'>
                <div className="flex flex-1 justify-center flex-wrap gap-y-2 2xl:gap-y-0">
                    {footerLinks.map((nav) => (
                        <div key={nav} className="flex px-5 text-sm cursor-pointer font-semibold hover:text-white/80">
                        {nav}
                        </div>
                    ))}
                </div>
            </div>
        </footer>
        <footer className='bg-[#111111] py-5 sm:px-10 px-5'>
            <div className='screen-max-width flex-col'>
                <div className='flex flex-1 justify-center mb-6 mt-4'>
                    <img src={riotLogo} width={100} height={100} alt="Riot Logo"/>
                </div>
                <div className="flex flex-1 justify-center flex-wrap">
                    <span className='text-gray-200 text-xs'>™ & © 2024 Riot Games, Inc. Todos os direitos reservados. Riot Games, League of Legends e PvP.net são marcas registradas e marcas de serviço da Riot Games, Inc.</span>
                </div>
                <div className="flex flex-1 justify-center flex-wrap mt-10 gap-y-2 sm:gap-y-0">
                    {footerLinks2.map((nav) => (
                        <div key={nav} className="flex px-5 text-sm cursor-pointer font-semibold hover:text-white/80">
                        {nav}
                        </div>
                    ))}
                </div>
                <div className='flex flex-1 justify-center mt-10'>
                    <img src={pg12Rating} width={80} height={80} alt="Não recomendado para menores de 12 anos"/>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer

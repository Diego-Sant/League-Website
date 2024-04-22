import { useGSAP } from "@gsap/react"
import gsap from "gsap"

import { FaRegPlayCircle } from "react-icons/fa"
import { MdArrowOutward } from "react-icons/md"

import VideoCarousel from "./VideoCarousel"
import { animateWithGsap } from "../utils/animations"

const Highlights = () => {
  useGSAP(() => {
    animateWithGsap('#title', {
      opacity: 1,
      y: 0
    })

    gsap.to('.link', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25
    })
  }, [])

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">ESCOLHA SEU CAMPEÃO</h1>

          <div className="flex flex-wrap items-end gap-5">
            <a href="https://www.leagueoflegends.com/pt-br/champions/" target="_blank" className="link">Descubra mais Campeões
              <MdArrowOutward color="#ccc"/>
            </a>
            <a href="https://signup.leagueoflegends.com/pt-br/signup/redownload" target="_blank" className="link">Jogar agora
              <FaRegPlayCircle color="#ccc" className="w-4 ml-1 mt-1"/>
            </a>
          </div>
        </div>

        <VideoCarousel />

      </div>
    </section>
  )
}

export default Highlights

import { useGSAP } from "@gsap/react"
import gsap from "gsap"

import { useState } from "react"

import { characters, models } from "../constants";

const Model = () => {
    const [selectedCharacter, setSelectedCharacter] = useState('irelia');
    const [selectedModel, setSelectedModel] = useState(models.find((model) => model.character === "irelia"));

    useGSAP(() => {
        gsap.to('#heading', {
            y: 0,
            opacity: 1
        })

        gsap.to('.textList-title', {
            opacity: 1,
            y: -20,
            duration: 1
        })
    }, [])

    const handleCharacterClick = (value) => {
        setSelectedCharacter(value);
        const selectedModel = models.find((model) => model.character === value);
        setSelectedModel(selectedModel);
    };

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">JOGUE COM SEU ESTILO</h1>

        <div className="flex flex-col items-center mt-5">
            <div className="w-full h-[45vh] md:h-[60vh] lg:h-[70vh] xl:h-[90vh] overflow-hidden relative">
                {selectedModel && selectedModel.type === "image" && (
                    <img 
                        src={selectedModel.img} 
                        alt={selectedModel.title} 
                        className="absolute inset-0 object-cover"
                    />
                )}

                {selectedModel && selectedModel.type === 'video' && (
                    <video autoPlay controls className="absolute inset-0 object-cover" key={selectedModel.id}>
                        <source src={selectedModel.video} type="video/mp4" />
                    </video>
                )}
            </div>
            <div className="mx-auto w-full">
                <p className="textList-title text-2xl text-center mb-5">{selectedModel.title}</p>

                <div className="flex-center flex-wrap gap-y-4 sm:gap-y-0 sm:flex">
                    <ul className="color-container">
                        {models.filter((model) => model.character === selectedCharacter).map((item, i) => (
                            <li
                                key={i}
                                className="w-6 h-6 rounded-full mx-2 cursor-pointer hover:scale-110"
                                style={{ backgroundColor: item.color[0] }}
                                onClick={() => setSelectedModel(item)}
                            />
                        ))}
                    </ul>

                    <button className="character-btn-container">
                        {characters.map(({ img, value }) => (
                            <div key={img}>
                                <img 
                                    src={img} 
                                    alt={value} 
                                    className={`w-12 h-12 hover:scale-105 ${
                                        selectedCharacter === value ? "border-4 border-[#e0cf81]" : ""
                                    }`}
                                    onClick={() => handleCharacterClick(value)}
                                />
                            </div>
                        ))}
                    </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Model

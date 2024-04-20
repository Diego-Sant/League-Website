import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useState, useEffect } from "react"
import { characters, models } from "../constants";

const Model = () => {
    const [selectedCharacter, setSelectedCharacter] = useState('irelia');
    const [selectedModel, setSelectedModel] = useState(models.find((model) => model.character === "irelia"));
    const [videoReady, setVideoReady] = useState(false);

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

    useEffect(() => {
        // Reseta o estado do vídeo quando o modelo selecionado muda
        setVideoReady(false);
    }, [selectedModel]);

    const handleVideoLoaded = () => {
        setVideoReady(true);
    };

    const handleVideoError = () => {
        // Trate erros de carregamento do vídeo aqui, se necessário
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
                            <div className="relative">
                                {!videoReady && (
                                    <>
                                        <div class="lds-ring lg:top-[350px] md:top-[230px] top-[170px]"><div></div><div></div><div></div><div></div></div>
                                        <p className="absolute inset-0 lg:top-[26rem] md:top-[18rem] top-[15rem] flex items-center justify-center bg-black bg-opacity-50">Carregando...</p>
                                    </>
                                )}
                                <video 
                                    autoPlay 
                                    controls 
                                    className={`absolute inset-0 object-cover ${!videoReady ? 'hidden' : ''}`} 
                                    key={selectedModel.id} 
                                    onLoadedData={handleVideoLoaded}
                                    onError={handleVideoError}
                                >
                                    <source src={selectedModel.video} type="video/mp4" />
                                </video>
                            </div>
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

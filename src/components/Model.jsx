import { useGSAP } from "@gsap/react"
import gsap from "gsap"

import ModelView from "./ModelView"

import { useRef, useState } from "react"

import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { characters, models } from "../constants";

const Model = () => {
    const [selectedCharacter, setSelectedCharacter] = useState('irelia');
    const [selectedModel, setSelectedModel] = useState(models.find((model) => model.character === "irelia"));

    const cameraControlIrelia = useRef();
    const cameraControlAurelion = useRef();
    const cameraControlRiven = useRef();
    const cameraControlPyke = useRef();
    const cameraControlVolibear = useRef();
    const cameraControlSenna = useRef();

    const ireliaGroup = useRef(new THREE.Group());
    const aurelionGroup = useRef(new THREE.Group());
    const rivenGroup = useRef(new THREE.Group());
    const pykeGroup = useRef(new THREE.Group());
    const volibearGroup = useRef(new THREE.Group());
    const sennaGroup = useRef(new THREE.Group());

    const [ireliaRotation, setIreliaRotation] = useState(0);
    const [aurelionRotation, setAurelionRotation] = useState(0);
    const [rivenRotation, setRivenRotation] = useState(0);
    const [pykeRotation, setPykeRotation] = useState(0);
    const [volibearRotation, setVolibearRotation] = useState(0);
    const [sennaRotation, setSennaRotation] = useState(0);

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
            <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">

                <ModelView
                    index={1}
                    groupRef={ireliaGroup}
                    gsapType="view1"
                    controlRef={cameraControlIrelia}
                    setRotationState={setIreliaRotation}
                    item={selectedModel}
                    character={selectedCharacter}
                    selectedModel={selectedModel}
                />
                <ModelView
                    index={2}
                    groupRef={aurelionGroup}
                    gsapType="view2"
                    controlRef={cameraControlAurelion}
                    setRotationState={setAurelionRotation}
                    item={selectedModel}
                    character={selectedCharacter}
                />
                <ModelView
                    index={3}
                    groupRef={rivenGroup}
                    gsapType="view3"
                    controlRef={cameraControlRiven}
                    setRotationState={setRivenRotation}
                    item={selectedModel}
                    character={selectedCharacter}
                />
                <ModelView
                    index={4}
                    groupRef={pykeGroup}
                    gsapType="view4"
                    controlRef={cameraControlPyke}
                    setRotationState={setPykeRotation}
                    item={selectedModel}
                    character={selectedCharacter}
                />
                <ModelView
                    index={5}
                    groupRef={volibearGroup}
                    gsapType="view5"
                    controlRef={cameraControlVolibear}
                    setRotationState={setVolibearRotation}
                    item={selectedModel}
                    character={selectedCharacter}
                />
                <ModelView
                    index={6}
                    groupRef={sennaGroup}
                    gsapType="view6"
                    controlRef={cameraControlSenna}
                    setRotationState={setSennaRotation}
                    item={selectedModel}
                    character={selectedCharacter}
                />

                <Canvas className="w-full h-full" eventSource={document.getElementById('root')}
                    style={{position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, overflow: 'hidden'}}>
                    <View.Port />
                </Canvas>
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

import { useEffect, useRef, useState } from "react"
import { highlightsSlides } from "../constants"
import gsap from "gsap";
import { pauseImg, playImg, replayImg } from "../utils";
import { useGSAP } from "@gsap/react";

const VideoCarousel = () => {
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);

    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false
    })

    const idToColorMap = {
        0: '#9c3725',
        1: '#3e80b1',
        2: '#d041ea',
        3: '#ce353b',
        4: '#da43ce',
        5: '#2e905f',
        6: '#353f58',
        7: '#302641',
        8: '#fff281',
        9: '#84f7fb',
        10: '#e2bf94',
        11: '#374180',
        12: '#eb9b42'
    };

    const [loadedData, setLoadedData] = useState([]);

    const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

    useGSAP(() => {
        gsap.to('#slider', {
            transform: `translateX(${-100 * videoId}%)`,
            duration: 1,
            ease: 'power2.inOut'
        })
        
        gsap.to('#video', {
            scrollTrigger: {
                trigger: '#video',
                toggleActions: 'restart none none none'
            },
            onComplete: () => {
                setVideo((prevVideo) => ({
                    ...prevVideo,
                    startPlay: true,
                    isPlaying: true
                }))
            }
        })

        gsap.to('#textList', {
            opacity: 1,
            y: -20,
            duration: 1,
            stagger: 0.25
        })
    }, [isEnd, videoId])

    useEffect(() => {
        if(loadedData.length > 3) {
            if(!isPlaying) {
                videoRef.current[videoId].pause();
            } else {
                startPlay && videoRef.current[videoId].play();
            }
        }
    }, [startPlay, videoId, isPlaying, loadedData])

    const handleLoadedMetaData = (i, e) => setLoadedData((prevVideo) => [...prevVideo, e])
    
    useEffect(() => {
        let currentProgress = 0;
        let span = videoSpanRef.current;

        if(span[videoId]) {
            let anim = gsap.to(span[videoId], {
                onUpdate: () => {
                    const progress = Math.ceil(anim.progress() * 100);

                    if(progress != currentProgress) {
                        currentProgress = progress;

                        gsap.to(videoDivRef.current[videoId], {
                            width: window.innerWidth < 760 ? '10vw' :
                            window.innerWidth < 1200 ? '10vw' : '4vw'
                        })

                        gsap.to(span[videoId], {
                            width: `${currentProgress}%`,
                            backgroundColor: idToColorMap[videoId] || 'white',
                        })
                    }
                },

                onComplete: () => {
                    if(isPlaying) {
                        gsap.to(videoDivRef.current[videoId], {
                            width: '12px'
                        })
                        gsap.to(span[videoId], {
                            backgroundColor: '#afafaf'
                        })
                    }
                }
            })

            if (videoId === 0) {
                anim.restart();
            }

            const animUpdate = () => {
                anim.progress(videoRef.current[videoId].currentTime / highlightsSlides[videoId].videoDuration)
            }
    
            if(isPlaying) {
                gsap.ticker.add(animUpdate)
            } else {
                gsap.ticker.remove(animUpdate)
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [videoId, startPlay])

    const handleProcess = (type, i) => {
        switch (type) {
            case 'video-end':
                setVideo((prevVideo) => ({...prevVideo, isEnd: true, videoId: i + 1}))
                break;

            case 'video-last':
                setVideo((prevVideo) => ({...prevVideo, isLastVideo: true}))
                break;

            case 'video-reset':
                setVideo((prevVideo) => ({...prevVideo, isLastVideo: false, videoId: 0}))
                break;

            case 'play':
                setVideo((prevVideo) => ({...prevVideo, isPlaying: !prevVideo.isPlaying}))
                break;

            case 'pause':
                setVideo((prevVideo) => ({...prevVideo, isPlaying: !prevVideo.isPlaying}))
                break;

            default:
                return video;
        }
    }
      
    const handleVideoSelection = (index) => {
        if (videoRef.current[videoId]) {
            videoRef.current[videoId].pause();
        }
        
        setVideo((prevVideo) => ({
          ...prevVideo,
          videoId: index,
          isPlaying: true,
        }));
    };

  return (
    <>
      <div className="flex items-center">
        {highlightsSlides.map((list, i) => (
            <div key={list.id} id="slider" className="sm:pr-20 pr-10">
                <div className="video-carousel_container">
                    <div className="w-full h-full flex-center rounded-3xl overflow-hidden">
                        <video id="video" playsInline={true} 
                        preload="auto" muted
                        className="pointer-events-none"
                        ref={(el) => (videoRef.current[i] = el)}
                        onEnded={() => i !== 12 ? handleProcess('video-end', i) : handleProcess('video-last')}
                        onPlay={() => {setVideo((prevVideo) => ({...prevVideo, isPlaying: true}))}}
                        onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                        >
                            <source src={list.video} type="video/mp4"/>
                        </video>
                    </div>

                    <div className="absolute 2xl:top-12 xl:top-24 lg:top-32 md:top-44 sm:top-32 top-20 left-[5%] z-10">
                        {list.textLists.map((text, index) => (
                            <p key={text} id="textList" className={`opacity-0 ${index === 0 ? 'textList-title md:text-4xl text-2xl' : 'md:text-2xl text-xl font-medium '}`}>
                                {text}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        ))}
      </div>

      <div className="relative sm:flex-center flex-wrap mt-10">
        <div className="flex-center flex-wrap gap-y-4 py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
            {videoRef.current.map((_, i) => (
                <span key={i} ref={(el) => (videoDivRef.current[i] = el)} className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer" onClick={() => handleVideoSelection(i)}>
                    <span className="absolute h-full w-full rounded-full" ref={(el) => (videoSpanRef.current[i] = el)} />
                </span>
            ))}
        </div>
        <button className="control-btn sm:mt-0 mt-4" onClick={isLastVideo ? () => handleProcess('video-reset') : !isPlaying ? () => handleProcess('play') : () => handleProcess('pause')}>
            <img src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg} 
            alt={isLastVideo ? "Reiniciar o vídeo" : !isPlaying ? "Iniciar vídeo" : "Pausar vídeo"}
            />
        </button>
      </div>
    </>
  )
}

export default VideoCarousel

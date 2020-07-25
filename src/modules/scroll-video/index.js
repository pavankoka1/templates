import React, { useState, useEffect, useRef } from 'react';
import styles from './index.module.scss';

const ScrollVideo = () => {

    const [videoHeight, setVideoHeight] = useState(null);
    const [isMounted, setMount] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if(!isMounted) {
            setMount(true);
        }
    }, []);

    const handleMetaData = () => {
        let playbackConst = 50;
        const duration = videoRef.current.duration;
        setVideoHeight(Math.floor(duration) * playbackConst + 'px');

        function scrollPlay() {
            let frameNo = window.pageYOffset / playbackConst;
            videoRef.current.currentTime = frameNo;
            console.log(videoRef.current.currentTime);
            window.requestAnimationFrame(scrollPlay);
        }

        window.requestAnimationFrame(scrollPlay);
    }

    return (
        <div 
            className={styles.wrapper}
            style={{
                height: videoHeight,
            }}
        >
            <video
                // type="video/webm; codecs=&quot;vp8, vorbis&quot;"
                // type="video/youtube"
                src={require('assets/videos/apple.mp4')}
                // src="https://www.html5rocks.com/tutorials/video/basics/Chrome_ImF.webm"
                // src="https://www.youtube.com/watch?v=cVEemOmHw9Y"
                onLoadedMetadata={handleMetaData}
                ref={videoRef}
            />
        </div>
    )
}

export default ScrollVideo;

import React, { useRef, useEffect } from 'react';

const styles = {
    videoContainer: {
        width: '150px',
        height: '150px'
    },
    videoElement: {
        width: '100%',
        height: '100%'
    }
};

const GroupCallVideo = ({ stream }) => {
    const videoRef = useRef();

    useEffect(() => {
        const remoteGroupCallVideo = videoRef.current;
        remoteGroupCallVideo.srcObject = stream;
        remoteGroupCallVideo.onloadedmetadata = () => {
            remoteGroupCallVideo.play();
        };
    }, [stream]);

    return ( <
        div style = { styles.videoContainer } >
        <
        video ref = { videoRef }
        autoPlay style = { styles.videoElement }
        /> <
        /div>
    );
};

export default GroupCallVideo;
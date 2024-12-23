import React, { useState } from 'react';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio] = useState(new Audio('path/to/your/music.mp3'));

    const togglePlay = () => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <button onClick={togglePlay}>{isPlaying ? 'Pause Music' : 'Play Music'}</button>
        </div>
    );
};

export default MusicPlayer;

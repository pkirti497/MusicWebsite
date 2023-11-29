import React, { useState, useRef } from "react";

const MusicHome = () => {
  const [value, setValue] = useState(0);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="container">
      <div className="music-player">
        <nav>
          <div className="circle">
            <i className="fa-solid fa-angle-left"></i>
          </div>
          <div className="circle">
            <i className="fa-solid fa-bars"></i>
          </div>
        </nav>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKNf6MDfZ10dowJ1X8zMKS_1vpjLu5Hrv7aA&usqp=CAU"
          className="song-img"
          alt="Song"
        />
        <h1>Despacito</h1>
        <p>Luis Fonsi Ft. Puerto Rican</p>
        <audio ref={audioRef} controls>
        <source
          src={process.env.PUBLIC_URL + "/audio/Gaddi.mp3"}
          type="audio/mpeg"
        />
      </audio>
        <input
          type="range"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id="progress"
        />
        <div className="controls">
          <div>
            <i className="fa-solid fa-backward"></i>
          </div>
          <div onClick={togglePlay}>
        <i className={`fas ${isPlaying ? "fa-pause" : "fa-play"}`}></i>
      </div>
          <div>
            <i className="fa-solid fa-forward"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicHome;

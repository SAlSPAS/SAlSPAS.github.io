import React, { useState, useRef } from 'react';
import YouTube from 'react-youtube';

interface Song {
  title: string;
  youtubeId: string;
}

const playlist: Song[] = [
  { title: "IGOR'S THEME", youtubeId: "6S20mJvr4vs" },
  { title: "EARFQUAKE", youtubeId: "t-E2gm0a_N0" },
  { title: "I THINK", youtubeId: "m91Vq-Yd3BA" },
  // Add more songs as needed
];

export default function IpodSection() {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<YouTube>(null);

  const handlePlay = () => {
    if (playerRef.current) {
      playerRef.current.internalPlayer.playVideo();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (playerRef.current) {
      playerRef.current.internalPlayer.pauseVideo();
      setIsPlaying(false);
    }
  };

  const handleNext = () => {
    setCurrentSong((prev) => (prev + 1) % playlist.length);
  };

  const handlePrevious = () => {
    setCurrentSong((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <div className="w-64 h-96 bg-gray-200 rounded-lg shadow-xl overflow-hidden">
        <div className="h-1/2 bg-black p-4">
          <YouTube
            videoId={playlist[currentSong].youtubeId}
            opts={{ height: '100%', width: '100%', playerVars: { autoplay: 1 } }}
            onReady={(event: any) => event.target.pauseVideo()}
            ref={playerRef}
          />
        </div>
        <div className="h-1/2 flex flex-col">
          <div className="flex-1 overflow-y-auto p-2">
            {playlist.map((song, index) => (
              <div
                key={index}
                className={`p-2 ${index === currentSong ? 'bg-blue-500 text-white' : 'text-gray-800'}`}
                onClick={() => setCurrentSong(index)}
              >
                {song.title}
              </div>
            ))}
          </div>
          <div className="h-16 bg-gray-300 flex items-center justify-center">
            <button onClick={handlePrevious} className="mx-2">⏮️</button>
            <button onClick={isPlaying ? handlePause : handlePlay} className="mx-2">
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            <button onClick={handleNext} className="mx-2">⏭️</button>
          </div>
        </div>
      </div>
    </div>
  );
}
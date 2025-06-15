import React from 'react';
import YouTube from 'react-youtube';

function VideoPlayer({ videoId, onClose }) {
  const opts = {
    
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className=" h-screen w-screen fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="relative">
        <YouTube className='w-full h-full' videoId={videoId} opts={opts} />
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-2 mr-2 bg-white text-black px-4 py-2 rounded"
        >
          ✖ Close
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;

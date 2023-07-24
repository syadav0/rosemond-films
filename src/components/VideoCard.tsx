'use client'

import React from 'react';

interface VideoCardProps {
  videoSrc: string;
  title: string;
  desc: string;
  flexDirection?: 'row' | 'row-reverse';
}

const VideoCard: React.FC<VideoCardProps> = ({videoSrc, title, desc, flexDirection}) => {
  return (
    <div className={`shadow-md overflow-hidden md:p-8 md:m-8 md:flex md:flex-${flexDirection}`}>
      <div className="md:shrink-0">
        <video className="w-full h-64 object-cover md:w-[38rem] md:h-full">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="p-4 flex items-center md:text-2xl">
        <div>
          <div className="tracking-wide font-semibold">
            {title}
          </div>
          <p className="mt-1 text-slate-300 md:text-xl">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;



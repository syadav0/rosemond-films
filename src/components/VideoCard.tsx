'use client'

import React from 'react';

interface VideoCardProps {
  videoSrc: string,
  title: string,
  desc: string,
  flexDirection?: 'row' | 'row-reverse',
  text?: 'left' | 'right'
}

const VideoCard: React.FC<VideoCardProps> = ({videoSrc, title, desc, flexDirection, text}) => {
  return (
    <div className={`shadow-md my-10 overflow-hidden md:px-20 md:mx-20 md:flex 
      ${flexDirection === 'row-reverse' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <div className="md:shrink-0">
        <video loop muted className="w-full h-64 object-cover md:w-[40rem] md:h-full">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={`md:p-8 p-2 flex items-center text-left md:text-3xl 
      ${text === 'left' ? 'md:text-left' : 'md:text-right'}`}>
        <div>
          <div className="tracking-wide font-semibold">{title}</div>
          <p className="mt-1 md:text-2xl">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;



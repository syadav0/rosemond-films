'use client'

import React from 'react';

interface GenreProps {
  title: string;
}

const GenreCard: React.FC<GenreProps> = ({ title }) => {
  
  return (
    <div className="flex flex-col-reverse h-96 group bg-slate-400 hover:bg-indigo-300 duration-300 object-cover">
      <div className='h-1/4 bg-slate-700 text-white text-3xl flex justify-center items-center
        group-hover:h-1/3 duration-300'>
        <p className="font-jost font-white">{title}</p>
      </div>
    </div>
  );
};

export default GenreCard;


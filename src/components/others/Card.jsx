import React from 'react';

function Card({ data }) {
  return (
    <div className= 'bg-zinc-700 w-[20vw] h-[45vh] rounded-xl flex justify-center items-center relative '>
      <img src={`${data.img}`} className='object-cover w-1/2' />
      <div className='absolute left-2 bottom-2'>
        <h1 className='px-[1vw] py-[.7vh] border-[1px] border-zinc-500 rounded-full font-light text-sm text-white uppercase mr-2 text-[1.8vh] text-center'>{data.about}</h1>
      </div>
    </div>
  );
}

export default Card;

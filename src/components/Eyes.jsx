import React, { useEffect, useState, useRef } from 'react';

function Eyes() {
  const [rotate1, setRotate1] = useState('0');
  const [rotate2, setRotate2] = useState('0');

  const eye1Ref = useRef(null);
  const eye2Ref = useRef(null);

  useEffect(() => {

    window.addEventListener('mousemove', (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      const eye1Rect = eye1Ref.current.getBoundingClientRect();
      const eye1CenterX = eye1Rect.left + eye1Rect.width / 2;
      const eye1CenterY = eye1Rect.top + eye1Rect.height / 2;

      const eye2Rect = eye2Ref.current.getBoundingClientRect();
      const eye2CenterX = eye2Rect.left + eye2Rect.width / 2;
      const eye2CenterY = eye2Rect.top + eye2Rect.height / 2;

      const deltaX1 = mouseX - eye1CenterX;
      const deltaY1 = mouseY - eye1CenterY;

      const deltaX2 = mouseX - eye2CenterX;
      const deltaY2 = mouseY - eye2CenterY;

      const angle1 = Math.atan2(deltaY1, deltaX1) * (180 / Math.PI);
      const angle2 = Math.atan2(deltaY2, deltaX2) * (180 / Math.PI);

      setRotate1(angle1-180);
      setRotate2(angle2-180);
    });
  });

  return (
    <div className='w-full h-screen overflow-hidden z-[-10]'>
      <div data-scroll data-scroll-speed="-3.9" className="w-full h-screen bg-cover bg-center flex justify-center items-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]" >
        <div className='flex gap-x-10'>
          <div className='w-40 h-40 rounded-full bg-white flex items-center justify-center' >
            <div className='w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center' ref={eye1Ref}>
              <div className='line w-[100%] h-4' style={{ transform: `rotate(${rotate1}deg)` }}>
                <div className='w-4 h-4 rounded-full bg-white'></div>
              </div>
            </div>
          </div>
          <div className='w-40 h-40 rounded-full bg-white flex items-center justify-center' >
            <div className='w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center' ref={eye2Ref}>
              <div className='line w-[100%] h-4' style={{ transform: `rotate(${rotate2}deg)` }}>
                <div className='w-4 h-4 rounded-full bg-white'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;

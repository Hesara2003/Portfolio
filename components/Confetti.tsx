'use client'

import React, { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';

const Confetti = () => {
  const [windowDimension, setWindowDimension] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ReactConfetti
      width={windowDimension.width}
      height={windowDimension.height}
      numberOfPieces={windowDimension.width < 768 ? 100 : 200}
      recycle={false}
      gravity={0.2}
      tweenDuration={4000}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
        pointerEvents: 'none'
      }}
    />
  );
};

export default Confetti;
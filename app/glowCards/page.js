// components/PointerSync.js
"use client"
import { useEffect } from 'react';

const PointerSync = () => {
  const syncPointer = ({ x, y }) => {
    document.documentElement.style.setProperty('--x', x.toFixed(2));
    document.documentElement.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
    document.documentElement.style.setProperty('--y', y.toFixed(2));
    document.documentElement.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
  };

  useEffect(() => {
    const handlePointerMove = (event) => {
      syncPointer({ x: event.clientX, y: event.clientY });
    };

    document.body.addEventListener('pointermove', handlePointerMove);

    return () => {
      // Cleanup the event listener when the component is unmounted
      document.body.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PointerSync;

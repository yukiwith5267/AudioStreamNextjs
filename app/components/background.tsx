// components/NoiseBackground.js
import { useEffect, useRef } from 'react';

const NoiseBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '../../public/noise.js';  // 修正されたパス
    script.async = true;
    script.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;  // Add null check
      const context = canvas.getContext('2d');
      if (!context) return;  // Add null check for context
      const width = canvas.width = window.innerWidth;
      const height = canvas.height = window.innerHeight;
      
      const drawNoise = () => {
        for (let x = 0; x < width; x++) {
          for (let y = 0; y < height; y++) {
            const value = Math.floor((window.noise.simplex2(x / 100, y / 100) + 1) * 128);
            context.fillStyle = `rgb(${value},${value},${value})`;
            context.fillRect(x, y, 1, 1);
          }
        }
      };

      drawNoise();
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
};

export default NoiseBackground;

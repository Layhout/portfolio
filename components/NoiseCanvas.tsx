"use client";

import { useEffect, useRef } from "react";

export default function NoiseCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    canvasRef.current!.width = width;
    canvasRef.current!.height = height;

    const ctx = canvasRef.current!.getContext("2d");
    const idata = ctx!.createImageData(width, height);
    const buffer32 = new Uint32Array(idata.data.buffer);

    const noise = (ctx: CanvasRenderingContext2D | null) => {
      let len = buffer32.length - 1;
      while (len--) buffer32[len] = Math.random() < 0.5 ? 0 : -1 >> 0;
      ctx!.putImageData(idata, 0, 0);
    };

    let animationId: number | null = null;
    const render = () => {
      noise(ctx);
      animationId = requestAnimationFrame(render);
    };
    render();

    return () => {
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // dark:opacity-[0.03]
  return <canvas ref={canvasRef} className="absolute top-0 left-0 opacity-15 dark:opacity-5" />;
}

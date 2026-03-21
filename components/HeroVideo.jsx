"use client";

import React from "react";
import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig, Sequence } from "remotion";

const brigadeiros = [
  { src: "/resources/brigadeiro-docinhoPerfil.png", x: 20, y: 30, delay: 0 },
  { src: "/resources/ninhoNutella-docinhoPerfil.png", x: 70, y: 20, delay: 10 },
  { src: "/resources/beijinho-docinhoPerfil.png", x: 40, y: 60, delay: 20 },
  { src: "/resources/morangoninho-docinhoPerfil.png", x: 80, y: 70, delay: 30 },
  { src: "/resources/brigadeiroDourado-docinhoPerfil.png", x: 10, y: 80, delay: 40 },
];

export const HeroVideo = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Gentle float effect for the background
  const bgScale = interpolate(
    frame,
    [0, 300],
    [1, 1.05],
    { extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill className="items-center justify-center overflow-hidden bg-[#F5E6E8]">
      <AbsoluteFill>
        <Img 
          src="/hero-bg.png" 
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: `scale(${bgScale})`,
          }}
        />
        {/* Soft light overlay to make text pop against the pink background */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
      </AbsoluteFill>

      {/* Floating Brigadeiros */}
      {brigadeiros.map((item, index) => {
        const itemFrame = frame - item.delay;
        const scale = spring({
          frame: itemFrame,
          fps,
          config: { damping: 12, mass: 0.8 },
        });

        // Continuous floating
        const yFloat = Math.sin(frame / 30 + index) * 15;
        const rotation = interpolate(frame, [0, 300], [0, index % 2 === 0 ? 30 : -30]);

        return (
          <Sequence key={index} from={item.delay}>
            <AbsoluteFill>
              <Img
                src={item.src}
                style={{
                  position: "absolute",
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                  width: "200px",
                  height: "200px",
                  objectFit: "contain",
                  transform: `scale(${scale}) translateY(${yFloat}px) rotate(${rotation}deg)`,
                  filter: "drop-shadow(0px 25px 30px rgba(86,37,71,0.25))",
                }}
              />
            </AbsoluteFill>
          </Sequence>
        );
      })}

      {/* Main Title animation */}
      <Sequence from={30}>
        <Title />
      </Sequence>
    </AbsoluteFill>
  );
};

const Title = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const y = spring({ frame, fps, config: { damping: 14 } });
  
  const titleY = interpolate(y, [0, 1], [50, 0]);

  return (
    <AbsoluteFill className="items-center justify-center pointer-events-none pb-12">
      <div 
        style={{ 
          opacity, 
          transform: `translateY(${titleY}px)`,
          textAlign: "center",
          color: "var(--color-plum)"
        }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold font-playfair tracking-tight drop-shadow-xl text-primary">
          A <span style={{ color: "var(--color-gold)", textShadow: "0 0 25px rgba(255, 255, 255, 0.8)" }}>Docurinha</span>
        </h1>
        <p className="mt-6 text-xl md:text-3xl font-light text-primary/80 drop-shadow flex flex-col items-center">
          <span className="font-sans tracking-widest uppercase text-sm mb-2 font-medium">Feitos à Mão com Amor</span>
          <span className="font-playfair italic">Artesanais & Premium</span>
        </p>
      </div>
    </AbsoluteFill>
  );
};

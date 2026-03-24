"use client";

import { useId } from "react";

/**
 * SVG recreation of the "a docurinha" brand logo.
 * Script text + pink watercolor brush stroke + gold double-frame with shimmer.
 */
export default function LogoSVG({ height = 48, className = "", animated = true, variant = "default" }) {
  const id = useId().replace(/:/g, "");
  const scale = height / 60;
  const isDark = variant === "light"; // light text for dark backgrounds

  return (
    <svg
      viewBox="0 0 280 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={280 * scale}
      className={className}
      role="img"
      aria-label="A Docurinha"
    >
      <defs>
        {/* Gold gradient */}
        <linearGradient id={`${id}-gold`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A96E" />
          <stop offset="25%" stopColor="#D4B87A" />
          <stop offset="50%" stopColor="#EAD9A6" />
          <stop offset="75%" stopColor="#D4B87A" />
          <stop offset="100%" stopColor="#B8944F" />
        </linearGradient>

        {/* Shimmer sweep */}
        {animated && (
          <linearGradient id={`${id}-shimmer`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F5E6C8" stopOpacity="0" />
            <stop offset="48%" stopColor="#F5E6C8" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFFBE8" stopOpacity="0.7" />
            <stop offset="52%" stopColor="#F5E6C8" stopOpacity="0" />
            <stop offset="100%" stopColor="#F5E6C8" stopOpacity="0" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              from="-1 0"
              to="1 0"
              dur="3.5s"
              repeatCount="indefinite"
            />
          </linearGradient>
        )}

        {/* Pink brush — more opaque, more watercolor feel */}
        <linearGradient id={`${id}-brush`} x1="0%" y1="20%" x2="100%" y2="80%">
          <stop offset="0%" stopColor="#F8D5DB" stopOpacity="0.15" />
          <stop offset="15%" stopColor="#F2BFC8" stopOpacity="0.5" />
          <stop offset="35%" stopColor="#EDAAB6" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#F0B5C0" stopOpacity="0.75" />
          <stop offset="65%" stopColor="#EDAAB6" stopOpacity="0.65" />
          <stop offset="85%" stopColor="#F2BFC8" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#F8D5DB" stopOpacity="0.1" />
        </linearGradient>

        {/* Text fill */}
        <linearGradient id={`${id}-text`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={isDark ? "#F5EDE8" : "#7A4A55"} />
          <stop offset="50%" stopColor={isDark ? "#FFFFFF" : "#6B3F4A"} />
          <stop offset="100%" stopColor={isDark ? "#F5EDE8" : "#7A4A55"} />
        </linearGradient>
      </defs>

      {/* Outer gold frame */}
      <rect
        x="14" y="4" width="252" height="68" rx="2.5"
        fill="none"
        stroke={`url(#${id}-gold)`}
        strokeWidth="1.8"
      />

      {/* Inner gold frame */}
      <rect
        x="19" y="9" width="242" height="58" rx="1.5"
        fill="none"
        stroke={`url(#${id}-gold)`}
        strokeWidth="0.6"
        opacity="0.45"
      />

      {/* Corner ornaments — small gold diamonds */}
      {[[21, 11], [257, 11], [21, 65], [257, 65]].map(([cx, cy], i) => (
        <rect
          key={i}
          x={cx - 2} y={cy - 2} width={4} height={4}
          rx="0.5"
          fill={`url(#${id}-gold)`}
          opacity="0.6"
          transform={`rotate(45 ${cx} ${cy})`}
        />
      ))}

      {/* Shimmer sweep on outer frame */}
      {animated && (
        <rect
          x="14" y="4" width="252" height="68" rx="2.5"
          fill="none"
          stroke={`url(#${id}-shimmer)`}
          strokeWidth="2.5"
        />
      )}

      {/* Pink watercolor brush stroke — wide, organic, layered */}
      <path
        d="M 28 32
           C 38 22, 55 30, 80 25
           C 105 20, 120 28, 140 24
           C 160 20, 175 27, 200 23
           C 225 19, 245 26, 258 30
           L 256 48
           C 245 54, 225 46, 200 50
           C 175 54, 160 47, 140 51
           C 120 55, 105 48, 80 52
           C 55 56, 38 50, 28 44
           Z"
        fill={`url(#${id}-brush)`}
      />
      {/* Second brush layer — offset for depth */}
      <path
        d="M 42 34
           C 58 26, 80 33, 110 29
           C 140 25, 160 32, 185 28
           C 210 24, 232 31, 248 34
           L 246 45
           C 230 50, 208 43, 182 47
           C 156 51, 138 44, 108 48
           C 78 52, 56 46, 42 41
           Z"
        fill={`url(#${id}-brush)`}
        opacity="0.5"
      />

      {/* Script text "a docurinha" — larger, more prominent */}
      <text
        x="140"
        y="48"
        textAnchor="middle"
        fill={`url(#${id}-text)`}
        fontFamily="'Noto Serif', Georgia, serif"
        fontWeight="400"
        fontStyle="italic"
        fontSize="28"
        letterSpacing="1.5"
      >
        a docurinha
      </text>
    </svg>
  );
}

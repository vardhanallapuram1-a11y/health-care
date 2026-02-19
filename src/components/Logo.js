import React from 'react';

const Logo = ({ className = "h-12 w-auto" }) => {
    return (
        <div className={`d-flex align-items-center ${className}`}>
            <svg
                viewBox="0 0 450 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: '100%', width: 'auto' }}
            >
                <defs>
                    <linearGradient id="scannerBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0066CC" />
                        <stop offset="100%" stopColor="#003399" />
                    </linearGradient>
                    <radialGradient id="innerGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" stopColor="#003366" />
                        <stop offset="100%" stopColor="#001133" />
                    </radialGradient>
                </defs>

                {/* Outer Scanner Rings with Perspective */}
                <path d="M120 20 C60 20, 20 60, 20 100 C20 110, 40 125, 120 125 L120 115 C50 115, 35 100, 35 100 C35 70, 70 35, 120 35 Z" fill="#0066CC" />
                <path d="M110 30 C70 30, 45 55, 45 90 C45 105, 60 115, 110 115 L110 108 C70 108, 60 100, 60 90 C60 65, 80 45, 110 45 Z" fill="#0099FF" />

                {/* Dark Inner Circle */}
                <circle cx="105" cy="75" r="38" fill="url(#innerGlow)" />

                {/* Human Silhouette - White */}
                <path d="M105 52 C107 52, 108.5 50.5, 108.5 48.5 C108.5 46.5, 107 45, 105 45 C103 45, 101.5 46.5, 101.5 48.5 C101.5 50.5, 103 52, 105 52 Z" fill="white" />
                <path d="M105 53 C102.5 53, 101 55, 101 58 L101 70 L102.5 70 L102.5 98 L104 98 L104 80 L106 80 L106 98 L107.5 98 L107.5 70 L109 70 L109 58 C109 55, 107.5 53, 105 53 Z" fill="white" />

                {/* Orbital Atom Rings */}
                <ellipse cx="130" cy="65" rx="15" ry="8" stroke="black" strokeWidth="1" transform="rotate(-30 130 65)" />
                <ellipse cx="130" cy="65" rx="15" ry="8" stroke="black" strokeWidth="1" transform="rotate(30 130 65)" />
                <ellipse cx="130" cy="65" rx="15" ry="8" stroke="black" strokeWidth="1" />
                <circle cx="130" cy="65" r="1.5" fill="black" />

                {/* Plus Symbol */}
                <path d="M145 35 H160 M152.5 27.5 V42.5" stroke="#0099FF" strokeWidth="5" strokeLinecap="round" />

                {/* UltraRadX Text */}
                <text x="165" y="85" style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                    <tspan fill="#88BBDD" fontSize="48">Ultra</tspan>
                    <tspan fill="#004a99" fontSize="48" dx="2">RadX</tspan>
                </text>

                {/* Healthcare Text */}
                <text x="205" y="120" fill="#4488AA" fontSize="28" style={{ fontStyle: 'italic', letterSpacing: '4px' }}>
                    Healthcare
                </text>

                {/* Underline */}
                <path d="M200 130 H360" stroke="#88BBDD" strokeWidth="1" />
            </svg>
        </div>
    );
};

export default Logo;

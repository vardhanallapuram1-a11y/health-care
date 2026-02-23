import React from 'react';

const Logo = ({ className = "h-12 w-auto", variant = "svg" }) => {
    const isImage = variant === "logo1" || variant === "logo2";
    const imageSrc = variant === "logo1" ? "images/logo1.jpeg" : "images/logo2.jpeg";

    return (
        <div className={`d-flex align-items-center ${className}`}>
            {isImage ? (
                <img
                    src={imageSrc}
                    alt="UltraRadX Healthcare Logo"
                    style={{ height: '100%', width: 'auto', objectFit: 'contain' }}
                />
            ) : (
                <svg
                    viewBox="0 0 500 150"
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

                    {/* Outer Scanner Rings - Shifted Left */}
                    <path d="M100 20 C40 20, 0 60, 0 100 C0 110, 20 125, 100 125 L100 115 C30 115, 15 100, 15 100 C15 70, 50 35, 100 35 Z" fill="#0066CC" />
                    <path d="M90 30 C50 30, 25 55, 25 90 C25 105, 40 115, 90 115 L90 108 C50 108, 40 100, 40 90 C40 65, 60 45, 90 45 Z" fill="#0099FF" />

                    {/* Dark Inner Circle */}
                    <circle cx="85" cy="75" r="38" fill="url(#innerGlow)" />

                    {/* Human Silhouette - White */}
                    <path d="M85 52 C87 52, 88.5 50.5, 88.5 48.5 C88.5 46.5, 87 45, 85 45 C83 45, 81.5 46.5, 81.5 48.5 C81.5 50.5, 83 52, 85 52 Z" fill="white" />
                    <path d="M85 53 C82.5 53, 81 55, 81 58 L81 70 L82.5 70 L82.5 98 L84 98 L84 80 L86 80 L86 98 L87.5 98 L87.5 70 L89 70 L89 58 C89 55, 87.5 53, 85 53 Z" fill="white" />

                    {/* Orbital Atom Rings - Medical Light Blue */}
                    <ellipse cx="110" cy="65" rx="18" ry="10" stroke="#88BBDD" strokeWidth="1.5" transform="rotate(-30 110 65)" />
                    <ellipse cx="110" cy="65" rx="18" ry="10" stroke="#88BBDD" strokeWidth="1.5" transform="rotate(30 110 65)" />
                    <circle cx="110" cy="65" r="2" fill="#88BBDD" />

                    {/* Plus Symbol - Positioned to Top-Right of Scanner */}
                    <path d="M125 35 H140 M132.5 27.5 V42.5" stroke="#0099FF" strokeWidth="5" strokeLinecap="round" />

                    {/* UltraRadX Text - Shifted Right to prevent overlap */}
                    <text x="160" y="80" style={{ fontStyle: 'italic', fontWeight: 'bold', fontFamily: 'Outfit, sans-serif' }}>
                        <tspan fill="#88BBDD" fontSize="56">Ultra</tspan>
                        <tspan fill="#004a99" fontSize="56" dx="4">RadX</tspan>
                    </text>

                    {/* Healthcare Text - Clear below and right */}
                    <text x="210" y="125" fill="#4488AA" fontSize="32" style={{ fontStyle: 'italic', letterSpacing: '2px', fontFamily: 'Outfit, sans-serif' }}>
                        Healthcare
                    </text>
                </svg>
            )}
        </div>
    );
};

export default Logo;

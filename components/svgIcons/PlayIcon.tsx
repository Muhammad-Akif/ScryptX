import React from 'react'

const PlayIcon = ({ size = '72', ...props }) => {
    return (
        <svg width={size} height={size} {...props} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="36" cy="36" r="35.9091" fill="white" />
            <circle cx="36" cy="35.9999" r="21.0455" fill="white" stroke="#01756B" />
            <path d="M34.4171 29.0991L34.4174 29.0993L37.5243 30.889L40.6308 32.6785C40.6309 32.6786 40.631 32.6786 40.6312 32.6787C42.4635 33.7361 43.2689 35.0622 43.2689 36.2874C43.2689 37.5126 42.4634 38.8388 40.6308 39.8962L37.5243 41.6858L34.4174 43.4755L34.4171 43.4756C32.5844 44.5332 31.0342 44.5672 29.9741 43.9546C28.9139 43.3421 28.1691 41.9819 28.1691 39.8668V36.2874V32.708C28.1691 30.5929 28.9139 29.2327 29.9741 28.6201C31.0342 28.0076 32.5844 28.0416 34.4171 29.0991Z" fill="url(#paint0_linear_52_25750)" stroke="url(#paint1_linear_52_25750)" />
            <defs>
                <linearGradient id="paint0_linear_52_25750" x1="27.9811" y1="36.2874" x2="43.7725" y2="36.3601" gradientUnits="userSpaceOnUse">
                    <stop offset="0.380208" stopColor="#016D5B" />
                    <stop offset="1" stopColor="#017973" />
                </linearGradient>
                <linearGradient id="paint1_linear_52_25750" x1="44.4699" y1="35.509" x2="32.0153" y2="35.1198" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#038780" />
                    <stop offset="1" stopColor="#028B83" />
                </linearGradient>
            </defs>
        </svg>

    )
}

export default PlayIcon
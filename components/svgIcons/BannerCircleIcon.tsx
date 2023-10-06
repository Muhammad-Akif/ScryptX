import React from 'react'

const BannerCircleIcon = ({ width = "716", height = "700", ...props }) => {
    return (
        <svg width={width} height={height} {...props} viewBox="0 0 716 700" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="601.5" cy="300.5" r="481" transform="rotate(-90 601.5 300.5)" stroke="url(#paint0_linear_52_25752)" />
            <circle cx="464.5" cy="725.5" r="464.5" transform="rotate(-90 464.5 725.5)" fill="url(#paint1_linear_52_25752)" />
            <defs>
                <linearGradient id="paint0_linear_52_25752" x1="601.5" y1="-181" x2="601.5" y2="782" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00AAA1" />
                    <stop offset="0.369023" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_52_25752" x1="464.5" y1="261" x2="464" y2="1001.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0.11" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>

    )
}

export default BannerCircleIcon
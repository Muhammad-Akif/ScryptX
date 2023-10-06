import React from 'react'

const SecurityDesignIcon = ({ size = "48", ...props }) => {
  return (
    <svg width={size} height={size} {...props} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_52_21258)">
    <circle cx="24" cy="20" r="20" fill="white"/>
    <circle cx="24" cy="20" r="19.75" stroke="#016D5B" stroke-width="0.5"/>
    </g>
    <path d="M22.392 11.784L18.4 13.288C17.48 13.632 16.728 14.72 16.728 15.696V21.64C16.728 22.584 17.352 23.824 18.112 24.392L21.552 26.96C22.68 27.808 24.536 27.808 25.664 26.96L29.104 24.392C29.864 23.824 30.488 22.584 30.488 21.64V15.696C30.488 14.712 29.736 13.624 28.816 13.28L24.824 11.784C24.144 11.536 23.056 11.536 22.392 11.784Z" stroke="#016D5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21.24 19.496L22.528 20.784L25.968 17.344" stroke="#016D5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
    <filter id="filter0_d_52_21258" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_52_21258"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_52_21258" result="shape"/>
    </filter>
    </defs>
    </svg>
    
  )
}

export default SecurityDesignIcon
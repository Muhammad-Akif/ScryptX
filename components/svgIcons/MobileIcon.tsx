import React from 'react'

const MobileIcon = ({size="48", ...props}) => {
  return (
    <svg width={size} height={size} {...props} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_52_21285)">
    <circle cx="24" cy="20" r="20" fill="white"/>
    <circle cx="24" cy="20" r="19.75" stroke="#016D5B" strokeWidth="0.5"/>
    </g>
    <path d="M31.56 15.55V24.65C31.56 28.29 30.65 29.2 27.01 29.2H21.55C17.91 29.2 17 28.29 17 24.65V15.55C17 11.91 17.91 11 21.55 11H27.01C30.65 11 31.56 11.91 31.56 15.55Z" stroke="#016D5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26.1 14.185H22.46" stroke="#016D5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24.28 26.561C25.059 26.561 25.6905 25.9295 25.6905 25.1505C25.6905 24.3715 25.059 23.74 24.28 23.74C23.501 23.74 22.8695 24.3715 22.8695 25.1505C22.8695 25.9295 23.501 26.561 24.28 26.561Z" stroke="#016D5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
    <filter id="filter0_d_52_21285" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_52_21285"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_52_21285" result="shape"/>
    </filter>
    </defs>
    </svg>
    
    

  )
}

export default MobileIcon
import React from 'react'

const EncriptionIcon = ({ size = "48", ...props }) => {
    return (
        <svg width={size} height={size} {...props} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_52_21250)">
                <circle cx="24" cy="20" r="20" fill="white" />
                <circle cx="24" cy="20" r="19.75" stroke="#016D5B" strokeWidth="0.5" />
            </g>
            <path d="M22.816 26.6H20C19.504 26.6 19.064 26.584 18.672 26.528C16.568 26.296 16 25.304 16 22.6V18.6C16 15.896 16.568 14.904 18.672 14.672C19.064 14.616 19.504 14.6 20 14.6H22.768" stroke="#016D5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26.016 14.6H27.2C27.696 14.6 28.136 14.616 28.528 14.672C30.632 14.904 31.2 15.896 31.2 18.6V22.6C31.2 25.304 30.632 26.296 28.528 26.528C28.136 26.584 27.696 26.6 27.2 26.6H26.016" stroke="#016D5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26 12.6V28.6" stroke="#016D5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22.8756 20.6H22.8828" stroke="#016D5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.6756 20.6H19.6828" stroke="#016D5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
                <filter id="filter0_d_52_21250" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_52_21250" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_52_21250" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}

export default EncriptionIcon
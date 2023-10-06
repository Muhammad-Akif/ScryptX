import React from 'react'

const FexibleLiceneIcon = ({ size = "48", ...props }) => {
    return (
        <svg width={size} height={size} {...props} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_52_21266)">
                <circle cx="24" cy="20" r="20" fill="white" />
                <circle cx="24" cy="20" r="19.75" stroke="#016D5B" stroke-width="0.5" />
            </g>
            <path d="M19.384 26.76C20.04 26.056 21.04 26.112 21.616 26.88L22.424 27.96C23.072 28.816 24.12 28.816 24.768 27.96L25.576 26.88C26.152 26.112 27.152 26.056 27.808 26.76C29.232 28.28 30.392 27.776 30.392 25.648V16.632C30.4 13.408 29.648 12.6 26.624 12.6H20.576C17.552 12.6 16.8 13.408 16.8 16.632V25.64C16.8 27.776 17.968 28.272 19.384 26.76Z" stroke="#016D5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20.4769 19.8H20.484" stroke="#016D5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.7188 19.8H27.1188" stroke="#016D5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20.4769 16.6H20.484" stroke="#016D5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.7188 16.6H27.1188" stroke="#016D5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <defs>
                <filter id="filter0_d_52_21266" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_52_21266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_52_21266" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}

export default FexibleLiceneIcon
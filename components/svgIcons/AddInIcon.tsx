import React from 'react'

const AddInIcon = ({ size = "48", ...props }) => {
    return (
        <svg width={size} height={size} {...props} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_52_21276)">
                <circle cx="24" cy="20" r="20" fill="white" />
                <circle cx="24" cy="20" r="19.75" stroke="#016D5B" stroke-width="0.5" />
            </g>
            <path d="M27.36 26.184H19.84C19.504 26.184 19.128 25.92 19.016 25.6L15.704 16.336C15.232 15.008 15.784 14.6 16.92 15.416L20.04 17.648C20.56 18.008 21.152 17.824 21.376 17.24L22.784 13.488C23.232 12.288 23.976 12.288 24.424 13.488L25.832 17.24C26.056 17.824 26.648 18.008 27.16 17.648L30.088 15.56C31.336 14.664 31.936 15.12 31.424 16.568L28.192 25.616C28.072 25.92 27.696 26.184 27.36 26.184Z" stroke="#016D5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19.2 28.6H28" stroke="#016D5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21.6 22.2H25.6" stroke="#016D5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <defs>
                <filter id="filter0_d_52_21276" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_52_21276" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_52_21276" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}

export default AddInIcon
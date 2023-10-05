import React from 'react'

const MountainBack = ({width = '291', height = '195', ...props}) => {
    return (
        <svg width={width} height={height} {...props} viewBox="0 0 291 195" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M291 34.1549C124.095 -60.7537 -24.9902 58.1318 3.52014 195L218.536 195H280.903C288.505 195 290.802 188.673 291 185.509V34.1549Z" fill="url(#paint0_linear_1_6176)" />
            <defs>
                <linearGradient id="paint0_linear_1_6176" x1="145.5" y1="0" x2="145.5" y2="195" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#018C85" stop-opacity="0.14" />
                    <stop offset="0.94546" stop-color="#017872" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>

    )
}

export default MountainBack
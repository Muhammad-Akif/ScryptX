import React from 'react'

const TickIcon = ({ size = "22", color="white", ...props }) => {
    return (
        <svg width={size} height={size} {...props} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 20.1667C16.0417 20.1667 20.1667 16.0417 20.1667 11C20.1667 5.95837 16.0417 1.83337 11 1.83337C5.95837 1.83337 1.83337 5.95837 1.83337 11C1.83337 16.0417 5.95837 20.1667 11 20.1667Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.10413 11.0001L9.69829 13.5942L14.8958 8.40588" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export default TickIcon
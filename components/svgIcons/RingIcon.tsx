import React from 'react'

const RingIcon = ({size="359", ...props}) => {
    return (
        <svg width={size} height={size} {...props} viewBox="0 0 359 359" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="179.5" cy="179.5" r="163.5" stroke="#016D5B" strokeOpacity="0.1" strokeWidth="32" />
        </svg>

    )
}

export default RingIcon
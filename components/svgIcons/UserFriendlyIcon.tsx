import React from 'react'

const UserFriendlyIcon = ({ size = "22", ...props }) => {
    return (

        <svg width={size} height={size} {...props} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 8C15 11.87 11.87 15 8 15C7.68 15 7.37 14.98 7.07 14.93C3.64 14.48 1 11.55 1 8C1 4.13 4.13 1 8 1C11.55 1 14.48 3.64 14.93 7.07C14.98 7.37 15 7.68 15 8Z" stroke="#016D5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20.9999 13.9999C20.9999 17.8699 17.8699 20.9999 13.9999 20.9999C10.4499 20.9999 7.51995 18.3599 7.06995 14.9299C7.36995 14.9799 7.67995 14.9999 7.99995 14.9999C11.8699 14.9999 14.9999 11.8699 14.9999 7.99995C14.9999 7.67995 14.9799 7.36995 14.9299 7.06995C18.3599 7.51995 20.9999 10.4499 20.9999 13.9999Z" stroke="#016D5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.15 13.12L14.46 14.41" stroke="#016D5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16 11L15 10" stroke="#016D5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11 16L10 15" stroke="#016D5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>


    )
}

export default UserFriendlyIcon

import { SvgIconProps } from '@/typings';
import React from 'react';

const ArrowRight: React.FC<SvgIconProps> = ({ size="24",color="white", ...props }) => (
    <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.43 5.92993L20.5 11.9999L14.43 18.0699" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 12L20.33 12" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default ArrowRight;
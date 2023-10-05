import { SvgIconProps } from '@/typings';
import React from 'react';

const ArrowRight: React.FC<SvgIconProps> = ({ size="24", ...props }) => (
    <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.43 5.92993L20.5 11.9999L14.43 18.0699" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3.5 12L20.33 12" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
);

export default ArrowRight;
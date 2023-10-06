import { SvgIconProps } from '@/typings';
import React from 'react';

const CircleOutline: React.FC<SvgIconProps> = ({ width = '1197', height = '378', ...props }) => (
    <svg width={width} height={height} {...props} viewBox="0 0 1197 378" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="598.5" cy="598.5" r="598" fill="white" stroke="url(#paint0_linear_36_10704)" />
        <circle cx="599" cy="604" r="577" fill="url(#paint1_linear_36_10704)" />
        <defs>
            <linearGradient id="paint0_linear_36_10704" x1="598.5" y1="0" x2="598.5" y2="1197" gradientUnits="userSpaceOnUse">
                <stop stopColor="#017973" stopOpacity="0.8" />
                <stop offset="0.369023" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear_36_10704" x1="599" y1="27" x2="598.518" y2="474.332" gradientUnits="userSpaceOnUse">
                <stop stopColor="#017973" stopOpacity="0.15" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
        </defs>
    </svg>
);

export default CircleOutline;




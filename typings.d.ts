export interface SvgIconProps extends SVGProps<SVGSVGElement> {
    size?: number;
    color?: string;
    className?: string;
    width?: string;
    height?: string;
    rotate?: 'left' | 'up' | 'right' | 'down';
    transition?: boolean;
  }

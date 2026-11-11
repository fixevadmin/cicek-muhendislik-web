import type { JSX } from "react";
import type { SectorIconName, ServiceIconName, TrustIconName } from "../types";

type IconProps = {
  className?: string;
  size?: number;
};

const base = (size: number, className?: string): React.SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className,
});

export function LogoMark({ size = 36, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
      <rect width="64" height="64" rx="14" fill="currentColor" />
      {/* Hexagon frame */}
      <path
        d="M32 12 50 22.5v21L32 54 14 43.5v-21Z"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* Geometric flower — six radial petals */}
      <g stroke="#ffffff" strokeWidth="2" strokeLinecap="round">
        <path d="M32 26v12" />
        <path d="M32 26 22.4 32.5v5" />
        <path d="M32 26 41.6 32.5v5" />
      </g>
      <circle cx="32" cy="26" r="3" fill="#ffffff" />
      {/* Base line */}
      <path d="M20 46h24" stroke="#c9d6e8" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export const SERVICE_ICONS: Record<ServiceIconName, (p: IconProps) => JSX.Element> = {
  consulting: ({ size = 28, className }) => (
    <svg {...base(size, className)}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 9h8M8 13h5" />
    </svg>
  ),
  health: ({ size = 28, className }) => (
    <svg {...base(size, className)}>
      <path d="M3 12h4l2-5 4 10 2-5h6" />
    </svg>
  ),
  training: ({ size = 28, className }) => (
    <svg {...base(size, className)}>
      <path d="M12 3 2 9l10 6 10-6-10-6Z" />
      <path d="M6 11v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
      <path d="M22 9v5" />
    </svg>
  ),
  emergency: ({ size = 28, className }) => (
    <svg {...base(size, className)}>
      <path d="M12 2c1 4-2 5-2 8a4 4 0 0 0 8 0c0-2-1-3-2-4 0 2-1 3-2 3 1-3-1-6-2-7Z" />
      <path d="M12 22s6-4 6-9c0-2-1-4-2-5" opacity="0.4" />
    </svg>
  ),
  risk: ({ size = 28, className }) => (
    <svg {...base(size, className)}>
      <path d="M12 2 3 20h18L12 2Z" />
      <path d="M12 9v6" />
      <circle cx="12" cy="18" r="0.5" fill="currentColor" />
    </svg>
  ),
  engineering: ({ size = 28, className }) => (
    <svg {...base(size, className)}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-2.5 2-2Z" />
    </svg>
  ),
  documents: ({ size = 28, className }) => (
    <svg {...base(size, className)}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8M8 17h6" />
    </svg>
  ),
};

export const SECTOR_ICONS: Record<SectorIconName, (p: IconProps) => JSX.Element> = {
  construction: ({ size = 24, className }) => (
    <svg {...base(size, className)}>
      <path d="M3 21h18" />
      <path d="M5 21V8l5-3v16M11 21V11l5-2v12M16 21V13l5 1v7" />
    </svg>
  ),
  concrete: ({ size = 24, className }) => (
    <svg {...base(size, className)}>
      <path d="M4 8h16l-1 12H5z" />
      <path d="M8 8V5h8v3M8 12h2M14 12h2M9 16h2M13 16h2" />
    </svg>
  ),
  industry: ({ size = 24, className }) => (
    <svg {...base(size, className)}>
      <path d="M3 21V10l5 3V10l5 3V8l5 3v10z" />
      <path d="M3 21h18" />
    </svg>
  ),
  logistics: ({ size = 24, className }) => (
    <svg {...base(size, className)}>
      <rect x="2" y="7" width="12" height="9" rx="1" />
      <path d="M14 10h4l3 3v3h-7z" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  ),
  mining: ({ size = 24, className }) => (
    <svg {...base(size, className)}>
      <path d="M3 20 9 6l3 7 4-9 5 16z" />
      <path d="M8 20l3-7M15 20l-3-7" />
    </svg>
  ),
  service: ({ size = 24, className }) => (
    <svg {...base(size, className)}>
      <path d="M3 9l9-6 9 6v11H3z" />
      <path d="M9 20v-6h6v6" />
    </svg>
  ),
  other: ({ size = 24, className }) => (
    <svg {...base(size, className)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  ),
};

export const TRUST_ICONS: Record<TrustIconName, (p: IconProps) => JSX.Element> = {
  compliance: ({ size = 28, className }) => (
    <svg {...base(size, className)}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  expertise: ({ size = 28, className }) => (
    <svg {...base(size, className)}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-2.5 2-2Z" />
    </svg>
  ),
  confidentiality: ({ size = 28, className }) => (
    <svg {...base(size, className)}>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      <circle cx="12" cy="16" r="1" fill="currentColor" />
    </svg>
  ),
  support: ({ size = 28, className }) => (
    <svg {...base(size, className)}>
      <path d="M4 12a8 8 0 0 1 16 0" />
      <rect x="2" y="12" width="4" height="6" rx="1" />
      <rect x="18" y="12" width="4" height="6" rx="1" />
      <path d="M20 18v1a3 3 0 0 1-3 3h-3" />
    </svg>
  ),
};

export function ArrowRight({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Menu({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function Close({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Mail({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}

export function Phone({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export function MapPin({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function Check({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function FileText({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8M8 17h8M8 9h2" />
    </svg>
  );
}

export function Clock({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function Download({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path d="M12 3v12M7 10l5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

export function GitHub({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.6.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7 1 .7 2v3c0 .3.2.6.7.5A10.2 10.2 0 0 0 22 12.2C22 6.6 17.5 2 12 2Z" />
    </svg>
  );
}

export function Flame({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path d="M12 2c1 4-2 5-2 8a4 4 0 0 0 8 0c0-2-1-3-2-4 0 2-1 3-2 3 1-3-1-6-2-7Z" />
    </svg>
  );
}

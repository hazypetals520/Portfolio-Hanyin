import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const GithubIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const VercelIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2L24 22H0L12 2Z" />
  </svg>
);

export const ReactIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <ellipse cx="12" cy="12" rx="10" ry="4" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

export const JavascriptIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M16 8v8a2 2 0 0 1-2 2h-1" />
    <path d="M9 15c.5.6 1.2 1 2 1 1 0 1.5-.5 1.5-1.2 0-1.6-3.5-.8-3.5-3 0-1 .8-1.8 2-1.8.8 0 1.5.3 2 .8" />
  </svg>
);

export const CssIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <polygon points="4 2 20 2 18 19 12 22 6 19 4 2" />
    <path d="M8 7h8l-.5 5H8.5l.3 3 3.2.9 3.2-.9.3-3" />
  </svg>
);

export const TailwindIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M6 12c.5-2.5 2-4 4.5-4 3.5 0 3.5 4 7 4 2 0 3.5-1 4.5-3-1 2.5-2.5 4-4.5 4-3.5 0-3.5-4-7-4-2 0-3.5 1-4.5 3z" />
    <path d="M2 18c.5-2.5 2-4 4.5-4 3.5 0 3.5 4 7 4 2 0 3.5-1 4.5-3-1 2.5-2.5 4-4.5 4-3.5 0-3.5-4-7-4-2 0-3.5 1-4.5 3z" />
  </svg>
);

export const FigmaIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
  </svg>
);

export const ThreejsIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
    <line x1="12" y1="22" x2="12" y2="12" />
    <line x1="22" y1="8.5" x2="12" y2="12" />
    <line x1="2" y1="8.5" x2="12" y2="12" />
  </svg>
);

export const SpotifyIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 15c2.5-.5 5-.5 8 1" />
    <path d="M7 12c3.5-.8 7-.6 10 1" />
    <path d="M6 9c4.5-1 8.5-.8 12 1.2" />
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const DiscordIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M18 6h0a14.5 14.5 0 0 0-4-1.2 9.5 9.5 0 0 0-.4 1 13.7 13.7 0 0 0-3.2 0 9.5 9.5 0 0 0-.4-1A14.5 14.5 0 0 0 6 6a16.2 16.2 0 0 0-3 12 14.6 14.6 0 0 0 4.8 2.4c.4-.6.8-1.2 1.1-1.8a9.4 9.4 0 0 1-1.8-.9c.2-.1.3-.2.5-.3a10.4 10.4 0 0 0 8.8 0c.2.1.3.2.5.3-.6.4-1.2.7-1.8.9.3.6.7 1.2 1.1 1.8a14.6 14.6 0 0 0 4.8-2.4 16.2 16.2 0 0 0-3-12z" />
    <circle cx="9.5" cy="13.5" r="1.5" fill="currentColor" />
    <circle cx="14.5" cy="13.5" r="1.5" fill="currentColor" />
  </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

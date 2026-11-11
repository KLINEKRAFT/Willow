/* Inline SVG only — no icon dependency. */

type IconProps = { className?: string }

/** Ringed mark with a willow leaf and its trailing stem. */
export function WillowMark({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="24" cy="24" r="22.4" stroke="currentColor" strokeWidth="1.5" opacity="0.72" />
      <path
        d="M33.2 14.4c1.4 7.4-2.1 14.2-8.6 16.6-3.5 1.3-7 .8-8.9-1.1-1.9-1.9-1.6-5 .6-7.5 3.6-4.1 10.4-7 16.9-8Z"
        fill="currentColor"
      />
      <path
        d="M33.2 14.4C27.4 19 21.9 25.7 18.6 34.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function ArrowRight({ className, size = 20 }: IconProps & { size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2.6 10h14.2M11.6 4.8 16.8 10l-5.2 5.2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MenuGlyph({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="24"
      height="10"
      viewBox="0 0 24 10"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 1h24M0 9h24" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function CloseGlyph({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

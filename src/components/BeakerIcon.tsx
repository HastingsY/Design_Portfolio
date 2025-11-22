export function BeakerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Beaker outline */}
      <path
        d="M20 6h24v4h-3v27.5c0 .7.2 1.4.5 2l5.9 11.8C48.3 54.8 46.7 58 43.6 58H20.4c-3.1 0-4.7-3.2-3.8-6.7l5.9-11.8c.3-.6.5-1.3.5-2V10h-3V6z"
        fill="none"
        stroke="#1d4ed8"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Liquid */}
      <path
        d="M19 38c2.5 0 3.5 2 6 2s3.5-2 6-2 3.5 2 6 2 3.5-2 6-2l2 .1-4.8 9.5c-.4.8-1.2 1.4-2.1 1.4H22.9c-.9 0-1.7-.5-2.1-1.4L16 38.1 19 38z"
        fill="#38bdf8"
        opacity="0.7"
      />
      {/* Bubbles */}
      <circle cx="26" cy="32" r="1.5" fill="#38bdf8" />
      <circle cx="32" cy="30" r="1.5" fill="#38bdf8" />
      <circle cx="38" cy="33" r="1.5" fill="#38bdf8" />
    </svg>
  );
}

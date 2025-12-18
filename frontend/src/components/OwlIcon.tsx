interface OwlIconProps {
  className?: string;
  size?: number;
}

export function OwlIcon({ className = "", size = 24 }: OwlIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Owl body */}
      <path
        d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
      {/* Ear tufts */}
      <path
        d="M7 4L6 7M17 4L18 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Eyes */}
      <circle cx="9" cy="11" r="2.5" fill="currentColor" fillOpacity="0.9" />
      <circle cx="15" cy="11" r="2.5" fill="currentColor" fillOpacity="0.9" />
      <circle cx="9" cy="11" r="1" fill="white" />
      <circle cx="15" cy="11" r="1" fill="white" />
      {/* Beak */}
      <path
        d="M12 13L11 15L12 16L13 15L12 13Z"
        fill="currentColor"
        fillOpacity="0.6"
      />
      {/* Wings */}
      <path
        d="M5 12C5 12 6 14 7 15M19 12C19 12 18 14 17 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function OwlLogoIcon({ className = "", size = 40 }: OwlIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Graduation cap background */}
      <rect width="40" height="40" rx="8" fill="currentColor" fillOpacity="0.1" />
      
      {/* Owl head */}
      <ellipse cx="20" cy="22" rx="10" ry="11" fill="currentColor" fillOpacity="0.3" />
      
      {/* Ear tufts - scholarly look */}
      <path
        d="M13 12L12 16M27 12L28 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Eyes - wise and friendly */}
      <circle cx="16" cy="20" r="3" fill="currentColor" />
      <circle cx="24" cy="20" r="3" fill="currentColor" />
      <circle cx="16" cy="20" r="1.2" fill="white" />
      <circle cx="24" cy="20" r="1.2" fill="white" />
      
      {/* Beak */}
      <path
        d="M20 22L19 25L20 26L21 25L20 22Z"
        fill="currentColor"
        fillOpacity="0.8"
      />
      
      {/* Graduation cap */}
      <path
        d="M20 10L14 13L20 16L26 13L20 10Z"
        fill="currentColor"
        fillOpacity="0.6"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M26 13V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Tech circuit pattern subtle overlay */}
      <circle cx="10" cy="28" r="1" fill="currentColor" fillOpacity="0.2" />
      <circle cx="30" cy="28" r="1" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

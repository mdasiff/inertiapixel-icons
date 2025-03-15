import React from "react";

interface HeartProps extends React.SVGProps<SVGSVGElement> {}

const HeartIcon: React.FC<HeartProps> = () => {
  return (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // {...props}
    >
      <circle cx="19.8256" cy="20.7754" r="19.7993" fill="white" />
      <path
        d="M15.167 12.6226C12.5944 12.6226 10.5083 14.6487 10.5083 17.1484C10.5083 19.1662 11.3236 23.9554 19.3486 28.7966C19.4923 28.8825 19.6573 28.9279 19.8256 28.9279C19.9939 28.9279 20.1589 28.8825 20.3027 28.7966C28.3277 23.9554 29.1429 19.1662 29.1429 17.1484C29.1429 14.6487 27.0568 12.6226 24.4843 12.6226C21.9118 12.6226 19.8256 15.3655 19.8256 15.3655C19.8256 15.3655 17.7395 12.6226 15.167 12.6226Z"
        stroke="black"
        strokeWidth="1.747"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HeartIcon;

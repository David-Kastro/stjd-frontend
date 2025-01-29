import React from "react";

interface Props {
  color?: string;
  className?: string;
}

function Arrow({ color, className }: Props) {
  return (
    <svg
      width="9"
      height="14"
      className={className}
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_16_120)">
        <path
          d="M0.0614243 7.00021C0.0614243 6.77011 0.157914 6.54004 0.350504 6.36461L6.41384 0.844188C6.79954 0.493018 7.4249 0.493018 7.81045 0.844188C8.19599 1.19522 8.19599 1.76447 7.81045 2.11567L2.44527 7.00021L7.81026 11.8848C8.19581 12.2359 8.19581 12.8051 7.81026 13.1561C7.42471 13.5075 6.79936 13.5075 6.41365 13.1561L0.350305 7.6358C0.157695 7.46028 0.0614243 7.23022 0.0614243 7.0002V7.00021Z"
          fill={color || "#000"}
        />
      </g>
      <defs>
        <clipPath id="clip0_16_120">
          <rect
            width="12.8388"
            height="8.03819"
            fill="white"
            transform="matrix(0 1 -1 0 8.09961 0.580811)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Arrow;

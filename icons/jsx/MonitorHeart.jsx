import * as React from "react";

function SvgMonitorHeart(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M15.11 12.45L14 10.24l-3.11 6.21c-.16.34-.51.55-.89.55s-.73-.21-.89-.55L7.38 13H2v7h20v-7h-6c-.38 0-.73-.21-.89-.55z" />
      <path d="M22 4H2v7h6c.38 0 .73.21.89.55L10 13.76l3.11-6.21a1 1 0 011.79 0L16.62 11H22V4z" />
    </svg>
  );
}

export default SvgMonitorHeart;
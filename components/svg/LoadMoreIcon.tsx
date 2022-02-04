import * as React from 'react';

function LoadMoreIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.373 10.67C2.411 10.67 0 8.275 0 5.334 0 2.393 2.41 0 5.373 0c2.962 0 5.373 2.393 5.373 5.335 0 2.94-2.41 5.334-5.373 5.334zm0-8.848c-1.951 0-3.538 1.576-3.538 3.513 0 1.936 1.587 3.512 3.538 3.512 1.95 0 3.539-1.576 3.539-3.512 0-1.937-1.588-3.513-3.539-3.513zm5.442 7.258a6.656 6.656 0 01-1.79 1.74L12.23 14 14 12.242 10.816 9.08z"
        fill="#6A6969"
      />
    </svg>
  );
}

export default LoadMoreIcon;

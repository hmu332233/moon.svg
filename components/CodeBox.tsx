import React from 'react';

type Props = {
  contents: string;
};

function CodeBox({ contents }: Props) {
  const handleClick = async () => {
    await navigator.clipboard.writeText(contents);
    // TODO: 다른 UI로 대체
    alert('Copied!');
  };

  return (
    <div
      className="mockup-code bg-base-300 text-base-content cursor-pointer before:hidden my-4 relative group p-6 break-all"
      onClick={handleClick}
    >
      <code>{contents}</code>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 invisible group-hover:visible bg-gradient-to-l via-base-300 from-base-300 p-4">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default CodeBox;

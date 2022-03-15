import React from 'react';

type Props = {
  contents: string;
};

function CodeBox({ contents }: Props) {
  const handleClick = () => {
    navigator.clipboard.writeText(contents);
    // TODO: 다른 UI로 대체
    alert('Copied!');
  };

  return (
    <div
      className="mockup-code bg-base-300 text-base-content cursor-pointer before:hidden my-4"
      onClick={handleClick}
    >
      <pre>
        <code>{contents}</code>
      </pre>
    </div>
  );
}

export default CodeBox;

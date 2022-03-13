import React from 'react';

type Props = {
  contents: string,
};

function CodeBox({ contents }: Props) {
  return (
    <div className="mockup-code bg-base-300 text-base-content before:hidden my-4">
      <pre>
        <code>
          {contents}
        </code>
      </pre>
    </div>
  );
}

export default CodeBox;
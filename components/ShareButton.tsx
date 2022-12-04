import React from 'react';

type Props = {
  title: string;
  url: string;
};

function ShareButton({ title, url }: Props) {
  const handleClick = async () => {
    if (navigator.share) {
      await navigator.share({
        title,
        url,
      });
    } else {
      // share api 지원하지 않을시 clipboard 복사로 대체
      await navigator.clipboard.writeText(url);
      alert('Copied link to clipboard.\nShare the link!');
    }
  };

  return (
    <button className="btn btn-wide" onClick={handleClick}>
      Share
    </button>
  );
}

export default ShareButton;

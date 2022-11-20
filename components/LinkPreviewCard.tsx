import React from 'react';

type Props = {
  image: string;
  title: string;
  description: string;
};

function LinkPreviewCard({ image, title, description }: Props) {
  return (
    <div className="card w-96 border bg-white">
      <figure className="border-b p-4 h-40">
        <img className="h-full" src={image} alt="preview" />
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default LinkPreviewCard;

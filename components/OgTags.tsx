import Head from 'next/head';
import React from 'react';

type Props = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

function OgTags({
  title = 'Moon.svg',
  description = 'SVG showing the phase of real-time moon',
  image,
  url = 'https://moon-svg.minung.dev',
}: Props) {
  const dateString = new Date().toISOString().split('T')[0];
  return (
    <Head>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={
          image || `https://moon-svg.minung.dev/moon.png?date=${dateString}`
        }
      />
      <meta property="og:image:width" content="250" />
      <meta property="og:image:height" content="250" />
    </Head>
  );
}

export default OgTags;

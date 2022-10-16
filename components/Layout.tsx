import React from 'react';

import Head from 'next/head';
import Header from 'components/Header';
import Footer from 'components/Footer';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  const dateString = new Date().toISOString().split('T')[0];
  return (
    <>
      <Head>
        <title>Moon.svg</title>
        <meta
          name="description"
          content="SVG showing the Moon Phase for today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moon-svg.minung.dev/" />
        <meta property="og:title" content="Moon.svg" />
        <meta
          property="og:image"
          content={`https://moon-svg.minung.dev/moon.png?date=${dateString}`}
        />
        <meta property="og:site_name" content="Moon.svg" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="container grow flex flex-col items-center gap-y-8">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;

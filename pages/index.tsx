import { useState } from 'react';
import Head from 'next/head';

import Header from 'components/Header';
import Footer from 'components/Footer';
import CopyModal from 'components/CopyModal';
import Hits from 'components/Hits';

import useDebounce from 'hooks/useDebounce';
import { objectToQueryString } from 'utils/string';

function Home() {
  const [dateString, setDateString] = useState('');
  const [size, setSize] = useState('');
  const queryString = useDebounce(objectToQueryString({ date: dateString, size }), 300);
  
  const handleDateStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget: { value }} = e;
    setDateString(value);
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget: { value }} = e;
    setSize(value);
  };

  const svgUrl = `/moon.svg${queryString}`;

  return (
    <>
      <Head>
        <title>Moon.svg</title>
        <meta name="description" content="SVG showing the phase of real-time moon" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="container grow flex flex-col items-center gap-y-8">
          <p>SVG showing the phase of real-time moon</p>
          <Hits />
          <a>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={svgUrl} alt="moon.svg" />
          </a>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" className="input input-bordered w-full max-w-xs" value={dateString} onChange={handleDateStringChange} />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Size</span>
            </label>
            <input type="number" placeholder="100 (default)" className="input input-bordered w-full max-w-xs" value={size} onChange={handleSizeChange} />
          </div>
          <CopyModal.Button id="copy-modal" />
        </main>
        <Footer />
      </div>
      <CopyModal.Modal id="copy-modal" text={`https://moon-phase.vercel.app${svgUrl}`} />
    </>
  )
};

export default Home;

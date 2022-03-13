import { useState } from 'react';
import Head from 'next/head';

import Header from 'components/Header';
import Footer from 'components/Footer';

import useDebounce from 'hooks/useDebounce';
import { objectToQueryString } from 'utils/string';

function Home() {
  const [moonUrl, setMoonUrl] = useState('/moon.svg');
  const [dateString, setDateString] = useState('');
  const [size, setSize] = useState('');
  const queryString = useDebounce(objectToQueryString({ date: dateString, size }), 500);
  
  const handleDateStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget: { value }} = e;
    setDateString(value);
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget: { value }} = e;
    setSize(value);
  };

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
          <a>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/moon.svg${queryString}`} alt="moon.svg" />
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
        </main>
        <Footer />
      </div>
    </>
    
  )
};

export default Home

import { useState } from 'react';
import Head from 'next/head';

import Header from 'components/Header';
import Footer from 'components/Footer';

function Home() {
  const [moonUrl, setMoonUrl] = useState('/moon.svg');
  const [dateString, setDateString] = useState('');


  const handleDateStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget: { value }} = e;
    setDateString(value);
  };

  return (
    <>
      <Head>
        <title>Moon.svg</title>
        <meta name="description" content="SVG showing the phase of real-time moon" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="container grow flex flex-col items-center">
          <p>SVG showing the phase of real-time moon</p>
          <a>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/moon.svg?date=${dateString}`} alt="moon.svg" />
          </a>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={dateString} onChange={handleDateStringChange} />
          </div>
        </main>
        <Footer />
      </div>
    </>
    
  )
};

export default Home

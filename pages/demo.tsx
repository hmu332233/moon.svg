import { useState } from 'react';
import Head from 'next/head';

import Layout from 'components/Layout';
import CopyModal from 'components/CopyModal';
import Hits from 'components/Hits';

import useDebounce from 'hooks/useDebounce';
import useToggle from 'hooks/useToggle';

import { objectToQueryString } from 'utils/string';

function Home() {
  const [isLiveMode, toggleIsLiveMode] = useToggle(true);
  const [dateString, setDateString] = useState('');
  const [size, setSize] = useState('');
  const queryString = useDebounce(
    objectToQueryString({ date: isLiveMode ? '' : dateString, size }),
    300,
  );

  const handleDateStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setDateString(value);
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setSize(value);
  };

  const svgUrl = `/moon.svg${queryString}`;

  return (
    <>
      <Head>
        <title>Moon.svg</title>
        <meta
          name="description"
          content="SVG showing the phase of real-time moon"
        />
      </Head>
      <Layout>
        <p>SVG showing the phase of real-time moon</p>
        <Hits />
        <a>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={svgUrl} alt="moon.svg" />
        </a>
        <div className="form-control w-full max-w-xs">
          <label className="label cursor-pointer" onClick={toggleIsLiveMode}>
            <span className="label-text">Live Mode</span>
            <input type="checkbox" className="toggle" checked={isLiveMode} />
          </label>
          {!isLiveMode && (
            <>
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                className="input input-bordered w-full max-w-xs"
                value={dateString}
                onChange={handleDateStringChange}
              />
            </>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Size</span>
          </label>
          <input
            type="number"
            placeholder="100 (default)"
            className="input input-bordered w-full max-w-xs"
            value={size}
            onChange={handleSizeChange}
          />
        </div>
        <CopyModal.Button id="copy-modal" />
      </Layout>
      <CopyModal.Modal
        id="copy-modal"
        text={`https://moon-svg.minung.dev${svgUrl}`}
      />
    </>
  );
}

export default Home;

import { useState } from 'react';
import Head from 'next/head';

import Layout from 'components/Layout';
import CopyModal from 'components/CopyModal';
import Hits from 'components/Hits';

import useDebounce from 'hooks/useDebounce';
import useToggle from 'hooks/useToggle';

import { objectToQueryString } from 'utils/string';
import LiveToggle from 'components/LiveToggle';

function Home() {
  const [isLiveMode, toggleIsLiveMode] = useToggle(true);
  const [dateString, setDateString] = useState('');
  const [size, setSize] = useState('');
  const [theme, setTheme] = useState('basic');

  const queryString = useDebounce(
    objectToQueryString({
      date: isLiveMode ? '' : dateString,
      size,
      theme,
    }),
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

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = e;

    setTheme(value);
  };

  const svgUrl = `/moon.svg${queryString}`;

  return (
    <>
      <Head>
        <title>Moon.svg</title>
        <meta
          name="description"
          content="SVG showing the Moon Phase for today."
        />
      </Head>
      <Layout>
        <p>SVG showing the Moon Phase for today.</p>
        <Hits />
        <a>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={svgUrl} alt="moon.svg" />
        </a>
        <LiveToggle value={isLiveMode} onClick={toggleIsLiveMode} />
        {!isLiveMode && (
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              className="input input-bordered w-full max-w-xs"
              value={dateString}
              onChange={handleDateStringChange}
            />
          </div>
        )}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Theme</span>
          </label>
          <select
            id="theme"
            name="theme"
            className="input input-bordered w-full max-w-xs"
            value={theme}
            onChange={handleThemeChange}
          >
            <option value="basic">Minung</option>
            <option value="ray">Ray</option>
          </select>
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

import { useState } from 'react';

import Layout from 'components/Layout';
import CopyModal from 'components/CopyModal';
import Hits from 'components/Hits';

import useDebounce from 'hooks/useDebounce';
import useToggle from 'hooks/useToggle';

import { objectToQueryString } from 'utils/string';
import LiveToggle from 'components/LiveToggle';
import Adfit from 'components/Adfit';
import OgTags from 'components/OgTags';

function Home() {
  const [isLiveMode, toggleIsLiveMode] = useToggle(true);
  const [dateString, setDateString] = useState('');
  const [size, setSize] = useState('');
  const [theme, setTheme] = useState('basic');
  const [rotate, setRotate] = useState('0');

  const queryString = useDebounce(
    objectToQueryString({
      date: isLiveMode ? '' : dateString,
      size,
      theme,
      rotate,
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

  const handleRotateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setRotate(value);
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = e;

    setTheme(value);
  };

  const svgUrl = `/moon.svg${queryString}`;

  return (
    <Layout>
      <OgTags />
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
          className="select input-bordered w-full max-w-xs"
          value={theme}
          onChange={handleThemeChange}
        >
          <option value="basic">Basic</option>
          <option value="ray">Ray</option>
        </select>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Rotate</span>
        </label>
        <input
          type="range"
          min="0"
          max="360"
          value={rotate}
          onChange={handleRotateChange}
          className="range"
        />
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
      <CopyModal.Modal
        id="copy-modal"
        text={`https://moon-svg.minung.dev${svgUrl}`}
      />
      <Adfit />
    </Layout>
  );
}

export default Home;

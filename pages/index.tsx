import { useState } from 'react';

import Layout from 'components/Layout';
import CopyModal from 'components/CopyModal';
import Hits from 'components/Hits';

import Adfit from 'components/Adfit';
import OgTags from 'components/OgTags';

import MoonForm from 'components/MoonForm';
import { objectToQueryString } from 'utils/string';

import FormProvider from 'components/FormProvider';

function Home() {
  const [queryString, setQueryString] = useState('');

  const svgUrl = `/moon.svg${queryString}`;

  const handleFormChange = ({
    liveMode,
    date,
    size,
    theme,
    rotate,
  }: FormValues) => {
    const queryString = objectToQueryString({
      date: liveMode ? '' : date,
      size,
      theme,
      rotate,
    });
    setQueryString(queryString);
  };

  return (
    <FormProvider>
      <Layout>
        <OgTags />
        <p>SVG showing the Moon Phase for today.</p>
        <Hits />
        <a>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={svgUrl} alt="moon.svg" />
        </a>
        <MoonForm onChange={handleFormChange} />
        <CopyModal.Button id="copy-modal" />
        <CopyModal.Modal
          id="copy-modal"
          text={`https://moon-svg.minung.dev${svgUrl}`}
        />
        <Adfit />
      </Layout>
    </FormProvider>
  );
}

export default Home;

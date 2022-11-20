import { useState } from 'react';

import Layout from 'components/Layout';
import CopyModal from 'components/CopyModal';
import Hits from 'components/Hits';

import useDebounce from 'hooks/useDebounce';

import { objectToQueryString } from 'utils/string';

import Adfit from 'components/Adfit';
import OgTags from 'components/OgTags';

import { FormProvider, useForm } from 'react-hook-form';
import ControlledLiveToggle from 'components/ControlledLiveToggle';
import MoonForm from 'components/MoonForm';

function Home() {
  const [queryString, setQueryString] = useState('');

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
      <MoonForm onChange={setQueryString} />
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

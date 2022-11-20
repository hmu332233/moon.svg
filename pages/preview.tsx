import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';

import { objectToQueryString } from 'utils/string';

import Layout from 'components/Layout';
import OgTags from 'components/OgTags';
import MoonForm from 'components/MoonForm';
import LinkPreviewCard from 'components/LinkPreviewCard';

type Props = {
  query: FormValues;
};
function Preview({ query }: Props) {
  const [queryString, setQueryString] = useState(objectToQueryString(query));

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

  const defaultValues: FormValues = {
    date: query.date,
    liveMode: !query.date,
    rotate: query.rotate,
    size: query.size,
    theme: query.theme,
  };

  useEffect(() => {
    window.history.replaceState(
      window.history.state,
      '',
      window.location.pathname + queryString,
    );
  }, [svgUrl]);

  return (
    <Layout>
      <OgTags
        url={`https://moon-svg.minung.dev/preview${queryString}`}
        image={`https://moon-svg.minung.dev/moon.png${queryString}`}
      />
      <p>Share Moon&apos;s Phases with your friends!</p>
      <LinkPreviewCard
        image={`https://moon-svg.minung.dev/moon.png${queryString}`}
        title="Moon.svg"
        description="테스트"
      />
      <MoonForm defaultValues={defaultValues} onChange={handleFormChange} />
    </Layout>
  );
}

export default Preview;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      query: context.query,
    },
  };
};

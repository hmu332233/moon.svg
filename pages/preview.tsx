import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';

import { objectToQueryString } from 'utils/string';

import Layout from 'components/Layout';
import OgTags from 'components/OgTags';
import MoonForm from 'components/MoonForm';
import LinkPreviewCard from 'components/LinkPreviewCard';

const PREVIEW_FORM_KEYS: FormKeys[] = ['theme', 'title', 'description'];

type Props = {
  query: FormValues;
};
function Preview({ query }: Props) {
  const [data, setData] = useState({
    ...query,
    title: query.title || '기본값',
    description: query.description || '기본값',
  });

  const queryString = objectToQueryString({
    ...data,
    date: data.liveMode ? '' : data.date,
  });

  const svgUrl = `/moon.svg${queryString}`;

  const handleFormChange = ({
    liveMode,
    date,
    theme,
    title,
    description,
  }: FormValues) => {
    setData({
      date: liveMode ? '' : date,
      theme,
      title: title || '',
      description: description || '',
    });
  };

  const defaultValues: FormValues = {
    date: data.date,
    liveMode: !data.date,
    rotate: data.rotate,
    size: data.size,
    theme: data.theme,
    title: data.title,
    description: data.description,
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
        title={data.title}
        description={data.description}
      />
      <MoonForm
        keys={PREVIEW_FORM_KEYS}
        defaultValues={defaultValues}
        onChange={handleFormChange}
      />
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

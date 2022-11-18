import { GetServerSideProps } from 'next';
import Head from 'next/head';

import Layout from 'components/Layout';
import { objectToQueryString } from 'utils/string';

type Props = {
  query: Object;
};
function Preview({ query }: Props) {
  const queryString = objectToQueryString(query);

  return (
    <>
      <Head>
        <title>Moon.svg</title>
        <meta
          name="description"
          content="SVG showing the phase of real-time moon"
        />
        <meta property="og:title" content="Moon Today!" />
        <meta
          property="og:description"
          content="SVG showing the phase of real-time moon"
        />
        <meta
          property="og:url"
          content={`https://moon-svg.minung.dev/preview${queryString}`}
        />
        <meta
          property="og:image"
          content={`https://moon-svg.minung.dev/moon.png${queryString}`}
        />
      </Head>
      <Layout>WELCOME OG IMAGE PAGE!</Layout>
    </>
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

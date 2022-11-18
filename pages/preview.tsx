import { GetServerSideProps } from 'next';
import Head from 'next/head';

import Layout from 'components/Layout';
import { objectToQueryString } from 'utils/string';
import OgTags from 'components/OgTags';

type Props = {
  query: Object;
};
function Preview({ query }: Props) {
  const queryString = objectToQueryString(query);

  return (
    <Layout>
      <OgTags
        url={`https://moon-svg.minung.dev/preview${queryString}`}
        image={`https://moon-svg.minung.dev/moon.png${queryString}`}
      />
      WELCOME OG IMAGE PAGE!
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

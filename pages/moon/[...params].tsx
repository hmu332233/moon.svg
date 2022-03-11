import Head from 'next/head'
import type { GetServerSideProps } from "next";

type Props = {
  params: string[],
};

function Preview ({ params }: Props) {
  const [day, month, year] = params;
  const date = `${year}-${month}-${day}`;
  return (
    <Head>
      <title>Moon Phase ({date})</title>
      <meta property="og:image" content={`/api/moon?date=${date}`} />
    </Head>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      params: params?.params,
    }
  };
};

export default Preview;
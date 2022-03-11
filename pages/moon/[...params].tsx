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
      <meta property="og:image" content={`https://moon-phase.vercel.app/api/moon?date=${date}`} />
      <meta name="twitter:card" content="트위터 카드 타입(요약정보, 사진, 비디오)" /> 
      <meta name="twitter:title" content="콘텐츠 제목" /> 
      <meta name="twitter:description" content="웹페이지 설명" /> 
      <meta name="twitter:image" content={`https://moon-phase.vercel.app/api/moon?date=${date}`} /> 
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
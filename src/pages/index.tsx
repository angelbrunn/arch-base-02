import Head from 'next/head';
// import dynamic from 'next/dynamic';
import Home from './home';

// const Home = dynamic<{}>(() => import('./home').then(mod => mod.default), {
//   ssr: false,
// });

const Index = () => {
  return (
    <>
      <Head>
        <title>Architecture Base Next/TS</title>
      </Head>
      <Home />
    </>
  );
};

export default Index;

import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

type Props = {
  children: JSX.Element[] | JSX.Element;
};

function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container grow flex flex-col items-center gap-y-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

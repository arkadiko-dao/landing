import React from 'react';
import Head from "next/head";
import Image from 'next/image';

/**
 * Layout component
 */
const Header = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="We bring DeFi to Bitcoin. Arkadiko is an open source protocol that mints a stablecoin which generates a yield in bitcoin." />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:site" content="@ArkadikoFinance" />
        <meta name="twitter:creator" content="@ArkadikoFinance" key="twhandle" />
        <meta name="twitter:title" content="Arkadiko Finance - Loans that repay themselves" />

        {/* Open Graph */}
        <meta property="og:image" content="https://www.arkadiko.finance/logo_full.png" key="ogimage" />
        <meta property="og:title" content="Arkadiko Finance" />
        <meta property="og:site_name" content="Arkadiko Finance" />
        <meta property="og:url" content="https://arkadiko.finance" />
        <meta property="og:description" content="We bring DeFi to Bitcoin. Arkadiko is an open source protocol that mints a stablecoin which generates a yield in bitcoin." />
        <meta property="og:type" content="website" />

        <title>Arkadiko Finance — Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" as="font" />
      </Head>

      <div className="flex flex-col min-h-screen font-sans">
        <div className="fixed w-screen h-screen overflow-hidden" style={{zIndex: "-1"}}>
          <Image
            alt=""
            src="/waves.svg"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        {children}
      </div>
    </>
  )
}

export default Header;

import Image from 'next/image'
import Head from 'next/head'
import Header from '../components/header'
import Hero from '../components/hero'
import Features from '../components/features'
import Developers from '../components/developers'
import Faq from '../components/faq'
import Community from '../components/community'
import Whitepaper from '../components/whitepaper'
import Footer from '../components/footer'
import HeroSocial from '../components/social'

const myLoader = ({ src, width, quality }) => {
  return `${src}`
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
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

        <title>Arkadiko Finance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="fixed w-screen h-screen overflow-hidden" style={{zIndex: "-1"}}>
          <Image
            loader={myLoader}
            alt=""
            src="/waves.svg"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <Header />

        <div style={{height: 'calc(100vh - 80px)'}}>  {/* Subtracts header's height */}
          <Hero />

          <HeroSocial />
        </div>
      </div>

      <main>
        <Features />

        <Developers />

        <Community />

        <Faq />

        <Whitepaper />
      </main>

      <Footer />
    </div>
  )
}

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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="" key="twhandle" />

        {/* Open Graph */}
        <meta property="og:url" content="" key="ogurl" />
        <meta property="og:image" content="" key="ogimage" />
        <meta property="og:site_name" content="" key="ogsitename" />
        <meta property="og:title" content="" key="ogtitle" />
        <meta property="og:description" content="" key="ogdesc" />

        <title>Arkadiko</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="fixed w-screen h-screen overflow-hidden" style={{zIndex: "-1"}}>
          <Image
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

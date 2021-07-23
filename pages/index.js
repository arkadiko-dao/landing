import Image from 'next/image'
import Head from 'next/head'
import Header from '../components/header'
import Hero from '../components/hero'
import Features from '../components/features'
import Developers from '../components/developers'
import Faq from '../components/faq'
import Community from '../components/community'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Head>
        <title>Arkadiko</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
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

        <Hero />
      </div>

      <main>
        <Features />

        <Developers />

        <Community />

        <Faq />
      </main>

      <Footer />
    </div>
  )
}

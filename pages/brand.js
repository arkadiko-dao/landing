import Head from 'next/head'
import Image from 'next/image'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

export default function Home() {
  return (
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

        <title>Arkadiko Finance — Brand</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" as="font" />
      </Head>

      <div>
        <Disclosure as="nav" className="bg-gray-800 bg-opacity-75">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex justify-between h-20">
                  <div className="flex justify-between flex-1">
                    <a className="flex-shrink-0 flex items-center" href="/">
                      <img className="hidden lg:block h-8 w-auto sm:h-8" src="/logo.svg" width="42" height="32" alt="Arkadiko" />
                      <span className="font-headings sm:ml-4 inline-block align-middle text-white text-xl">Arkadiko</span>
                    </a>
                    
                    <div className="hidden lg:ml-6 lg:flex lg:space-x-8 lg:items-center">
                      <div className="sm:flex sm:space-x-8 sm:h-full">
                        <div className="self-center">
                          <a
                            href="https://github.com/arkadiko-dao/landing/blob/master/ArkadikoBrandKit.zip"
                            className="relative inline-flex w-full justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span>Download kit</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2 flex items-center lg:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 ">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="lg:hidden bg-white">
                <div>
                  <div className="p-3 border-t border-gray-200">
                    <a
                      href="https://github.com/arkadiko-dao/landing/blob/master/ArkadikoBrandKit.zip"
                      className="relative inline-flex w-full justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span>Download kit</span>
                    </a>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="bg-gray-800 bg-opacity-75" style={{height: 'calc(100vh - 80px)'}}>
          <div className="flex items-center justify-center h-full">
            <img className="w-2/3 md:w-1/2" src="/logo-full.svg" alt="Arkadiko" />
          </div>
        </div>
      </div>

      <main>
        <section className="bg-white bg-opacity-90 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 sm:py-48">
            <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-16">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-headings tracking-tight text-gray-900 sm:text-6xl">
                  Logo
                </h2>
                <p className="mt-8 text-xl text-gray-600">The Arkadiko Bridge is one of the oldest arch bridges still in use today. It is a symbol of longevity and trust, both core values to what we want to stand for with Arkadiko.</p>
                <p className="mt-12">
                  <a href="https://github.com/arkadiko-dao/landing/blob/master/ArkadikoBrandKit.zip" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 focus:focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Download logo</a>
                </p>
              </div>
              <div className="mt-10 space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 sm:gap-x-8 lg:mt-0 lg:col-span-2">
                <div className="bg-indigo-600 px-16 py-28 flex items-center justify-center">
                  <img src="/logo-full.svg" alt="Arkadiko" />
                </div>
                <div className="bg-gray-800 px-16 py-28 flex items-center justify-center">
                  <img src="/logo-full.svg" alt="Arkadiko" />
                </div>
                <div className="bg-gray-800 px-16 py-28 flex items-center justify-center">
                  <svg viewBox="0 0 60 46" height="136" width="176" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M19.03 1.54A2.68 2.68 0 0121.46 0h11.48c.95 0 1.82.49 2.3 1.29L59.62 41.6c.5.82.5 1.84.03 2.66a2.69 2.69 0 01-2.33 1.34h-12a2.7 2.7 0 01-1.9-.77 31.32 31.32 0 00-16.15-8.17c-6.8-1.09-14.81.4-22.7 8.17a2.71 2.71 0 01-3.42.3 2.62 2.62 0 01-.9-3.28L19.02 1.54zm7.1 3.75L46.86 40.3h5.74L31.42 5.3h-5.29zm10.89 28.89L21.75 8.37 9.55 34.55a29.17 29.17 0 0118.58-3.1c3.2.5 6.2 1.5 8.89 2.73z" fill="#FFF"/></svg>
                </div>
                <div className="bg-indigo-600 px-16 py-28 flex items-center justify-center">
                  <svg viewBox="0 0 60 46" height="136" width="176" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M19.03 1.54A2.68 2.68 0 0121.46 0h11.48c.95 0 1.82.49 2.3 1.29L59.62 41.6c.5.82.5 1.84.03 2.66a2.69 2.69 0 01-2.33 1.34h-12a2.7 2.7 0 01-1.9-.77 31.32 31.32 0 00-16.15-8.17c-6.8-1.09-14.81.4-22.7 8.17a2.71 2.71 0 01-3.42.3 2.62 2.62 0 01-.9-3.28L19.02 1.54zm7.1 3.75L46.86 40.3h5.74L31.42 5.3h-5.29zm10.89 28.89L21.75 8.37 9.55 34.55a29.17 29.17 0 0118.58-3.1c3.2.5 6.2 1.5 8.89 2.73z" fill="#FFF"/></svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white bg-opacity-90 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 sm:py-48">
            <div className="relative lg:grid lg:grid-cols-2 lg:gap-x-16">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-headings tracking-tight text-gray-900 sm:text-6xl">
                  Typography
                </h2>
                <p className="mt-8 text-xl text-gray-600"><span className="font-bold">Kollektif Bold</span> for headings, <br/><span className="font-bold">Montserrat Regular and Bold</span> for text.</p>
                <p className="mt-12">
                  <a href="https://github.com/arkadiko-dao/landing/blob/master/ArkadikoBrandKit.zip" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 focus:focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Download fonts</a>
                </p>
              </div>
            </div>
            <div className="relative lg:grid lg:grid-cols-2 lg:gap-x-16 mt-24">
              <div className="mt-10 space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 sm:gap-x-8 lg:mt-0 lg:col-span-2">
                <div className="bg-indigo-600 px-16 py-28">
                  <h3 className="text-white text-4xl font-headings">Kollektif</h3>
                  <h4 className="text-white text-2xl mb-16 font-headings">by <a href="http://bnftype.com/" className="underline">brave new fonts</a></h4>
                  
                  <Image
                    alt="Kollektif specimen"
                    src="/kollektif.png"
                    layout="fill"
                    layout="responsive"
                    width={613}
                    height={600}
                  />
                </div>
                <div className="bg-black px-16 py-28">
                  <h3 className="text-white text-4xl font-sans">Montserrat</h3>
                  <h4 className="text-white text-2xl mb-16 font-sans">by <a href="https://fonts.google.com/specimen/Montserrat" className="underline">Julieta Ulanovsky</a></h4>

                  <Image
                    alt="Montserrat specimen"
                    src="/montserrat.png"
                    layout="fill"
                    layout="responsive"
                    width={613}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="relative bg-gray-800 py-16 sm:py-48">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-10">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 sm:pr-16">
              <div className="flex items-center">
                <a aria-label="Home" href="/"><img className="h-8 w-auto sm:h-10" src="/logo.svg" alt="" width="42" height="32" /></a><a className="text-xl font-headings leading-6 text-white sm:truncate ml-4" href="/">Arkadiko</a>
              </div>
              <div className="text-sm text-gray-200 mt-4">We bring DeFi to Bitcoin. Arkadiko is an open source and non-custodial liquidity protocol for minting stablecoins, earning interest on deposits and borrowing assets on Stacks.</div>
              <div className="flex space-x-6 md:order-2 mt-6">
                <a href="https://arkadikofinance.medium.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 transition duration-300 hover:text-white">
                  <span className="sr-only">Medium</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" clipRule="evenodd">
                    <path
                      d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"
                    ></path>
                  </svg>
                </a>
                <a href="https://twitter.com/ArkadikoFinance" target="_blank" rel="noopener noreferrer" className="text-gray-300 transition duration-300 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    ></path>
                  </svg>
                </a>
                <a href="https://github.com/arkadiko-dao/arkadiko" target="_blank" rel="noopener noreferrer" className="text-gray-300 transition duration-300 hover:text-white">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="https://discord.gg/7UB6JjjCNV" target="_blank" rel="noopener noreferrer" className="text-gray-300 transition duration-300 hover:text-white">
                  <span className="sr-only">Discord</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.93 5.34a16.89 16.89 0 00-4.07-1.23c-.03 0-.05.01-.07.03-.17.3-.37.7-.5 1.01a15.72 15.72 0 00-4.57 0c-.14-.32-.34-.7-.52-1a.06.06 0 00-.06-.04 16.84 16.84 0 00-4.1 1.25A15.95 15.95 0 002.1 16.42a16.8 16.8 0 005 2.45c.02 0 .05 0 .06-.02.39-.51.73-1.05 1.02-1.61a.06.06 0 00-.03-.09c-.54-.2-1.06-.44-1.56-.72a.06.06 0 010-.1l.3-.24a.06.06 0 01.07 0 12.18 12.18 0 0010.05 0h.06l.32.24c.03.03.03.08-.01.1-.5.28-1.02.52-1.56.72a.06.06 0 00-.04.09c.3.56.65 1.1 1.03 1.6.01.03.04.04.07.03a16.75 16.75 0 005.02-2.49 15.85 15.85 0 00-2.98-11.04zM8.68 14.18c-.98 0-1.8-.88-1.8-1.95 0-1.08.8-1.95 1.8-1.95 1.01 0 1.82.88 1.8 1.95 0 1.07-.8 1.95-1.8 1.95zm6.65 0c-.99 0-1.8-.88-1.8-1.95 0-1.08.8-1.95 1.8-1.95s1.81.88 1.8 1.95c0 1.07-.8 1.95-1.8 1.95z"/>
                  </svg>
                </a>
                <span className="cursor-not-allowed">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="pointer-events-none text-gray-400">
                    <span className="sr-only">Discourse</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6.45 18.2l.23-.06-.23.05z" /><path fillRule="evenodd" clipRule="evenodd" d="M3 11.81a9.6 9.6 0 019.48-9.62c5.14 0 9.31 4.48 9.31 9.79 0 5.31-4.17 9.79-9.32 9.79H3v-9.96zm3.46 6.35l.68-3.53a6.12 6.12 0 011.13-8.01 5.65 5.65 0 017.78.5c.42.32.79.7 1.1 1.13l.01.01a6.1 6.1 0 01.64 7.9 5.62 5.62 0 01-7.54 1.57l-3.81.46v-.03z" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

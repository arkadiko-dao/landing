import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `${src}`
}

export default function Community() {
  return (
    <section id="community" className="relative py-16 bg-gray-100 bg-opacity-80 sm:py-48">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <Image
          loader={myLoader}
          alt=""
          src="/community.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-25"
        />
      </div>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-gray-900 font-headings sm:text-4xl">
            Connect with thousands of people loving Arkadiko today. Our community matters.
          </h2>
        </div>
      </div>
      <div className="pb-12 mt-10 sm:pb-16">
        <div className="relative">
          <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                <a href="https://discord.gg/7UB6JjjCNV" target="_blank" rel="noopener noreferrer" className="flex flex-col p-6 text-center border-b border-gray-100 rounded-t-lg hover:bg-indigo-50 sm:rounded-r-none sm:rounded-l-lg sm:border-0 sm:border-r">
                  <p className="order-2 mt-4 text-sm leading-6 text-indigo-500">Discord</p>
                  <div className="order-1 text-5xl font-extrabold text-indigo-600">
                    <svg className="w-12 h-12 mx-auto" viewBox="0 0 81 63" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)"><path d="M68.57 5.61A66.6 66.6 0 0052.08.48a.25.25 0 00-.26.12 46.8 46.8 0 00-2.06 4.24 61.42 61.42 0 00-18.51 0A42.92 42.92 0 0029.16.6a.26.26 0 00-.26-.12A66.41 66.41 0 0012.4 5.6a.24.24 0 00-.1.1C1.8 21.45-1.09 36.81.32 51.98c.01.08.05.15.11.2a67.07 67.07 0 0020.23 10.26c.1.03.21 0 .28-.1a48.24 48.24 0 004.14-6.75c.07-.14 0-.3-.14-.36-2.2-.84-4.3-1.86-6.32-3.02a.26.26 0 01-.03-.44c.43-.32.85-.65 1.26-.98a.25.25 0 01.26-.04c13.26 6.08 27.6 6.08 40.7 0a.25.25 0 01.27.03c.4.34.83.67 1.26 1 .15.1.14.33-.02.43A41.44 41.44 0 0156 55.24a.26.26 0 00-.14.36A54.17 54.17 0 0060 62.35c.07.1.18.13.29.1a66.84 66.84 0 0020.26-10.27c.06-.04.1-.1.1-.18 1.69-17.55-2.83-32.78-11.97-46.3a.2.2 0 00-.11-.09zm-41.5 37.14c-4 0-7.28-3.67-7.28-8.2 0-4.51 3.22-8.19 7.28-8.19 4.08 0 7.34 3.71 7.28 8.2 0 4.52-3.23 8.2-7.28 8.2zm26.91 0c-3.99 0-7.28-3.67-7.28-8.2 0-4.51 3.23-8.19 7.28-8.19 4.09 0 7.35 3.71 7.28 8.2 0 4.52-3.2 8.2-7.28 8.2z" fill="#5865F2"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h81v63H0z"/></clipPath></defs></svg>
                    <p className="mt-3 text-sm text-gray-800 sm:mt-4">
                      Chat with other community members and with the team.
                    </p>
                  </div>
                </a>
                <a href="https://twitter.com/ArkadikoFinance/" target="_blank" rel="noopener noreferrer" className="flex flex-col p-6 text-center border-t border-b border-gray-100 hover:bg-indigo-50 sm:border-0 sm:border-l sm:border-r">
                  <p className="order-2 mt-4 text-sm leading-6 text-indigo-500">Twitter</p>
                  <div className="order-1 text-5xl font-extrabold text-indigo-600">
                    <svg className="w-12 h-12 mx-auto" viewBox="0 0 77 63" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M68.91 15.84c.05.67.05 1.34.05 2.02 0 20.6-15.77 44.37-44.61 44.37v-.01a44.56 44.56 0 01-24.04-7 31.6 31.6 0 0023.2-6.46A15.69 15.69 0 018.88 37.93c2.35.45 4.77.36 7.08-.27A15.62 15.62 0 013.37 22.38v-.2a15.65 15.65 0 007.12 1.95A15.57 15.57 0 015.63 3.31a44.58 44.58 0 0032.32 16.3 15.55 15.55 0 014.53-14.91 15.76 15.76 0 0122.19.68 31.57 31.57 0 009.95-3.79 15.67 15.67 0 01-6.89 8.63c3.11-.37 6.15-1.2 9-2.46a31.76 31.76 0 01-7.82 8.08z" fill="#1D9BF0"/></svg>
                    <p className="mt-3 text-sm text-gray-800 sm:mt-4">
                      Keep up with the latest Arkadiko news.
                    </p>
                  </div>
                </a>
                <a href="https://t.me/arkadikofin" target="_blank" rel="noopener noreferrer" className="flex flex-col p-6 text-center border-t border-gray-100 rounded-b-lg hover:bg-indigo-50 sm:rounded-r-lg sm:rounded-l-none sm:border-0 sm:border-l">
                  <p className="order-2 mt-4 text-sm leading-6 text-indigo-500">Telegram</p>
                  <div className="order-1 text-5xl font-extrabold text-indigo-600">
                    <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                      <defs>
                        <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="99.2583404%">
                          <stop offset="0%" stop-color="#2AABEE"/>
                          <stop offset="100%" stop-color="#229ED9"/>
                        </linearGradient>
                      </defs>
                      <g fill="none" fill-rule="evenodd">
                        <circle cx="500" cy="500" r="500" fill="url(#a)"/>
                        <path fill="#FFF" d="M226.328419 494.722069c145.760154-63.505384 242.95642-105.37202 291.588797-125.599908 138.855319-57.754731 167.708265-67.787346 186.514211-68.118629 4.136194-.072862 13.384412.952211 19.375019 5.813175 5.058351 4.104503 6.450106 9.649103 7.116105 13.540622.666 3.891519 1.495328 12.756499.836075 19.683337-7.524619 79.06182-40.083522 270.924008-56.647644 359.474601-7.008902 37.469075-20.809646 50.032265-34.170364 51.261739-29.035934 2.671932-51.084503-19.188971-79.207225-37.623769-44.006507-28.846821-68.867384-46.804056-111.583319-74.953224-49.365654-32.531233-17.363955-50.410965 10.769388-79.63145 7.362629-7.64714 135.295618-124.012084 137.771765-134.568208.309683-1.32022.597085-6.241374-2.326487-8.839924-2.923572-2.59855-7.238511-1.709947-10.352292-1.003233-4.41369 1.001745-74.714655 47.468076-210.902895 139.398991-19.954695 13.702434-38.029038 20.378719-54.223029 20.028857-17.852576-.385695-52.19377-10.094118-77.722918-18.392638-31.312539-10.178472-56.199122-15.559904-54.032059-32.846099 1.12874-9.00372 13.527697-18.2118 37.196872-27.62424Z"/>
                      </g>
                    </svg>
                    <p className="mt-3 text-sm text-gray-800 sm:mt-4">
                      Help shape the future of the protocol.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

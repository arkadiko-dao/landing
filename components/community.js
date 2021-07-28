import Image from 'next/image'

export default function Community() {
  return (
    <section id="community" className="bg-gray-100 bg-opacity-80 relative py-16 sm:py-48">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <Image
          alt=""
          src="/community.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-25"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-headings text-gray-900 sm:text-4xl">
            Connect with thousands of people loving Arkadiko today. Our community matters.
          </h2>
        </div>
      </div>
      <div className="mt-10 pb-12 sm:pb-16">
        <div className="relative">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white border-2 border-indigo-300 shadow-lg sm:grid sm:grid-cols-3">
                <a href="https://discord.gg/7UB6JjjCNV" target="_blank" className="flex flex-col hover:bg-indigo-50 rounded-t-lg sm:rounded-r-none sm:rounded-l-lg border-b border-indigo-300 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-4 text-sm leading-6" style={{color: '#5865F2'}}>Discord</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                    <svg className="mx-auto w-12 h-12" viewBox="0 0 81 63" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)"><path d="M68.57 5.61A66.6 66.6 0 0052.08.48a.25.25 0 00-.26.12 46.8 46.8 0 00-2.06 4.24 61.42 61.42 0 00-18.51 0A42.92 42.92 0 0029.16.6a.26.26 0 00-.26-.12A66.41 66.41 0 0012.4 5.6a.24.24 0 00-.1.1C1.8 21.45-1.09 36.81.32 51.98c.01.08.05.15.11.2a67.07 67.07 0 0020.23 10.26c.1.03.21 0 .28-.1a48.24 48.24 0 004.14-6.75c.07-.14 0-.3-.14-.36-2.2-.84-4.3-1.86-6.32-3.02a.26.26 0 01-.03-.44c.43-.32.85-.65 1.26-.98a.25.25 0 01.26-.04c13.26 6.08 27.6 6.08 40.7 0a.25.25 0 01.27.03c.4.34.83.67 1.26 1 .15.1.14.33-.02.43A41.44 41.44 0 0156 55.24a.26.26 0 00-.14.36A54.17 54.17 0 0060 62.35c.07.1.18.13.29.1a66.84 66.84 0 0020.26-10.27c.06-.04.1-.1.1-.18 1.69-17.55-2.83-32.78-11.97-46.3a.2.2 0 00-.11-.09zm-41.5 37.14c-4 0-7.28-3.67-7.28-8.2 0-4.51 3.22-8.19 7.28-8.19 4.08 0 7.34 3.71 7.28 8.2 0 4.52-3.23 8.2-7.28 8.2zm26.91 0c-3.99 0-7.28-3.67-7.28-8.2 0-4.51 3.23-8.19 7.28-8.19 4.09 0 7.35 3.71 7.28 8.2 0 4.52-3.2 8.2-7.28 8.2z" fill="#5865F2"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h81v63H0z"/></clipPath></defs></svg>
                    <p className="mt-3 text-sm sm:mt-4" style={{color: '#5865F2'}}>
                      Chat with other community members and with the team.
                    </p>
                  </dd>
                </a>
                <a href="https://twitter.com/ArkadikoFinance/" target="_blank" className="flex flex-col hover:bg-indigo-50 border-t border-b border-indigo-300 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-4 text-sm leading-6" style={{color: '#1D9BF0'}}>Twitter</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                    <svg className="mx-auto w-12 h-12" viewBox="0 0 77 63" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M68.91 15.84c.05.67.05 1.34.05 2.02 0 20.6-15.77 44.37-44.61 44.37v-.01a44.56 44.56 0 01-24.04-7 31.6 31.6 0 0023.2-6.46A15.69 15.69 0 018.88 37.93c2.35.45 4.77.36 7.08-.27A15.62 15.62 0 013.37 22.38v-.2a15.65 15.65 0 007.12 1.95A15.57 15.57 0 015.63 3.31a44.58 44.58 0 0032.32 16.3 15.55 15.55 0 014.53-14.91 15.76 15.76 0 0122.19.68 31.57 31.57 0 009.95-3.79 15.67 15.67 0 01-6.89 8.63c3.11-.37 6.15-1.2 9-2.46a31.76 31.76 0 01-7.82 8.08z" fill="#1D9BF0"/></svg>
                    <p className="mt-3 text-sm sm:mt-4" style={{color: '#1D9BF0'}}>
                      Keep up with the latest Arkadiko news.
                    </p>
                  </dd>
                </a>
                <a href="#" target="_blank" className="cursor-not-allowed flex flex-col hover:bg-indigo-50 rounded-b-lg sm:rounded-r-lg sm:rounded-l-none border-t border-indigo-300 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-4 text-sm leading-6 text-black">Discourse</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                    <svg className="mx-auto w-12 h-12" viewBox="0 0 69 71" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34.41.67C15.73.67 0 15.97 0 34.83V70.2l34.4-.03c18.69 0 33.84-15.88 33.84-34.74C68.24 16.56 53.08.67 34.41.67z" fill="#231F20"/><path d="M34.75 13.9c-3.64 0-7.2.95-10.36 2.76a21.07 21.07 0 00-7.66 7.58 21.33 21.33 0 00-.42 20.91l-3.8 12.33 13.63-3.11A20.8 20.8 0 0051.36 48a21.27 21.27 0 003.8-17.84 21.26 21.26 0 00-11.36-14.2 20.8 20.8 0 00-9.03-2.07h-.02z" fill="#FFF9AE"/><path d="M51.39 22.18a21.3 21.3 0 01-.24 25.99 20.78 20.78 0 01-25 6.17L12.5 57.48l13.88-1.65a20.8 20.8 0 0027.36-5.56 21.31 21.31 0 00-2.36-28.09z" fill="#00AEEF"/><path d="M47.52 18.28a21.33 21.33 0 012.45 25.87 21 21 0 01-10.62 8.58 20.78 20.78 0 01-13.6.19L12.5 57.48l13.63-3.11c4.69 2.14 10 2.46 14.9.9a21 21 0 0011.72-9.33 21.34 21.34 0 00-5.24-27.66z" fill="#00A94F"/><path d="M17.56 45.62a21.36 21.36 0 01-.73-14.13 21.16 21.16 0 018.24-11.44 20.82 20.82 0 0126.33 2.13 20.81 20.81 0 00-28.1-4.93A21.17 21.17 0 0014.4 29.8a21.35 21.35 0 001.92 15.34l-3.8 12.33 5.05-11.86z" fill="#F15D22"/><path d="M16.3 45.15a21.35 21.35 0 014.84-26.19 20.86 20.86 0 0126.38-.68 20.84 20.84 0 00-28.4-1.88 21.33 21.33 0 00-4.11 28.43l-2.5 12.65 3.8-12.33z" fill="#E31B23"/></svg>
                    <p className="mt-3 text-sm sm:mt-4 text-black">
                      Help shape the future of the protocol.
                    </p>
                  </dd>
                </a>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

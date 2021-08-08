export default function Hero() {
  return (
    <section id="hero" className="hero lg:relative bg-gray-800 relative py-8 sm:py-12 md:py-16 lg:py-32 bg-opacity-75">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="lg:w-1/2 xl:pr-16">
          <h1 className="font-headings text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl max-w-md mx-auto md:max-w-3xl">
            <span className="block xl:inline">What if loans could repay themselves?</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-200 sm:text-xl md:mt-5 md:max-w-3xl">
            Earn 7% on your loan. No monthly payments.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a href="https://forms.gle/3HSt7dNj92qEmXzf8" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 focus:focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Participate
              </a>
            </div>
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3">
              <a href="https://docs.arkadiko.finance/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base text-white rounded-md bg-transparent hover:bg-transparent hover:border hover:border-gray-50 md:py-4 md:text-lg md:px-10 focus:focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Docs
              </a>
            </div>
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3">
              <a href="#faq" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base text-white rounded-md bg-transparent hover:bg-transparent hover:border hover:border-gray-50 md:py-4 md:text-lg md:px-10 focus:focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full mt-8">
        <div className="absolute bottom-0 right-1/2 -mr-3 lg:m-0 lg:right-8 w-1/3 h-1/3 opacity-10 rounded-lg" style={{backgroundImage: 'url(/pattern-triangles.svg)'}} />
        <div className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0 w-1/3 h-1/3 opacity-10 rounded-lg" style={{backgroundImage: 'url(/pattern-triangles.svg)'}} />
        <div className="absolute top-0 right-28 bottom-64 left-32 shadow-lg">
          <video
            className="rounded-lg pointer-events-none"
            controls 
            muted 
            autoPlay={"autoplay"} 
            preload="auto" 
            loop>
              <source src="/hero-animation.mp4" type="video/mp4" />
              <source src="/hero-animation.webm" type="video/webm" />
              Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      </div>
    </section>
  );
}

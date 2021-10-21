export default function Hero() {
  return (
    <section id="hero" className="relative py-8 bg-gray-800 bg-opacity-75 hero lg:relative sm:py-12 md:py-16 lg:py-32">
      <div className="px-4 mx-auto max-w-7xl lg:px-8">
        <div className="lg:w-1/2 xl:pr-16">
          <h1 className="max-w-md mx-auto text-4xl font-extrabold tracking-tight text-white font-headings sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl md:max-w-3xl">
            <span className="block xl:inline">What if loans could repay themselves?</span>
          </h1>
          <p className="max-w-md mx-auto mt-3 text-lg text-gray-200 sm:text-xl md:mt-5 md:max-w-3xl">
            Get rewarded to borrow, no need for monthly payments.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a href="https://app.arkadiko.finance" rel="noopener noreferrer" className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 focus:focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Launch App
              </a>
            </div>
            <div className="hidden mt-3 rounded-md sm:mt-0 sm:ml-3 md:block">
              <a href="https://docs.arkadiko.finance/" className="flex items-center justify-center w-full px-8 py-3 text-base text-white bg-transparent border border-transparent rounded-md hover:bg-transparent hover:border hover:border-gray-50 md:py-4 md:text-lg md:px-10 focus:focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Docs
              </a>
            </div>
            <div className="hidden mt-3 rounded-md sm:mt-0 sm:ml-3 md:block">
              <a href="#faq" className="flex items-center justify-center w-full px-8 py-3 text-base text-white bg-transparent border border-transparent rounded-md hover:bg-transparent hover:border hover:border-gray-50 md:py-4 md:text-lg md:px-10 focus:focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-64 mt-8 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <div className="absolute bottom-0 w-1/3 -mr-3 rounded-lg right-1/2 lg:m-0 lg:right-8 h-1/3 opacity-10" style={{backgroundImage: 'url(/pattern-triangles.svg)'}} />
        <div className="absolute w-1/3 -mr-3 rounded-lg top-8 right-1/2 lg:m-0 lg:left-0 h-1/3 opacity-10" style={{backgroundImage: 'url(/pattern-triangles.svg)'}} />
        <div className="absolute top-0 md:left-28 lg:left-0 xl:left-12 md:right-28 lg:right-8 xl:right-32">
          <video
            className="rounded-lg shadow-lg pointer-events-none"
            muted 
            autoPlay={"autoplay"} 
            preload="auto" 
            loop>
              <source src="/hero-animation.webm" type="video/webm" />
              <source src="/hero-animation.mp4" type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      </div>
    </section>
  );
}

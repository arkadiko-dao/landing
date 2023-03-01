export default function Footer() {
  return (
    <footer id="footer" className="relative py-16 bg-gray-800 bg-opacity-75 sm:py-48">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-5">
          <div className="col-span-2 sm:col-span-1 md:col-span-2 sm:pr-16">
            <div className="flex items-center">
              <a aria-label="Home" href="/"><img className="w-auto h-8 sm:h-10" src="/logo.svg" alt="" width="42" height="32" /></a><a className="ml-4 text-xl leading-6 text-white font-headings sm:truncate" href="/">Arkadiko</a>
            </div>
            <div className="mt-4 text-sm text-gray-200">We bring DeFi to Bitcoin. Arkadiko is an open source and non-custodial liquidity protocol for minting stablecoins, earning interest on deposits and borrowing assets on Stacks.</div>
            <div className="flex mt-6 space-x-6 md:order-2">
              <a href="https://arkadikofinance.medium.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 transition duration-300 hover:text-white">
                <span className="sr-only">Medium</span>
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" clipRule="evenodd">
                  <path
                    d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"
                  ></path>
                </svg>
              </a>
              <a href="https://twitter.com/ArkadikoFinance" target="_blank" rel="noopener noreferrer" className="text-gray-300 transition duration-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  ></path>
                </svg>
              </a>
              <a href="https://github.com/arkadiko-dao/arkadiko" target="_blank" rel="noopener noreferrer" className="text-gray-300 transition duration-300 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="https://discord.gg/7UB6JjjCNV" target="_blank" rel="noopener noreferrer" className="text-gray-300 transition duration-300 hover:text-white">
                <span className="sr-only">Discord</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.93 5.34a16.89 16.89 0 00-4.07-1.23c-.03 0-.05.01-.07.03-.17.3-.37.7-.5 1.01a15.72 15.72 0 00-4.57 0c-.14-.32-.34-.7-.52-1a.06.06 0 00-.06-.04 16.84 16.84 0 00-4.1 1.25A15.95 15.95 0 002.1 16.42a16.8 16.8 0 005 2.45c.02 0 .05 0 .06-.02.39-.51.73-1.05 1.02-1.61a.06.06 0 00-.03-.09c-.54-.2-1.06-.44-1.56-.72a.06.06 0 010-.1l.3-.24a.06.06 0 01.07 0 12.18 12.18 0 0010.05 0h.06l.32.24c.03.03.03.08-.01.1-.5.28-1.02.52-1.56.72a.06.06 0 00-.04.09c.3.56.65 1.1 1.03 1.6.01.03.04.04.07.03a16.75 16.75 0 005.02-2.49 15.85 15.85 0 00-2.98-11.04zM8.68 14.18c-.98 0-1.8-.88-1.8-1.95 0-1.08.8-1.95 1.8-1.95 1.01 0 1.82.88 1.8 1.95 0 1.07-.8 1.95-1.8 1.95zm6.65 0c-.99 0-1.8-.88-1.8-1.95 0-1.08.8-1.95 1.8-1.95s1.81.88 1.8 1.95c0 1.07-.8 1.95-1.8 1.95z"/>
                </svg>
              </a>
              <a href="https://t.me/arkadikofin" target="_blank" rel="noopener noreferrer" className="text-gray-300 transition duration-300 hover:text-white">
                <span className="sr-only">Telegram</span>
                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                  <path d="M226.328419 494.722069c145.760154-63.505384 242.95642-105.37202 291.588797-125.599908 138.855319-57.754731 167.708265-67.787346 186.514211-68.118629 4.136194-.072862 13.384412.952211 19.375019 5.813175 5.058351 4.104503 6.450106 9.649103 7.116105 13.540622.666 3.891519 1.495328 12.756499.836075 19.683337-7.524619 79.06182-40.083522 270.924008-56.647644 359.474601-7.008902 37.469075-20.809646 50.032265-34.170364 51.261739-29.035934 2.671932-51.084503-19.188971-79.207225-37.623769-44.006507-28.846821-68.867384-46.804056-111.583319-74.953224-49.365654-32.531233-17.363955-50.410965 10.769388-79.63145 7.362629-7.64714 135.295618-124.012084 137.771765-134.568208.309683-1.32022.597085-6.241374-2.326487-8.839924-2.923572-2.59855-7.238511-1.709947-10.352292-1.003233-4.41369 1.001745-74.714655 47.468076-210.902895 139.398991-19.954695 13.702434-38.029038 20.378719-54.223029 20.028857-17.852576-.385695-52.19377-10.094118-77.722918-18.392638-31.312539-10.178472-56.199122-15.559904-54.032059-32.846099 1.12874-9.00372 13.527697-18.2118 37.196872-27.62424Z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase font-headings">Protocol</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#whitepaper" className="text-base text-gray-300 transition duration-300 hover:text-white">Whitepaper</a></li>
              <li><a href="https://docs.arkadiko.finance/" target="_blank" rel="noopener noreferrer" className="text-base text-gray-300 transition duration-300 hover:text-white">Documentation</a></li>
              <li><a href="https://github.com/arkadiko-dao/arkadiko/blob/master/SECURITY.md" target="_blank" rel="noopener noreferrer" className="text-base text-gray-300 transition duration-300 hover:text-white">Bug Bounty</a></li>
              <li><a href="/brand" className="text-base text-gray-300 transition duration-300 hover:text-white">Brand</a></li>
              <li><a href="/press-review" className="text-base text-gray-300 transition duration-300 hover:text-white">Press Review</a></li>
              <li><a href="/roadmap" className="text-base text-gray-300 transition duration-300 hover:text-white">Press Review</a></li>
              <li><a href="/arkadiko-EULA.pdf" className="text-base text-gray-300 transition duration-300 hover:text-white">EULA</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase font-headings">Features</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#features" className="text-base text-gray-300 transition duration-300 hover:text-white">Swap</a></li>
              <li><a href="#features" className="text-base text-gray-300 transition duration-300 hover:text-white">Staking</a></li>
              <li><a href="#features" className="text-base text-gray-300 transition duration-300 hover:text-white">Governance</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase font-headings">Support</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="https://twitter.com/ArkadikoFinance" target="_blank" rel="noopener noreferrer" className="text-base text-gray-300 transition duration-300 hover:text-white">Twitter</a></li>
              <li><a href="https://discord.gg/7UB6JjjCNV" target="_blank" rel="noopener noreferrer" className="text-base text-gray-300 transition duration-300 hover:text-white">Discord</a></li>
              <li><a href="https://t.me/arkadikofin" target="_blank" rel="noopener noreferrer" className="text-base text-gray-300 transition duration-300 hover:text-white">Telegram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

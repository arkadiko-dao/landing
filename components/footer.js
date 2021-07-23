export default function Footer() {
  return (
    <footer id="footer" className="relative bg-gray-800 bg-opacity-75 py-16 sm:py-48">
      <div className="max-w-7xl mx-auto lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 sm:col-span-1 md:col-span-2 sm:pr-16">
            <div className="flex items-center">
              <a aria-label="Home" href="/"><img className="h-8 w-auto sm:h-10" src="./logo.svg" alt="" /></a><a className="text-xl font-headings leading-6 text-white sm:truncate ml-4" href="/">Arkadiko</a>
            </div>
            <div className="text-sm text-gray-200 mt-4">We bring DeFi to Bitcoin. Arkadiko is an open source and non-custodial liquidity protocol for minting stablecoins, earning interest on deposits and borrowing assets on Stacks.</div>
            <div className="flex space-x-6 md:order-2 mt-6">
              <a href="https://arkadikofinance.medium.com/" className="text-gray-300 hover:text-white">
                <span className="sr-only">Medium</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" clip-rule="evenodd">
                  <path
                    d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"
                  ></path>
                </svg>
              </a>
              <a href="https://twitter.com/ArkadikoFinance" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  ></path>
                </svg>
              </a>
              <a href="https://github.com/arkadiko-dao/arkadiko" className="text-gray-300 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="https://discord.gg/7UB6JjjCNV" className="text-gray-300 hover:text-white">
                <span className="sr-only">Discord</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.93 5.34a16.89 16.89 0 00-4.07-1.23c-.03 0-.05.01-.07.03-.17.3-.37.7-.5 1.01a15.72 15.72 0 00-4.57 0c-.14-.32-.34-.7-.52-1a.06.06 0 00-.06-.04 16.84 16.84 0 00-4.1 1.25A15.95 15.95 0 002.1 16.42a16.8 16.8 0 005 2.45c.02 0 .05 0 .06-.02.39-.51.73-1.05 1.02-1.61a.06.06 0 00-.03-.09c-.54-.2-1.06-.44-1.56-.72a.06.06 0 010-.1l.3-.24a.06.06 0 01.07 0 12.18 12.18 0 0010.05 0h.06l.32.24c.03.03.03.08-.01.1-.5.28-1.02.52-1.56.72a.06.06 0 00-.04.09c.3.56.65 1.1 1.03 1.6.01.03.04.04.07.03a16.75 16.75 0 005.02-2.49 15.85 15.85 0 00-2.98-11.04zM8.68 14.18c-.98 0-1.8-.88-1.8-1.95 0-1.08.8-1.95 1.8-1.95 1.01 0 1.82.88 1.8 1.95 0 1.07-.8 1.95-1.8 1.95zm6.65 0c-.99 0-1.8-.88-1.8-1.95 0-1.08.8-1.95 1.8-1.95s1.81.88 1.8 1.95c0 1.07-.8 1.95-1.8 1.95z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase font-headings">Protocol</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="" className="text-base text-gray-300 hover:text-white">Whitepaper</a></li>
              <li><a href="https://docs.arkadiko.finance/" className="text-base text-gray-300 hover:text-white">Documentation</a></li>
              <li><a href="https://github.com/arkadiko-dao/arkadiko/blob/master/SECURITY.md" className="text-base text-gray-300 hover:text-white">Bug Bounty</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase font-headings">Features</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="https://arkadiko.finance/swap" className="text-base text-gray-300 hover:text-white">Swap</a></li>
              <li><a href="https://arkadiko.finance/stake" className="text-base text-gray-300 hover:text-white">Staking</a></li>
              <li><a href="https://arkadiko.finance/governance" className="text-base text-gray-300 hover:text-white">Governance</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

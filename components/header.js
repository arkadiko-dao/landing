import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ExternalLinkIcon } from '@heroicons/react/solid'

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-gray-800 bg-opacity-75">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex justify-between flex-1">
                <a className="flex-shrink-0 flex items-center" href="/">
                  <img className="hidden lg:block h-8 w-auto sm:h-8" src="/logo.svg" alt="Arkadiko" />
                  <span className="font-headings sm:ml-4 inline-block align-middle text-white text-xl">Arkadiko</span>
                </a>
                
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8 lg:items-center">
                  <div className="sm:flex sm:space-x-8 sm:h-full">
                    <a className="border-transparent text-gray-50 hover:border-gray-100 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" href="#" target="_blank" rel="noopener noreferrer">
                      Whitepaper
                    </a>
                    
                    <a className="border-transparent text-gray-50 hover:border-gray-100 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" href="https://docs.arkadiko.finance/" target="_blank" rel="noopener noreferrer">
                      Docs
                      <ExternalLinkIcon className="block h-3 w-3 ml-2" aria-hidden="true" />
                    </a>
                  
                    <a className="border-transparent text-gray-50 hover:border-gray-100 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" href="https://github.com/arkadiko-dao/arkadiko/blob/master/SECURITY.md" target="_blank" rel="noopener noreferrer">
                      Security
                      <ExternalLinkIcon className="block h-3 w-3 ml-2" aria-hidden="true" />
                    </a>

                    <div className="self-center">
                      <button
                        type="button"
                        className="relative inline-flex w-full justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span>Launch app</span>
                      </button>
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
              <div className="pt-2 pb-3 space-y-1">
                <a className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" href="" target="_blank" rel="noopener noreferrer">
                  Whitepaper
                </a>

                <a className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" href="https://docs.arkadiko.finance/" target="_blank" rel="noopener noreferrer">
                  Docs
                </a>
              
                <a className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" href="https://github.com/arkadiko-dao/arkadiko/blob/master/SECURITY.md" target="_blank" rel="noopener noreferrer">
                  Security
                </a>
              </div>
              <div className="p-3 border-t border-gray-200">
                <button
                  type="button"
                  className="relative inline-flex w-full justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span>Open app</span>
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

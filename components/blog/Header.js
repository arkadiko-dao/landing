import React from 'react';
import Link from "next/link";

const Header = ({ blogHome }) => {
  return (
    <header>
      <div className="bg-black bg-opacity-80">
        <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
          <div className="py-16 space-y-2 md:space-y-5">
            <div className="flex items-center">
              <Link
                href={'/blog'}
                as={'/blog'}
              >
                <a className="flex items-center">
                  <img className="w-64" src="/logo-full.svg" alt="Arkadiko" />
                  <span className="mt-5 ml-4 text-2xl tracking-widest text-indigo-500 uppercase font-headings">Blog</span>
                  <h1 className="sr-only">{blogHome.data.headline}</h1>
                </a>
              </Link>
            </div>
            <p className="text-lg text-gray-100">{blogHome.data.description}</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;

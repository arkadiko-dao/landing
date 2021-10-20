import React from "react";
import Head from "next/head";
import Image from 'next/image';
import PostDate from '../../components/blog/home/PostList/PostDate';
import { RichText } from "prismic-reactjs";
import { Client, queryRepeatableDocuments } from "../../prismic-configuration";
import { BackButton, SliceZone } from "../../components/blog/post";

const Post = ({ blogHome, post }) => {

  if (post && post.data) {
    const hasTitle = RichText.asText(post.data.title).length !== 0;
    const title = hasTitle ? RichText.asText(post.data.title) : "Untitled";

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

          <title>Arkadiko Finance — Blog — {title}</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preload" as="font" />
        </Head>

        <main>
          <div className="bg-black bg-opacity-80">
            <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
              <div className="py-16 space-y-2 md:space-y-5">
                <div className="flex items-center">
                  <img className="w-64" src="/logo-full.svg" alt="Arkadiko" />
                  <span className="mt-5 ml-4 text-2xl tracking-widest text-indigo-500 uppercase font-headings">Blog</span>
                  <h1 className="sr-only">{blogHome.data.headline}</h1>
                </div>
                <p className="text-lg text-gray-100">{blogHome.data.description}</p>
              </div>
            </div>
          </div>

          <div className="bg-white">
            <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
              <article className="xl:divide-y xl:divide-gray-200">
                <header className="pt-10 xl:pb-10">
                  <div className="space-y-1 text-center">
                    <dl className="space-y-10">
                      <div className="mb-4">
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500"><time dateTime=""><PostDate date={post.data.date} /></time></dd>
                      </div>
                    </dl>
                    <div>
                      <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl md:text-5xl md:leading-[3.5rem]">
                        {title}
                      </h1>
                    </div>
                  </div>
                </header>
                <div className="pb-16 divide-y divide-gray-200 xl:divide-y-0 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:pb-20" style={{ gridTemplateRows: 'auto 1fr'}}>
                  <div className="divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2">
                    <div className="pt-10 pb-8 max-w-none">
                      <div className="prose max-w-none">
                        <SliceZone sliceZone={post.data.body} />
                      </div>
                    </div>
                  </div>
                  <footer className="text-sm font-medium divide-y divide-gray-200 xl:col-start-1 xl:row-start-2">
                    <div className="pt-10">
                      <BackButton />
                    </div>
                  </footer>
                </div>
              </article>
            </div>
          </div>

        </main>
      </div>
    );
  }

  return null;
};

export async function getStaticProps({ params }) {
  const blogHome = await Client().getSingle("blog_home") || {}

  const post = await Client().getByUID("post", params.uid) || {}
  return {
    props: {
      blogHome,
      post
    }
  }
}


export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'post')
  return {
    paths: documents.map(doc => `/blog/${doc.uid}`),
    fallback: true,
  }
}

export default Post;

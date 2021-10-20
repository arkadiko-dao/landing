import React from "react";
import Layout from "../../components/blog/Layout";
import Header from "../../components/blog/Header";
import Prismic from '@prismicio/client';
import { Client } from "../../prismic-configuration";
import { PostList } from "../../components/blog/home";

const Home = ({ blogHome, posts }) => {
  return (
    <>
      <Layout>
        <Header blogHome={blogHome} />

        <section>
          <div className="min-h-screen bg-white">
            <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
              <PostList posts={posts} />
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
};

export async function getStaticProps() {

  const blogHome = await Client().getSingle("blog_home") || {}

  const posts = await Client().query(Prismic.Predicates.at("document.type", "post"), { orderings: "[my.post.date desc]"})

  return {
    props: {
      blogHome,
      posts: posts ? posts.results : [],
    }
  }
}

export default Home;

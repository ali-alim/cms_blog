// import type { NextPage } from 'next'
import Head from 'next/head'
import { PostWidget, PostCard, Categories } from '../components'
import { getPosts } from '../services'
import {FeaturedPosts} from '../sections/index';

const Home = ({ posts }) => {
  return (
    <div className="container mx-auto mb-8 px-10">
      {/* <FeaturedPosts /> */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

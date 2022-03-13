import React from 'react'
import {Header, FeauturedPostCard} from './';

const Layout = ({ children}) => {
  return (
    
    <>
    
    <Header />
    {/* {posts.map((post, index) => (
      <FeauturedPostCard key={index} post={post.node} />
    ))} */}
    
    {children}
    </>
  )
}

export default Layout

import moment from 'moment'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      )
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result))
    }
  }, [slug])

  console.log(relatedPosts)

  return (
    <div className="rounded-lg bg-white p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="mb-4 flex w-full items-center">
          <div className="w-16 flex-none">
            <img
              
              alt={post.title}
              height="60px"
              width="60px"
              className="rounded-full align-middle"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
              <p className='text-gray-500 font-xs'>
                  {moment(post.createdAt).format('MMM DD, YYYY')}
              </p>
              <Link href={`/post/${post.slug}`} key={post.title} className="text-md">
                  {post.title}
              </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget

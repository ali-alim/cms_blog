import Image from 'next/image'
import React from 'react'

const Author = ({ author }) => {
  return (
    <div className="relative mt-20 mb-8 rounded-lg bg-black bg-opacity-20 p-12 text-center">
      <div className="absolute left-0 right-2 -top-14">
        <Image
          src={author.photo.url}
          unoptimized
          alt={author.name}
          height="100px"
          width="100px"
          className="rounded-full align-middle"
        />
        </div>
        <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
        <p className='text-white text-lg'>
            {author.bio}
        </p>
      
    </div>
  )
}

export default Author

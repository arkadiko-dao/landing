import React from 'react'
import PostItem from './PostItem'

/**
 * Post list component
 */
const PostList = ({ posts }) => {
  return (
    <ul className="divide-y divide-gray-200">
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </ul>
  )
}

export default PostList;

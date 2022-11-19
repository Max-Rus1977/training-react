import React from 'react'
import PostItem from './PostItem'

const PostList = ({ arrPosts, argDeletePost }) => {
  return (
    <div>
      {arrPosts.map((post, index) => <PostItem
        key={post.id}
        numberPost={index + 1}
        argDeletePost={argDeletePost}
        argObjPost={post} />
      )}
    </div>
  )
}

export default PostList
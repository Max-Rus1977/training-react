import React from 'react'
import PostItem from './PostItem'
import TitlePostsNone from './TitlePostsNone'

const PostList = ({ arrPosts, argDeletePost }) => {
  if (!arrPosts.length) {
    return <TitlePostsNone />
  }

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
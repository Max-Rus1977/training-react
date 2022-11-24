import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import PostItem from './PostItem'
import TitlePostsNone from './TitlePostsNone'

const PostList = ({ arrPosts, argDeletePost }) => {
  if (!arrPosts.length) {
    return <TitlePostsNone />
  }

  return (
    <div>
      <TransitionGroup>
        {arrPosts.map((post, index) =>
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="postItem"
          >
            <PostItem
              numberPost={index + 1}
              argDeletePost={argDeletePost}
              argObjPost={post}
            />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  )
}

export default PostList
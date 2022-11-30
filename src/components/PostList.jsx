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
        {arrPosts.map((post) =>
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="postItem"
          >
            <PostItem
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
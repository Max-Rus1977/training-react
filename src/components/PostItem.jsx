import React from 'react'

const PostItem = ({ argObjPost, numberPost, argDeletePost }) => {

  const deleteThisPost = () => {
    argDeletePost(argObjPost)
  }

  return (
    <div className="box-post">
      <h3>{numberPost}. {argObjPost.title}</h3>
      <p>{argObjPost.body}</p>
      <button onClick={deleteThisPost} className="btn">❌</button>
    </div>
  )
}

export default PostItem
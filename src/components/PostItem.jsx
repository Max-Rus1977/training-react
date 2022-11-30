import React from 'react'

const PostItem = ({ argObjPost, argDeletePost }) => {

  const deleteThisPost = () => {
    argDeletePost(argObjPost)
  }

  return (
    <div className="box-post">
      <h3>{argObjPost.id}. {argObjPost.title}</h3>
      <p>{argObjPost.body}</p>
      <button onClick={deleteThisPost} className="btn">❌</button>
    </div>
  )
}

export default PostItem
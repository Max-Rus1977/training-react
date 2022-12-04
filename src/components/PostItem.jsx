import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = ({ argObjPost, argDeletePost }) => {

  const deleteThisPost = () => {
    argDeletePost(argObjPost)
  }

  return (
    <div className="box-post">
      <h3>{argObjPost.id}. {argObjPost.title}</h3>
      <p>{argObjPost.body}</p>
      <Link to={`/posts/${argObjPost.id}`}>Перейти</Link>
      <button onClick={deleteThisPost} className="btn">❌</button>
    </div>
  )
}

export default PostItem
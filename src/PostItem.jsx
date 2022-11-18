import React from 'react'

const PostItem = ({ argObjPost }) => {
  return (
    <div className="box-post">
      <h3>{argObjPost.id}. {argObjPost.title}</h3>
      <p>{argObjPost.body}</p>
      <button className="btn">❌</button>
    </div>
  )
}

export default PostItem
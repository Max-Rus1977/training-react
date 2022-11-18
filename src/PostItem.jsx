import React from 'react'

const PostItem = ({ argObjPost, numberPost }) => {
  return (
    <div className="box-post">
      <h3>{numberPost}. {argObjPost.title}</h3>
      <p>{argObjPost.body}</p>
      <button className="btn">❌</button>
    </div>
  )
}

export default PostItem
import React from 'react'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

const PostItem = ({ argObjPost, argDeletePost }) => {

  const deleteThisPost = () => {
    argDeletePost(argObjPost)
  }

  // const router = useNavigate()
  // console.log(router);

  return (
    <div className="box-post">
      <h3>{argObjPost.id}. {argObjPost.title}</h3>
      <p>{argObjPost.body}</p>
      {/* <Link to={`/posts/:id${argObjPost.id}`}>Перейти</Link> */}
      {/* <button onClick={() => useNavigate(`posts/${argObjPost.id}`)} className="btn">Перейти ...</button> */}
      <button onClick={deleteThisPost} className="btn">❌</button>
    </div>
  )
}

export default PostItem